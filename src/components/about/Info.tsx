import { infoData } from './infoData'

export default function Info() {
  return (
    <div className='h-full flex flex-col justify-between gap-8'>
      {infoData.map((data, index) => (
        <div
          key={index}
          className='flex flex-col justify-center bg-primary text-white p-5 space-y-4 h-full border border-black'
        >
          <div className='flex justify-between items-center'>
            <h2 className='text-30'>{data.title}</h2>
            <data.icon size={30} />
          </div>
          <p className='text-14'>{data.description}</p>
        </div>
      ))}
    </div>
  )
}
