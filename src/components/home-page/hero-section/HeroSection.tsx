'use client'

import Image from 'next/image'
import Button from '../../reusable-ui/button/Button'
import Carousel from '../../reusable-ui/carousel/Carousel'

const HeroSection = () => {
  const items = [
    {
      src: '/images/c1.jpg',
      alt: 'Hero 1',
    },
    {
      src: '/images/c2.jpg',
      alt: 'Hero 2',
    },
    {
      src: '/images/c3.jpg',
      alt: 'Hero 3',
    },
  ]

  const renderItems = items.map(({ src, alt }) => (
    <Image src={src} alt={alt} fill className='object-cover' key={src} />
  ))

  return (
    <div className='mb-16 md:mt-20 mt-[60px] relative'>
      <Carousel
        items={renderItems}
        autoSlide={true}
        autoSlideInterval={5000}
        autoSlideSpeed={1000}
        itemClassName='w-full relative h-[calc(100vh-250px)] md:h-[calc(100vh-80px)]'
      />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xs:text-center text-white gap-4'>
        <h4 className='md:text-md text-xs'>knowledge meets innovation</h4>
        <h2 className='xs:pb-3 md:pb-5 pt-2 md:text-5xl font-bold'>
          The most anticipated <br /> ceremony of the Graduates
        </h2>
        <div className='flex justify-center'>
          <Button ButtonText='Read More' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
