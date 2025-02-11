import Button from '@/components/reusable-ui/button/Button'
import { routes } from '@/config/routes'
import Image from 'next/image'
import Link from 'next/link'
import { GoArrowRight } from 'react-icons/go'
import { HiOutlineSearch } from 'react-icons/hi'
import Dropdown from '../navbar-dropdown/Dropdown'
import { dropdownData } from '../navbarData'

const DesktopNavBar = () => (
  <div className='hidden lg:flex justify-between items-center'>
    <div className='flex items-center gap-28'>
      <Link href={routes.home} className='w-16'>
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
        <Link
          href={routes.home}
          className='text-secondary text-14 hover:text-primary'
        >
          Home
        </Link>
      </li>
      {dropdownData.map((dropdown, index) => (
        <Dropdown key={index} label={dropdown.label} items={dropdown.items} />
      ))}
      <li>
        <Link href='#' className='text-secondary text-14 hover:text-primary'>
          Certificate
        </Link>
      </li>
      <li>
        <Link
          href='/contact-us'
          className='text-secondary text-14 hover:text-primary'
        >
          Contact
        </Link>
      </li>
      <li>
        <Button text='Online Portal' className='gap-2' icon={GoArrowRight} />
      </li>
    </ul>
    <div className='input h-10 rounded-full text-slate-500 border border-slate-400 flex items-center bg-white focus:outline-none'>
      <input
        type='text'
        className='placeholder-slate-500 w-full border-none focus:outline-none'
        placeholder='Search'
      />
      <HiOutlineSearch size={20} />
    </div>
  </div>
)

export default DesktopNavBar
