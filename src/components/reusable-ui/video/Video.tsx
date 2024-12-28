import React, { useEffect, useRef, useState } from 'react'
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

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  poster,
  width = '100%',
  height = 'auto',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBuffering, setIsBuffering] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isPiP, setIsPiP] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMobileView, setIsMobileView] = useState(false)
  const [showControls, setShowControls] = useState(false)

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

  const handleWaiting = () => setIsBuffering(true)
  const handlePlaying = () => setIsBuffering(false)
  const handleSeeking = () => setIsBuffering(true)
  const handleSeeked = () => setIsBuffering(false)

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener('waiting', handleWaiting)
      videoElement.addEventListener('playing', handlePlaying)
      videoElement.addEventListener('seeking', handleSeeking)
      videoElement.addEventListener('seeked', handleSeeked)
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('waiting', handleWaiting)
        videoElement.removeEventListener('playing', handlePlaying)
        videoElement.removeEventListener('seeking', handleSeeking)
        videoElement.removeEventListener('seeked', handleSeeked)
      }
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (isFullscreen) {
        document
          .exitFullscreen()
          .catch((err) => console.error('Error exiting fullscreen:', err))
      } else {
        videoRef.current
          .requestFullscreen()
          .catch((err) => console.error('Error entering fullscreen:', err))
      }
    }
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
    setVolume(newVolume)
  }

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

  const togglePiP = async () => {
    if (videoRef.current) {
      try {
        if (isPiP) {
          await document.exitPictureInPicture()
        } else {
          await videoRef.current.requestPictureInPicture()
        }
        setIsPiP(!isPiP)
      } catch (error) {
        console.error('PiP mode error:', error)
      }
    }
  }

  const handleMouseEnter = () => setShowControls(true)
  const handleMouseLeave = () => setShowControls(false)

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

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        setIsFullscreen(true)
      } else {
        setIsFullscreen(false)
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  useEffect(() => {
    const videoElement = videoRef.current

    const handlePiPChange = (e: any): void => {
      if (!e.pictureInPictureWindow.width) {
        if (videoElement) {
          videoElement.pause()
          setIsPlaying(false)
        }
      }
      const isInPiP = document.pictureInPictureElement === videoElement
      setIsPiP(isInPiP)
    }

    if (videoElement) {
      document.addEventListener('enterpictureinpicture', handlePiPChange)
      document.addEventListener('leavepictureinpicture', handlePiPChange)
    }

    return () => {
      if (videoElement) {
        document.removeEventListener('enterpictureinpicture', handlePiPChange)
        document.removeEventListener('leavepictureinpicture', handlePiPChange)
      }
    }
  }, [])

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener('timeupdate', handleTimeUpdate)
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate)
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
      <div className='relative overflow-hidden rounded-lg'>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className='w-full h-full'
          onClick={togglePlayPause}
          controls={false}
        />

        {isBuffering && (
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
            <div className='loader'></div>
          </div>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 p-2 text-white
    ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    transition-all duration-300 ease-in-out z-10`}
          style={{
            overflow: 'hidden',
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 80%)',
          }}
        >
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
            <div className='flex items-center'>
              <button
                onClick={togglePlayPause}
                className='p-2 bg-white bg-opacity-0 rounded-full hover:bg-opacity-50'
              >
                {isPlaying ? <ImPause2 size={15} /> : <ImPlay3 size={15} />}
              </button>

              <div className='flex items-center'>
                <button
                  onClick={toggleMute}
                  className='p-2 bg-white bg-opacity-0 rounded-full hover:bg-opacity-50'
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

            <div className='flex'>
              {!isMobileView && (
                <div className='flex'>
                  <button
                    onClick={seekBackward}
                    className='p-2 bg-white bg-opacity-0 rounded-full hover:bg-opacity-50'
                  >
                    <ImBackward2 size={15} />
                  </button>

                  <button
                    onClick={seekForward}
                    className='p-2 bg-white bg-opacity-0 rounded-full hover:bg-opacity-50'
                  >
                    <ImForward3 size={15} />
                  </button>
                </div>
              )}

              <div className='flex'>
                <button
                  onClick={togglePiP}
                  className='p-2 bg-white bg-opacity-0 rounded-full hover:bg-opacity-50'
                >
                  <MdPictureInPictureAlt size={15} />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className='p-2 bg-white bg-opacity-0 rounded-full hover:bg-opacity-50'
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
