import Image from 'next/image'
import Link from 'next/link'
import {UpdatedNewsProps} from './types'

export default function UpdateNewsCard({data, index}: UpdatedNewsProps) {
  if ('imageURL' in data && 'title' in data) {
    return (
      <div className='flex flex-wrap justify-center gap-5 mx-3 mt-3 mb-5'>
        <div className='flex flex-col items-center shadow-lg' key={index}>
          <div className='w-full py-2 px-2'>
            <Image
              className='object-cover rounded-t-md'
              src={data.imageURL}
              layout='responsive'
              alt={data.title}
            />
          </div>
          <div className='xs:px-2 xs:py-4 lg:px-6 lg:py-6'>
            <h3 className='xs:text-sm sm:text-base font-bold text-secondary text-left'>
              {data.title}
            </h3>
            <div className='xs:text-xs sm:text-base flex flex-nowrap flex-row items-center justify-between pt-3'>
              <Link
                href={data.link}
                className='xs:text-xs sm:text-sm lg:text-base text-primary flex text-nowrap items-center'
              >
                {data.ButtonText}
                <svg
                  className='w-2.5 h-2.5 ml-2 text-primary xs:ml-1 sm:hidden md:block'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 8 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1'
                  />
                </svg>
              </Link>
              <span className='xs:text-xs sm:text-sm lg:text-base flex text-nowrap items-center text-primary gap-2'>
                {data.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
