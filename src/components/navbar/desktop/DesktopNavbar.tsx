import Image from 'next/image'
import Link from 'next/link'
import Dropdown from '../navbar-dropdown/Dropdown'
import {dropdownData} from '../navbarData'

const DesktopNavBar = () => (
  <div className='hidden lg:flex justify-between items-center hh-[80px]'>
    <div className='flex items-center gap-28'>
      <Link href='/' className='w-16'>
        <Image
          src='/images/logo.png'
          alt='Logo'
          width={350}
          height={350}
          priority
        />
      </Link>
    </div>
    <ul className='flex items-center space-x-5 md:space-x-6'>
      <li>
        <Link href='#' className='text-darkTwo text-sm hover:text-main'>
          Home
        </Link>
      </li>
      {dropdownData.map((dropdown, index) => (
        <Dropdown key={index} label={dropdown.label} items={dropdown.items} />
      ))}
      <li>
        <Link href='#' className='text-darkTwo text-sm hover:text-main'>
          Certificate
        </Link>
      </li>
      <li>
        <Link
          href='#'
          className='py-2 px-3 text-md text-white bg-main rounded-md border border-transparent hover:text-main hover:border-main hover:bg-white'
        >
          Online Portal
        </Link>
      </li>
    </ul>
    <label className='input input-bordered flex items-center gap-2 bg-white rounded-full'>
      <input type='text' className='' placeholder='Search' />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        fill='currentColor'
        className='h-5 w-5 text-gray-400'
      >
        <path
          fillRule='evenodd'
          d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
          clipRule='evenodd'
        />
      </svg>
    </label>
  </div>
)

export default DesktopNavBar
