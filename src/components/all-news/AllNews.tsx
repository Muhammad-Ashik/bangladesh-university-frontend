import React from 'react'
import { allNewsData } from './allNewsData'
import UpdateNewsCard from '../home-page/updated-news/UpdateNewsCard'
import Button from '../reusable-ui/button/Button'

export default function AllNews() {
  return (
    <div className='container max-w-[1400px] mx-auto py-14 p-4 sm:px-5'>
      <h2 className='title-40 font-bold text-secondary mb-10'>Updated News</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {allNewsData.map((data, index) => (
          <UpdateNewsCard data={data} index={index} key={index} />
        ))}
      </div>
      <div className='w-full flex justify-center my-10'>
        <Button text='Read More' />
      </div>
    </div>
  )
}
