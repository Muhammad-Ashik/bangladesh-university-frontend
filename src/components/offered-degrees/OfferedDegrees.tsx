import Image from 'next/image'
import Link from 'next/link'
import { offeredDegreesData } from './offeredDegreesData'

export default function OfferedDegrees() {
  return (
    <div className='container max-w-[1400px] mx-auto py-14 px-5'>
      <h2 className='text-24 font-bold text-secondary mb-10'>
        Bangladesh University currently offers 14 degrees through its three
        faculties
      </h2>
      <div className='w-full space-y-24'>
        {offeredDegreesData.map((data, index) => (
          <div
            key={index}
            className={`grid justify-center md:grid-cols-2 gap-10`}
          >
            <div className={`${index % 2 !== 0 ? 'md:order-3' : ''}`}>
              <h3 className='font-bold text-18 lg:text-2xl md:text-24 mb-4 lg:mb-8'>
                {data.faculty}
              </h3>
              <ul className='text-primary text-14 font-bold underline space-y-5'>
                {data.degrees.map((degree, i) => (
                  <li key={i}>
                    {degree.link ? (
                      <Link href={degree.link}>{degree.name}</Link>
                    ) : (
                      degree.name
                    )}
                    {degree.subDegrees && (
                      <ul className='text-secondary no-underline underline-offset-0 list-disc list-inside my-2 space-y-1'>
                        {degree.subDegrees.map((subDegree, j) => (
                          <li key={j}>{subDegree}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src={data.image}
                width={1000}
                height={1000}
                alt='offered-degrees'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
