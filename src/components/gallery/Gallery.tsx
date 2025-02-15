'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import Button from '../reusable-ui/button/Button'
import Video from '../reusable-ui/video/Video'

const GalleryPage = () => {
  const [viewAll, setViewAll] = useState<'photo' | 'video' | null>(null)
  const [activeItem, setActiveItem] = useState<{
    index: number
    type: 'photo' | 'video'
  } | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const photos = Array(40).fill('/images/demo-image.jpg')
  const videos = Array(40).fill(
    'https://videos.pexels.com/video-files/3009534/3009534-hd_1920_1080_24fps.mp4',
  )

  const handleViewAll = (type: 'photo' | 'video') => {
    setViewAll(type)
  }

  const handleCloseModal = () => {
    if (activeItem?.type === 'video' && videoRefs.current[activeItem.index]) {
      videoRefs.current[activeItem.index]?.pause()
    }
    setIsOpening(false)
    setTimeout(() => {
      setIsModalVisible(false)
      setActiveItem(null)
    }, 300)
  }

  const handleBackToGallery = () => {
    if (activeItem?.type === 'video' && videoRefs.current[activeItem.index]) {
      videoRefs.current[activeItem.index]?.pause()
    }
    setIsOpening(false)
    setTimeout(() => {
      setIsModalVisible(false)
      setActiveItem(null)
      setViewAll(null)
    }, 300)
  }

  const handleItemClick = (index: number, type: 'photo' | 'video') => {
    if (type === 'photo') {
      setActiveItem({ index, type })
      setIsModalVisible(true)
      setTimeout(() => {
        setIsOpening(true)
      }, 50)
    }
  }

  const handleNextItem = () => {
    if (activeItem) {
      const nextIndex =
        (activeItem.index + 1) %
        (activeItem.type === 'photo' ? photos.length : videos.length)
      setActiveItem({ ...activeItem, index: nextIndex })
    }
  }

  const handlePrevItem = () => {
    if (activeItem) {
      const prevIndex =
        (activeItem.index -
          1 +
          (activeItem.type === 'photo' ? photos.length : videos.length)) %
        (activeItem.type === 'photo' ? photos.length : videos.length)
      setActiveItem({ ...activeItem, index: prevIndex })
    }
  }

  const renderGallery = (
    items: string[],
    type: 'photo' | 'video',
    showAll: boolean = false,
  ) => {
    const itemsToRender = showAll ? items : items.slice(0, 6)
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {itemsToRender.map((item, index) => (
          <div key={index} className='cursor-pointer group'>
            {type === 'photo' ? (
              <div
                className='overflow-hidden'
                onClick={() => handleItemClick(index, type)}
              >
                <Image
                  src={item}
                  alt={`photo-${index}`}
                  width={400}
                  height={300}
                  className='w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-[1.3]'
                />
              </div>
            ) : (
              <div className='overflow-hidden'>
                <Video />
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  const renderModal = () => {
    if (activeItem !== null && isModalVisible) {
      const { index, type } = activeItem
      const currentItem = type === 'photo' ? photos[index] : videos[index]
      const totalItems = type === 'photo' ? photos.length : videos.length

      return (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
          <div
            className={`relative max-w-3xl max-h-[80%] bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform ${
              isOpening ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className='absolute top-2 right-2 text-white text-3xl'
            >
              &times;
            </button>
            <div className='absolute top-4 left-4 text-white text-lg'>
              {`${index + 1}/${totalItems}`}
            </div>
            {type === 'photo' ? (
              <Image
                src={currentItem}
                alt='large view'
                width={800}
                height={600}
                className='w-full h-auto object-contain rounded-lg'
              />
            ) : (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el
                }}
                controls
                className='w-full h-auto object-contain rounded-lg'
              >
                <source src={currentItem} type='video/mp4' />
              </video>
            )}
            <div className='absolute top-1/2 left-4 transform -translate-y-1/2'>
              <button onClick={handlePrevItem} className='text-white text-4xl'>
                <GoArrowLeft />
              </button>
            </div>
            <div className='absolute top-1/2 right-4 transform -translate-y-1/2'>
              <button onClick={handleNextItem} className='text-white text-4xl'>
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className='py-16 container mx-auto'>
      {viewAll === null && (
        <>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-semibold'>Photo Gallery</h2>
            <Button onClick={() => handleViewAll('photo')} text='view all' />
          </div>
          {renderGallery(photos, 'photo')}

          <div className='flex justify-between items-center mb-4 mt-8'>
            <h2 className='text-2xl font-semibold'>Video Gallery</h2>
            <Button onClick={() => handleViewAll('video')} text='view all' />
          </div>
          {renderGallery(videos, 'video')}
        </>
      )}

      {viewAll !== null && (
        <>
          <Button onClick={handleBackToGallery} className='mb-4'>
            <div className='flex items-center gap-2'>
              <GoArrowLeft size={20} />
              Back to Gallery
            </div>
          </Button>
          {viewAll === 'photo'
            ? renderGallery(photos, 'photo', true)
            : renderGallery(videos, 'video', true)}
        </>
      )}

      {renderModal()}
    </div>
  )
}

export default GalleryPage
