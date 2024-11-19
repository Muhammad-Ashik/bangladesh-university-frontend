'use client'

import Image from 'next/image'
import Button from '../button/Button'
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
    <div className='mx-auto pb-16 relative'>
      <Carousel
        items={items}
        autoSlide={true}
        autoSlideInterval={5000}
        autoSlideSpeed={1000}
        itemClassName='w-full relative h-[calc(100vh-250px)] md:h-[calc(100vh-80px)]'
      />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xs:text-center md:text-left text-white gap-4'>
        <h4 className='text-xs'>knowledge meets innovation</h4>
        <h2 className='xs:pb-3 md:pb-5 pt-2 md:text-3xl xs:text-xl font-bold'>
          The most anticipated <br /> ceremony of the Graduates
        </h2>
        <div className='xs:flex xs:justify-center md:justify-start'>
          <Button ButtonText='Read More' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
