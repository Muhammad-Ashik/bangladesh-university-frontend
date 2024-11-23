import Link from 'next/link'
import { homeSubNavigationData } from './homeSubNavigationData'

export default function HomeSubNavigation() {
  return (
    <div className='md:container container-fluid mx-auto w-full grid grid-cols-2 md:grid-cols-5 gap-4 mb-20 xs:px-8'>
      {homeSubNavigationData.map((data, index) => (
        <Link
          href=''
          key={index}
          className={`py-5 border flex flex-row sm:flex-col items-center xs:justify-center sm:justify-evenly xs:gap-4 rounded-md bg-[#F8F0F0] border-[#E8D0D0] group hover:bg-primary hover:text-white ${
            index === homeSubNavigationData.length - 1
              ? 'col-span-2 md:col-span-1'
              : ''
          }`}
        >
          <span className='xs:pb-0 pb-2 text-red-800 group-hover:text-white'>
            <data.icon className='w-8 h-8' />
          </span>
          <p className='text-center text-nowrap text-secondary font-light text-sm lg:text-xl group-hover:text-white'>
            {data.title}
          </p>
        </Link>
      ))}
    </div>
  )
}
