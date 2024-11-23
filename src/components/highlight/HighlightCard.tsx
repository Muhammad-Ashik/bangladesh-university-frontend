import {HighlightCardProps} from './types'
import demoImage from '../../../public/images/image-1.png'
import Image from 'next/image'

export default function HighlightCard({data, index}: HighlightCardProps) {
  console.log(data)
  return (
    <div className='flex flex-wrap justify-center gap-5 mx-3 mt-3 mb-5'>
      <div className='flex flex-col items-center shadow-lg' key={index}>
        <div className='w-full py-2 px-2'>
          <Image
            className='object-cover rounded-t-md'
            src={demoImage}
            layout='responsive'
            alt='demo-image'
          />
        </div>
      </div>
    </div>
  )
}
