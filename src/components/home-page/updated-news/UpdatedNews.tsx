'use client'

import Button from '@/components/reusable-ui/button/Button'
import SliderComponent from '@/components/reusable-ui/carousel/ReusableSlider'
import { settings } from './settings'
import { CarouselData } from './updatedNewsData'
import CarouselCard from './UpdateNewsCard'

export default function UpdatedNews() {
  const renderItem = (data: any, index: number) => (
    <CarouselCard data={data} index={index} key={index} />
  )

  function NextArrow() {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-chevron-right'
      >
        <polyline points='9 18 15 12 9 6'></polyline>
      </svg>
    )
  }

  function PrevArrow() {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-chevron-left'
      >
        <polyline points='15 18 9 12 15 6'></polyline>
      </svg>
    )
  }

  return (
    <div className='md:container w-full flex flex-col items-center my-20 mx-auto md:px-5'>
      <div className='p-4'>
        <h2 className='text-secondary font-bold text-center xs:text-2xl md:text-3xl'>
          Updated News
        </h2>
        <p className='py-4 text-secondary text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          elementum eu volutpat odio tristique ullamcorper gravida nulla. Id
          justo lobortis purus odio lectus urna, in aliquam.
        </p>
      </div>
      <div className='w-full'>
        <SliderComponent
          settings={settings}
          data={CarouselData}
          renderItem={renderItem}
          prevIcon={<PrevArrow />}
          nextIcon={<NextArrow />}
        />
      </div>
      <Button text='Read More' />
    </div>
  )
}
