import Image from 'next/image'
import { trusteesData } from './trusteesData'

export default function Trustees() {
  return (
    <div className='container w-full max-w-[1400px] my-20 mx-auto grid gap-x-6 gap-y-8 xs:grid-cols-1 xs:gap-x-2 sm:grid-cols-2 md:px-10 2xl:px-0 lg:grid-cols-3 2xl:grid-cols-4'>
      {trusteesData.map((data, index) => (
        <div className='shadow-lg rounded-lg p-3 mx-4' key={index}>
          <div className='w-full'>
            <Image
              className='w-full xs:h-80 object-cover rounded-lg'
              src={data.imageUrl}
              width={500}
              height={500}
              alt='image-1'
            />
          </div>
          <div>
            <p className='text-md text-gray-600 py-2'>{data.designation}</p>
            <h3 className='text-lg font-bold'>{data.Name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
