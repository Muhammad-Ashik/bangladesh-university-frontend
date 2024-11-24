import Image from 'next/image'
import React from 'react'

export default function NavigationHeader() {
  return (
    <div>
      <div className='w-full h-full'>
        <Image
          className='w-full'
          src='/images/navigation-header.png'
          height={1000}
          width={1000}
          alt='Navigation-Header'
        />
      </div>
    </div>
  )
}
