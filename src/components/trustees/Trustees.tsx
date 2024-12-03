import Image from 'next/image'
import { trusteesData } from './trusteesData'

export default function Trustees() {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center py-20'>
      <div className='w-full max-w-[1400px] mx-auto grid gap-6 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {trusteesData.map((trustee, index) => (
          <div
            key={index}
            className={`shadow-lg rounded-lg p-4 ${
              index === 0 || index === 1
                ? 'md:col-span-full sm:col-span-1 md:w-96 mx-auto' // First item takes full row but remains constrained in size
                : 'col-span-1'
            }`}
          >
            <div className='h-80 w-full overflow-hidden rounded-lg'>
              <Image
                className='w-full h-full object-cover'
                src={trustee.imageUrl}
                width={1000}
                height={1000}
                alt={`Image of ${trustee.Name}`}
              />
            </div>
            <div className='mt-3'>
              <p className='text-gray-600 text-sm'>{trustee.designation}</p>
              <h3 className='text-lg font-bold'>{trustee.Name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
