import Image from 'next/image'

export default function NavigationHeader({
  path,
  title,
}: {
  path: string
  title: string
}) {
  return (
    <div className='h-40 md:h-80 relative mt-[60px]'>
      <div className='relative w-full h-full'>
        <Image
          className='w-full h-full object-cover'
          src='/images/navigation-header.png'
          height={1000}
          width={1000}
          alt='Navigation-Header'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      </div>
      <div className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white'>
        <p className='text-18'>{path}</p>
        <h2 className='text-30 font-bold'>{title}</h2>
      </div>
    </div>
  )
}
