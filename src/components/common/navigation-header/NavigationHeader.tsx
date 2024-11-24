import Image from 'next/image'

export default function NavigationHeader({
  path,
  title,
}: {
  path: string
  title: string
}) {
  return (
    <div className='relative'>
      <Image
        className='w-full'
        src='/images/navigation-header.png'
        height={1000}
        width={1000}
        alt='Navigation-Header'
      />
      <div className='absolute inset-0 bg-[rgba(51,51,51,0.6)]'></div>
      <div className='absolute left-1/2 -translate-x-1/2 top-[52%] flex flex-col items-center justify-center text-white'>
        <p className='text-lg'>{path}</p>
        <h2 className='xl:text-3xl font-bold'>{title}</h2>
      </div>
    </div>
  )
}
