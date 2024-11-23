import Image from 'next/image'
import Link from 'next/link'
import { HiMenuAlt2 } from 'react-icons/hi'

const MobileNavBar = () => (
  <div className='lg:hidden flex justify-between items-center w-full'>
    <label
      htmlFor='mobile-drawer'
      className='text-secondary cursor-pointer flex gap-4'
    >
      <HiMenuAlt2 size={35} />
    </label>
    <Link href='/'>
      <Image
        src='/images/logo.png'
        alt='Logo'
        width={40}
        height={40}
        priority
      />
    </Link>
  </div>
)

export default MobileNavBar
