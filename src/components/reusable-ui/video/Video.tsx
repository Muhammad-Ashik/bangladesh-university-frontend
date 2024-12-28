import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import {
  ImBackward2,
  ImForward3,
  ImPause2,
  ImPlay3,
  ImVolumeHigh,
  ImVolumeMute2,
} from 'react-icons/im'
import {
  MdOpenInFull,
  MdOutlineCloseFullscreen,
  MdPictureInPictureAlt,
} from 'react-icons/md'
import './Video.css'

interface VideoPlayerProps {
  src?: string
  poster?: string
  width?: string
  height?: string
}

// video component
const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  poster,
  width = '100%',
  height = 'auto',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isPiP, setIsPiP] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMobileView, setIsMobileView] = useState(false)
  const [showControls, setShowControls] = useState(false)

  // Handle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (isFullscreen) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  // Handle volume change
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
    setVolume(newVolume)
  }

  // Handle forward/backward buttons (5 seconds)
  const seekForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5
    }
  }

  const seekBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5
    }
  }

  // Handle Picture-in-Picture mode
  const togglePiP = async () => {
    if (videoRef.current) {
      try {
        // If currently in PiP, exit PiP
        if (isPiP) {
          await document.exitPictureInPicture()
        } else {
          // Request PiP mode
          await videoRef.current.requestPictureInPicture()
        }
        setIsPiP(!isPiP) // Toggle PiP state
      } catch (error) {
        console.error('PiP mode error:', error)
      }
    }
  }

  // Show controls when hovering
  const handleMouseEnter = () => setShowControls(true)
  const handleMouseLeave = () => setShowControls(false)

  // Update current time and duration of the video
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.currentTime = parseFloat(event.target.value)
    }
  }

  // Listen for PiP mode changes and reset the state
  useEffect(() => {
    const handlePiPChange = () => {
      setIsPiP(document.pictureInPictureElement === videoRef.current)
    }

    // Listen for the `enter` and `exit` PiP events
    document.addEventListener('enterpictureinpicture', handlePiPChange)
    document.addEventListener('leavepictureinpicture', handlePiPChange)

    return () => {
      document.removeEventListener('enterpictureinpicture', handlePiPChange)
      document.removeEventListener('leavepictureinpicture', handlePiPChange)
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate)
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [])

  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth < 768) {
        setIsMobileView(true)
      } else {
        setIsMobileView(false)
      }
    }
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [])

  return (
    <div
      className={`video-player relative ${isFullscreen ? 'w-screen h-screen' : ''}`}
      style={{ width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Wrapper div to contain both video and controls */}
      <div className='relative overflow-hidden rounded-lg'>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className='w-full h-full'
          onClick={togglePlayPause}
        />
        {/* Play/Pause Icon in Center */}
        {!isPlaying && !isPiP && (
          <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-lg'>
            <button onClick={togglePlayPause} className='text-white text-4xl'>
              <FaPlay />
            </button>
          </div>
        )}
        {/* Controls */}
        <div
          className={`bg-black bg-opacity-30 absolute bottom-0 left-0 right-0 p-2 text-white
            ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            transition-all duration-300 ease-in-out z-10`}
          style={{ overflow: 'hidden' }}
        >
          {/* Progress Bar */}
          <input
            type='range'
            min='0'
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className='video-range'
            style={{
              background: `linear-gradient(to right, white ${(currentTime / duration) * 100}%, rgba(255, 255, 255, 0.2) 0%)`,
              height: '6px',
              borderRadius: '5px',
            }}
          />
          <div className='flex justify-between items-center w-full px-2 text-xs'>
            <span>
              {new Date(currentTime * 1000).toISOString().substr(14, 5)}
            </span>
            <span>{new Date(duration * 1000).toISOString().substr(14, 5)}</span>
          </div>
          <div className='flex items-center justify-between w-full mt-2'>
            <div className='flex items-center space-x-2'>
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className='p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-50'
              >
                {isPlaying ? <ImPause2 size={15} /> : <ImPlay3 size={15} />}
              </button>

              {/* Volume Control */}
              <div className='flex items-center space-x-2'>
                <button
                  onClick={toggleMute}
                  className='p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-50'
                >
                  {isMuted ? (
                    <ImVolumeMute2 size={15} />
                  ) : (
                    <ImVolumeHigh size={15} />
                  )}
                </button>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={volume}
                  onChange={handleVolumeChange}
                  className='volume-range'
                  style={{
                    background: `linear-gradient(to right, white ${volume * 100}%, rgba(255, 255, 255, 0.2) 0%)`,
                    height: '6px',
                    borderRadius: '5px',
                  }}
                />
              </div>
            </div>

            <div className='flex space-x-2'>
              {/* Forward/Backward Buttons */}
              {!isMobileView && (
                <div className='flex space-x-2'>
                  <button
                    onClick={seekBackward}
                    className='p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-50'
                  >
                    <ImBackward2 size={15} />
                  </button>

                  <button
                    onClick={seekForward}
                    className='p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-50'
                  >
                    <ImForward3 size={15} />
                  </button>
                </div>
              )}

              {/* Picture-in-Picture and Full-Screen Buttons */}
              <div className='flex space-x-2'>
                <button
                  onClick={togglePiP}
                  className='p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-50'
                >
                  <MdPictureInPictureAlt size={15} />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className='p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-50'
                >
                  {isFullscreen ? (
                    <MdOutlineCloseFullscreen size={15} />
                  ) : (
                    <MdOpenInFull size={15} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
