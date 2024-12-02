import Image from 'next/image'
import { careerData } from './careerData'
import CareerPageItems from './CareerPageItems'

export default function CareerPage() {
  return (
    <div className='container max-w-[1400px] mx-auto mt-10 md:mt-20 xs:mb-20 xl:mb-40 xs:px-6 lg:px-12'>
      <div className='grid md:grid-cols-2 gap-3 mb-14'>
        <h2 className='text-secondary text-left xs:text-xl sm:text-2xl xl:text-3xl font-bold'>
          Make a positive career move with Bangladesh University administration{' '}
        </h2>
        <p className='text-gray-600 text-sm xs:text-justify lg:text-base'>
          In every field of study, you know that a practical education is what
          will set you apart, giving you the skills you need to get into the
          work you want, achive your career goals and reach your full potential
        </p>
      </div>
      <div className='w-full mb-14'>
        <Image
          className='w-full object-cover'
          src='/images/career/career-cover.png'
          width={1000}
          height={1000}
          alt='career-cover'
        />
      </div>
      <div>
        <h2 className='text-secondary text-center text-2xl md:text-3xl font-bold mb-8'>
          Open Roles at Bangladesh University
        </h2>
        <div className='grid md:grid-cols-2 gap-5'>
          {careerData.map((data, index) => (
            <CareerPageItems data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
