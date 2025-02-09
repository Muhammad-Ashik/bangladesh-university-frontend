import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

interface SliderComponentProps {
  settings: Settings
  data: any[]
  renderItem: (data: any, index: number) => React.ReactNode
  prevIcon: React.JSX.Element | undefined
  nextIcon: React.JSX.Element | undefined
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  settings,
  data,
  renderItem,
  prevIcon,
  nextIcon,
}) => {
  const sliderRef = React.useRef<Slider | null>(null)

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <>
      <div className='px-8 relative w-full'>
        <Slider ref={sliderRef} {...settings}>
          {data.map((item, index) => renderItem(item, index))}
        </Slider>
        <div
          onClick={goToPrev}
          className='absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10'
        >
          {prevIcon || (
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
          )}
        </div>

        <div
          onClick={goToNext}
          className='absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10'
        >
          {nextIcon || (
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
          )}
        </div>
      </div>
    </>
  )
}

export default SliderComponent
