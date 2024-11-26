'use client'

import SliderComponent from '@/components/reusable-ui/carousel/ReusableSlider'
import { settings } from '../updated-news/settings'
import { CarouselData } from '../updated-news/updatedNewsData'
import HighlightCard from './HighlightCard'

export default function HighlightSection() {
  const renderItem = (data: any, index: number) => (
    <HighlightCard data={data} index={index} key={index} />
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
          Highlights
        </h2>
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
    </div>
  )
}
