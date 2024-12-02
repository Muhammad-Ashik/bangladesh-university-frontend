import Image from 'next/image'
import { founderData } from './founderData'

export default function Founder() {
  return (
    <div className='container max-w-[1400px] mx-auto mt-20 xs:mb-20 xl:mb-40 xs:px-6 sm:px-12'>
      <h2 className='text-secondary text-2xl md:text-3xl font-bold mb-8'>
        Message From The Founder
      </h2>
      <div className='grid grid-cols-5 gap-10'>
        <div className='max-h-96 md:max-h-[600px] lg:col-span-2 xs:col-span-5'>
          <Image
            className='h-full object-cover'
            src='/images/founder/founder.JPG'
            width={1000}
            height={1000}
            alt='The-Founder'
          />
          <div className='my-8 space-y-2 text-center'>
            <h2 className='text-secondary text-2xl uppercase font-bold'>
              QUAZI Azher Ali
            </h2>
            <p className='text-gray-500 text-sm text-center uppercase'>
              Founder & First Vice-Chancellor, <br /> Bangladesh University
            </p>
          </div>
        </div>
        <div className='lg:col-span-3 space-y-5 xs:col-span-5 xs:mt-20 lg:mt-0'>
          {founderData.map((data, index) => (
            <div key={index}>
              <h3 className='text-secondary text-xl md:text-2xl'>
                {data.title}
              </h3>
              <p className='text-sm md:text-base leading-7 md:leading-8 text-justify text-gray-500'>
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
