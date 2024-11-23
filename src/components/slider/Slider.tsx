'use client'
import {useRef} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import HighlightCard from '../highlight/HighlightCard'
import UpdateNewsCard from '../updated-news/UpdateNewsCard'
import {SliderProps} from './type'

export default function CustomSlider({data}: SliderProps) {
  const sliderRef = useRef<Slider | null>(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  // Handlers for navigation
  const goToPrev = () => sliderRef.current?.slickPrev()
  const goToNext = () => sliderRef.current?.slickNext()
  return (
    <div className='relative max-w-full px-7 2xl:max-w-[1300px] mb-5 sm:mb-10'>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) =>
          'imageURL' in item ? (
            <UpdateNewsCard data={item} index={index} key={index} />
          ) : (
            <HighlightCard data={item} index={index} key={index} />
          ),
        )}
      </Slider>

      {/* Left and Right Arrows */}
      <span
        className='absolute xs:left-3 md:left-0 top-[48%] w-7 h-7 cursor-pointer flex items-center justify-center rounded-[50%] xs:bg-transparent xs:text-primary xl:bg-primary xl:text-white'
        onClick={goToPrev}
      >
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
      </span>
      <span
        className='absolute xs:right-3 md:right-0 top-[48%] w-7 h-7 cursor-pointer flex items-center justify-center rounded-[50%] xs:bg-transparent xs:text-primary xl:bg-primary xl:text-white'
        onClick={goToNext}
      >
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
      </span>
    </div>
  )
}
