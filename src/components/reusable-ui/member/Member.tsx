import Image from 'next/image'

export interface IMemberProps {
  data: {
    imageUrl: string
    name: string
    designation: string
    email: string
    phone: string
  }
  index: number
}

export default function Member({ data, index }: IMemberProps) {
  return (
    <div className='shadow-lg rounded-md p-4 col-span-1' key={index}>
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
