import Link from 'next/link'
import {homeSubNavigationData} from './homeSubNavigationData'

export default function HomeSubNavigation() {
  return (
    <div className='w-full flex gap-4 items-center justify-center mb-20 xs:flex-wrap xs:px-2 xs:gap-3 sm:gap-4'>
      {homeSubNavigationData.map((data, index) => (
        <Link
          href=''
          key={index}
          className='py-4 px-8 border flex flex-col items-center justify-center rounded-md bg-[#F8F0F0] border-[#E8D0D0] group hover:bg-primary hover:text-white'
        >
          <span className='group-hover:text-white'>{<data.icon />}</span>
          <p className='text-center text-nowrap text-secondary font-light group-hover:text-white'>
            {data.title}
          </p>
        </Link>
      ))}
    </div>
  )
}
