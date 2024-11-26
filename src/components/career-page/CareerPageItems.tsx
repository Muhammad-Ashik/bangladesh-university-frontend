import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import Button from '../reusable-ui/button/Button'
import { ICareerData } from './type'

const CareerPageItems = ({ data }: ICareerData) => {
  return (
    <div className='bg-red-100 p-3 lg:p-6'>
      <span className='bg-white text-blue-600 py-1 px-2 text-sm'>
        {data.tag}
      </span>
      <h2 className='text-black text-base sm:text-xl md:text-lg xl:text-2xl font-bold my-4'>
        {data.title}
      </h2>
      <div className='flex flex-wrap xs:space-y-1 md:space-y-0 justify-between items-center pb-4'>
        <p className='flex items-center text-gray-600 text-sm lg:text-base'>
          <MdOutlineCalendarMonth size={18} />
          <span className='px-1'>{data.date}</span>
        </p>
        <p className='flex items-center text-gray-600 text-sm lg:text-base'>
          <IoLocationOutline size={18} />
          <span className='px-1'>{data.location}</span>
        </p>
      </div>
      <Button text='Apply Now' />
    </div>
  )
}

export default CareerPageItems
