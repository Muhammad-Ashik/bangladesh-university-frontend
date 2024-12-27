import Image from 'next/image'
import { campusLifeData } from './campusLifeData'

export default function CampusLife() {
  return (
    <div className='container max-w-[1400px] mx-auto py-14 p-4 sm:px-5'>
      <div className='mb-10 space-y-3'>
        <h2 className='title-40 font-bold text-secondary text-center '>
          Campus Life
        </h2>
        <p className='text-center text-16'>
          BU is a thriving campus and community sitting on 1.7 acres of
          flatlands. Living at BU brings surprises and new experiences every
          day, in an extraordinary community of creative and accomplished people
          from around the country.
        </p>
      </div>
      <div className='w-full my-10'>
        <Image
          className='object-cover w-full'
          src='/images/campus-life/campus-life-1.png'
          width={1000}
          height={1000}
          alt='campus-life'
        />
      </div>
      <div className='grid sm:grid-cols-2 gap-5 sm:gap-7 xl:gap-14 justify-center mb-10'>
        {campusLifeData.map((data, index) => (
          <div className='w-full shadow-xl p-4 rounded-lg' key={index}>
            <Image
              className='w-full object-cover'
              src={data.imageUrl}
              width={500}
              height={500}
              alt='campus-life'
            />
            <h3 className='text-24 font-bold mt-7 mb-4'>{data.title}</h3>
            <p className='text-16 mb-5'>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
