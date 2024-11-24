'use client'

import Image from 'next/image'
import Button from '../../reusable-ui/button/Button'
import Carousel from '../../reusable-ui/carousel/Carousel'

const HeroSection = () => {
  const items = [
    {
      src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Hero 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Hero 2',
    },
    {
      src: 'https://images.unsplash.com/photo-1497333558196-daaff02b56d0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Hero 3',
    },
  ]

  const renderItems = items.map(({ src, alt }) => (
    <div
      className='relative w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-transparent'
      key={alt}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className='object-cover mix-blend-overlay'
        key={src}
      />
    </div>
  ))

  return (
    <div className='mb-16 md:mt-20 mt-[60px] relative'>
      <Carousel
        hideNextButton
        hidePrevButton
        items={renderItems}
        autoSlide={true}
        autoSlideInterval={5000}
        autoSlideSpeed={1000}
        itemClassName='w-full relative h-[calc(100vh-350px)] md:h-[calc(100vh-80px)]'
      />
      <div className='w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xs:text-center text-white gap-4'>
        <h4 className='md:text-md text-xs'>knowledge meets innovation</h4>
        <h2 className='xs:pb-3 md:pb-5 pt-2 md:text-5xl font-bold'>
          The most anticipated <br /> ceremony of the Graduates
        </h2>
        <div className='flex justify-center'>
          <Button text='Read More' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
