import Image from 'next/image'
import Button from '../reusable-ui/button/Button'
import { trusteesData } from './trusteesData'

export default function Trustees() {
  return (
    <div className='container w-full mx-auto flex flex-col justify-center items-center pb-20'>
      <div className='w-full max-w-[1400px] mx-auto p-5 flex flex-wrap justify-center items-center md:space-x-3 md:space-y-0 space-y-5 my-10'>
        <input
          type='text'
          placeholder='Search...'
          className='h-10 input input-bordered w-full max-w-xs focus-within:outline-none'
        />
        <select className='select select-bordered min-h-10 h-10 w-full max-w-xs focus-within:outline-none'>
          <option defaultValue='All Departments'>All Departments</option>
          <option>CSE</option>
          <option>EEE</option>
          <option>Management</option>
          <option>Administration</option>
        </select>
        <Button className='rounded-md py-2.5 mt-5 lg:mt-0' text='Search' />
      </div>

      <div className='w-full max-w-[1400px] mb-20 mx-auto grid gap-x-6 gap-y-8 xs:grid-cols-1 xs:gap-x-2 sm:grid-cols-2 md:px-10 lg:grid-cols-3 2xl:px-0 2xl:grid-cols-4'>
        {trusteesData.map((data, index) => (
          <div className='shadow-lg rounded-lg p-3 mx-4' key={index}>
            <div className='w-full'>
              <Image
                className='w-full xs:h-72 object-cover rounded-lg'
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
      <Button text='Show More' />
    </div>
  )
}
