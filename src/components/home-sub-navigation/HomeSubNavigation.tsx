import Link from 'next/link'
import {homeSubNavigationData} from './homeSubNavigationData'

export default function HomeSubNavigation() {
  return (
    <div className='container mx-auto w-full grid grid-cols-2 sm:grid-cols-5 gap-4 mb-20 xs:px-2 sm:px-14'>
      {homeSubNavigationData.map((data, index) => (
        <Link
          href=''
          key={index}
          className={`py-5 border flex flex-row sm:flex-col items-center justify-evenly rounded-md bg-[#F8F0F0] border-[#E8D0D0] group hover:bg-primary hover:text-white ${
            index === homeSubNavigationData.length - 1
              ? 'col-span-2 sm:col-span-1'
              : ''
          }`}
        >
          <span className='pb-2 group-hover:text-white'>{<data.icon />}</span>
          <p className='text-center text-nowrap text-secondary font-light text-sm lg:text-xl group-hover:text-white'>
            {data.title}
          </p>
        </Link>
      ))}
    </div>
  )
}
