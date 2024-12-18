import React from 'react'
import { aboutEventData } from '../eventData'

const AboutEvent = () => {
  return (
    <div>
      <h3 className='title-40 font-bold pb-2'>About The Event</h3>
      <p className='text-16 text-gray-500'>
        Join us for the Future Minds Symposium, a thought-provoking educational
        event designed to inspire and empower individuals to navigate the
        challenges and opportunities of tomorrows world. This symposium brings
        together leading experts, visionaries, and innovators from various
        fields to explore cutting-edge ideas and share insights on shaping the
        future.
      </p>
      {aboutEventData.map((data, index) => (
        <div className='my-10' key={index}>
          <h4 className='text-20 font-bold pb-1'>{data.title}</h4>
          <p className='text-16 text-gray-500'>{data.description}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutEvent
