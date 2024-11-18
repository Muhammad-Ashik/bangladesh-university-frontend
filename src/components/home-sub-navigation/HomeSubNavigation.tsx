import Link from 'next/link'
import {homeSubNavigationData} from './homeSubNavigationData'

export default function HomeSubNavigation() {
  return (
    <div className='container mx-auto grid grid-cols-5 gap-4 mb-20 xs:px-2'>
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
