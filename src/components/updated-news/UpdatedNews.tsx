'use client'
import React from 'react'
import {updatedNewsData} from './updatedNewsData'
import CustomSlider from '../slider/Slider'

export default function UpdatedNews() {
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
      <CustomSlider data={updatedNewsData} />
    </div>
  )
}
