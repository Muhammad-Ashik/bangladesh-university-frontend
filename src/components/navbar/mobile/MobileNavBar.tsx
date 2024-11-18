import Image from 'next/image'
import Link from 'next/link'

const MobileNavBar = () => (
  <div className='lg:hidden flex justify-between items-center w-full'>
    <label htmlFor='mobile-drawer' className='text-secondary cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7'
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
    <label className='input max-h-9 max-w-44 input-bordered focus:!outline-none text-slate-500  border-slate-400 flex items-center gap-2 bg-white rounded-full'>
      <input
        type='text'
        className='placeholder-slate-500 w-[calc(100%-10px)] focus:!outline-none'
        placeholder='Search'
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        fill='currentColor'
        className='h-5 w-5 text-slate-500'
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

export default MobileNavBar
