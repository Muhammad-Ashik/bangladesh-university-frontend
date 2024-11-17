'use client'

import Image from 'next/image'
import Carousel from '../carousel/Carousel'

const items = [
  <div key='nature-water'>
    <Image
      layout='fill'
      src='/images/c1.jpg'
      alt='Nature Water'
      style={{objectFit: 'cover'}}
    />
  </div>,
  <div key='nature-forest'>
    <Image
      layout='fill'
      src='/images/c2.jpg'
      alt='Nature Forest'
      style={{objectFit: 'cover'}}
    />
  </div>,
  <div key='nature-mountain'>
    <Image
      layout='fill'
      src='/images/c3.jpg'
      alt='Nature Mountain'
      style={{objectFit: 'cover'}}
    />
  </div>,
]

const HeroSection = () => {
  return (
    <div className='mx-auto pb-16'>
      <Carousel
        items={items}
        autoSlide={true}
        autoSlideInterval={5000}
        autoSlideSpeed={1000}
        itemClassName='w-full relative h-[calc(100vh-350px)] md:h-[calc(100vh-80px)]'
      />
    </div>
  )
}

export default HeroSection
