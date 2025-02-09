'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

interface CarouselProps {
  items: React.ReactNode[]
  renderNextButton?: ((onClick: () => void) => React.ReactNode) | null
  renderPrevButton?: ((onClick: () => void) => React.ReactNode) | null
  renderIndicator?:
    | ((isActive: boolean, index: number) => React.ReactNode)
    | null
  hideNextButton?: boolean
  hidePrevButton?: boolean
  autoSlide?: boolean
  autoSlideInterval?: number
  autoSlideSpeed?: number
  itemClassName?: string
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  renderNextButton,
  renderPrevButton,
  renderIndicator,
  hideNextButton = false,
  hidePrevButton = false,
  autoSlide = false,
  autoSlideInterval = 3000,
  autoSlideSpeed = 500,
  itemClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const extendedItems = [items[items.length - 1], ...items, items[0]]

  const totalSlides = items.length

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }, [isTransitioning])

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  useEffect(() => {
    if (isTransitioning) {
      const transitionEndHandler = setTimeout(() => {
        setIsTransitioning(false)

        if (currentIndex === 0) {
          setCurrentIndex(totalSlides)
          containerRef.current!.style.transition = 'none'
        } else if (currentIndex === totalSlides + 1) {
          setCurrentIndex(1)
          containerRef.current!.style.transition = 'none'
        } else {
          containerRef.current!.style.transition = `transform ${autoSlideSpeed}ms ease`
        }
      }, autoSlideSpeed)

      return () => clearTimeout(transitionEndHandler)
    }
  }, [currentIndex, isTransitioning, totalSlides, autoSlideSpeed])

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, autoSlideInterval)
      return () => clearInterval(interval)
    }
  }, [autoSlide, autoSlideInterval, nextSlide])

  return (
    <div className='relative w-full overflow-hidden' ref={containerRef}>
      <div
        className='flex'
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning
            ? `transform ${autoSlideSpeed}ms ease`
            : 'none',
        }}
      >
        {extendedItems.map((item, index) => (
          <div key={index} className='flex-shrink-0 w-full'>
            <div className={itemClassName}>{item}</div>
          </div>
        ))}
      </div>

      {!hidePrevButton &&
        (renderPrevButton ? (
          renderPrevButton(prevSlide)
        ) : (
          <button
            onClick={prevSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full border transition-all hover:bg-white hover:text-black'
          >
            Prev
          </button>
        ))}

      {!hideNextButton &&
        (renderNextButton ? (
          renderNextButton(nextSlide)
        ) : (
          <button
            onClick={nextSlide}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full border transition-all hover:bg-white hover:text-black'
          >
            Next
          </button>
        ))}

      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
        {items.map((_, index) =>
          renderIndicator ? (
            renderIndicator(currentIndex - 1 === index, index)
          ) : (
            <div
              key={index}
              className={`h-2 ${
                currentIndex - 1 === index ? 'w-8' : 'opacity-40 w-4'
              } bg-white rounded transition-all`}
            />
          ),
        )}
      </div>
    </div>
  )
}

export default Carousel
