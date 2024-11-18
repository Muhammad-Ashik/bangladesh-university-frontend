import Link from 'next/link'

export default function Button() {
  return (
    <Link
      href='#'
      className='w-min flex xs:px-2 xs:py-2 md:px-3 md:py-2 text-nowrap group rounded-md bg-primary text-white border border-transparent transition duration-300 ease-in-out hover:bg-white hover:text-primary hover:border-primary'
    >
      <p className='text-xs'>Read More</p>
      <svg
        className='w-2.5 h-2.5 mt-1 -rotate-45 text-white ml-2 transition duration-300 ease-in-out group-hover:text-primary'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 14 10'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M1 5h12m0 0L9 1m4 4L9 9'
        />
      </svg>
    </Link>
  )
}
