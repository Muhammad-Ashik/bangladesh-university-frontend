import { infoData } from './infoData'

export default function Info() {
  return (
    <div className='h-full flex flex-col items-stretch'>
      {infoData.map((data, index) => (
        <div
          key={index}
          className='flex flex-col bg-primary text-white p-5 space-y-4 border border-black'
        >
          <div className='flex justify-between items-center'>
            <h2 className='text-3xl'>{data.title}</h2>
            <data.icon size={30} />
          </div>
          <p className='text-sm'>{data.description}</p>
        </div>
      ))}
    </div>
  )
}
