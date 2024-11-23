'use client'
import React from 'react'
import {highlightData} from './hightlightData'
import CustomSlider from '../slider/Slider'

export default function Hightlight() {
  return (
    <div className='md:container w-full flex flex-col items-center my-20 mx-auto md:px-5'>
      <div className='p-4'>
        <h2 className='text-secondary font-bold text-center xs:text-2xl md:text-3xl'>
          Highlights
        </h2>
      </div>
      <CustomSlider data={highlightData} />
    </div>
  )
}
