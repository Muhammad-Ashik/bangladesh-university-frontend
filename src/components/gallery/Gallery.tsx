'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { GoArrowLeft } from 'react-icons/go'
import Button from '../reusable-ui/button/Button'

const GalleryPage = () => {
  const [viewAll, setViewAll] = useState<'photo' | 'video' | null>(null)
  const [activeItem, setActiveItem] = useState<{
    index: number
    type: 'photo' | 'video'
  } | null>(null)

  const photos = Array(40).fill(
    'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7',
  )
  const videos = Array(40).fill('/videos/video1.mp4')

  const handleViewAll = (type: 'photo' | 'video') => {
    setViewAll(type)
  }

  const handleCloseModal = () => {
    setActiveItem(null)
  }

  const handleBackToGallery = () => {
    setActiveItem(null)
    setViewAll(null)
  }

  const handleItemClick = (index: number, type: 'photo' | 'video') => {
    setActiveItem({ index, type })
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
          <div
            key={index}
            onClick={() => handleItemClick(index, type)}
            className='cursor-pointer'
          >
            {type === 'photo' ? (
              <Image
                src={item}
                alt={`photo-${index}`}
                width={400}
                height={300}
                className='w-full h-auto object-cover rounded'
              />
            ) : (
              <video controls className='w-full h-auto object-cover rounded'>
                <source src={item} type='video/mp4' />
              </video>
            )}
          </div>
        ))}
      </div>
    )
  }

  const renderModal = () => {
    if (activeItem !== null) {
      const { index, type } = activeItem
      const currentItem = type === 'photo' ? photos[index] : videos[index]

      const handleBackdropClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        handleCloseModal()
      }

      return (
        <div
          className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'
          onClick={handleBackdropClick}
        >
          <div
            className='relative max-w-3xl max-h-[80%]'
            onClick={(e) => e.stopPropagation()}
          >
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
                controls
                className='w-full h-auto object-contain rounded-lg'
              >
                <source src={currentItem} type='video/mp4' />
              </video>
            )}
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className='p-4'>
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
