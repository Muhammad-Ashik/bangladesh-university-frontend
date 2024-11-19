'use client'
import {useRef} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Button from '../button/Button'
import CarouselCard from './UpdateNewsCard'
import {CarouselData} from './updatedNewsData'

export default function UpdatedNews() {
  const sliderRef = useRef<Slider | null>(null)
  const settings = {
    dots: false, // Display dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Slide transition speed
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: false,

    responsive: [
      {
        breakpoint: 640, // For small screen sizes
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450, // For small screen sizes
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  // Function to handle previous slide
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  // Function to handle next slide
  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <div className='md:container w-full flex flex-col items-center my-20 mx-auto md:px-5'>
      <div className='p-4'>
        <h2 className=' text-secondary font-bold text-center xs:text-2xl md:text-3xl'>
          Updated News
        </h2>
        <p className='py-4 text-secondary text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          elementum eu volutpat odio tristique ullamcorper gravida nulla. Id
          justo lobortis purus odio lectus urna, in aliquam.
        </p>
      </div>
      <div className='relative max-w-full px-7 2xl:max-w-[1300px] mb-5 sm:mb-10'>
        <Slider ref={sliderRef} {...settings}>
          {CarouselData.map((data, index) => (
            <CarouselCard data={data} index={index} key={index} />
          ))}
        </Slider>
        <span
          className='absolute xs:left-3  md:left-0 top-[48%] w-7 h-7 cursor-pointer flex items-center justify-center rounded-[50%] xs:bg-transparent xs:text-primary xl:bg-primary xl:text-white'
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
      <Button ButtonText='Read More' />
    </div>
  )
}
