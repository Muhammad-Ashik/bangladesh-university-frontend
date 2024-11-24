import Image from 'next/image'
import { visionAndMissionData } from './visionAndMissionData'

export default function VisionAndMission() {
  return (
    <div className='container w-full mx-auto flex justify-center flex-wrap'>
      {visionAndMissionData.map((data, index) => (
        <div className='m-10' key={index}>
          <div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
            <h2 className='text-2xl font-bold text-primary'>{data.title}</h2>
            <p className='py-5 text-gray-500'>{data.description}</p>
          </div>
          <div>
            <Image
              className='w-full'
              src={data.imageUrl}
              height={1000}
              width={1000}
              alt='Diversity-Image'
            />
          </div>
        </div>
      ))}
    </div>
  )
}
