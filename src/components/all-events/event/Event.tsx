import Image from 'next/image'
import Link from 'next/link'
import { CiCalendarDate, CiLocationOn } from 'react-icons/ci'
import { MdOutlineWatchLater } from 'react-icons/md'
import { IEvent } from '../allEventsData'

const Event = ({ data, index }: IEvent) => {
  return (
    <div className='shadow-lg rounded-md px-3 py-5' key={index}>
      <Image
        className='w-full object-cover'
        src={data.imageURL}
        width={500}
        height={500}
        alt={`image-${index}`}
      />
      <div className='text-14 lg:text-16 my-5'>
        <div className='flex items-center gap-x-2 lg:gap-x-6'>
          <span className='flex items-center gap-x-1 lg:gap-x-3'>
            <CiCalendarDate size={16} /> {data.date}
          </span>
          <span className='flex items-center gap-x-1 lg:gap-x-3'>
            <MdOutlineWatchLater size={16} /> {data.time}
          </span>
        </div>
        <span className='flex mt-2 gap-x-1 lg:gap-x-3'>
          <CiLocationOn size={18} /> {data.location}
        </span>
      </div>
      <Link href='/event'>
        <h3 className='font-bold md:text-sm lg:text-2xl cursor-pointer'>
          {data.title}
        </h3>
      </Link>
    </div>
  )
}

export default Event
