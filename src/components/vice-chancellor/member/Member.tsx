import Image from 'next/image'
import { IMemberProps } from '../viceChancellorData'

export default function Member({ data, index }: IMemberProps) {
  return (
    <div
      className={`shadow-lg rounded-md p-4 ${index === 0 ? 'md:col-span-full sm:col-span-1 md:w-96 mx-auto' : 'col-span-1'}`}
    >
      <Image
        src={data.imageUrl}
        width={500}
        height={500}
        alt='vice-chancellor'
      />
      <div className='space-y-2'>
        <h3 className='text-18 font-bold mt-3'>{data.name}</h3>
        <p className='text-16 text-primary'>{data.designation}</p>
        <div>
          <p className='text-14'>Email: {data.email}</p>
          <p className='text-14'>Phone: {data.phone}</p>
        </div>
      </div>
    </div>
  )
}
