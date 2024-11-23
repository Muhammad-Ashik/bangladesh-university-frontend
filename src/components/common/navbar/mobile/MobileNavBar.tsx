import Image from 'next/image'
import Link from 'next/link'

const MobileNavBar = () => (
  <div className='lg:hidden flex justify-between items-center w-full'>
    <label
      htmlFor='mobile-drawer'
      className='text-secondary cursor-pointer flex gap-4'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-9 w-9'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h7'
        />
      </svg>
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
