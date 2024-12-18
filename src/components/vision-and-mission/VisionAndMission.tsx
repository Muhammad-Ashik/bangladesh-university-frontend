import Image from 'next/image'
import { visionAndMissionData } from './visionAndMissionData'
import VisionAndMissionItem from './VisionAndMissionItem'

export default function VisionAndMission() {
  return (
    <div className='md:container w-full mx-auto relative my-16 sm:px-6'>
      <h2 className='text-center text-30 font-bold mb-10'>
        Vision And Mission
      </h2>

      {/* Responsive for Desktop Devices */}
      <div className='hidden sm:block w-full mx-auto relative px-6'>
        {/* vertical line between columns */}
        <div className='absolute top-0 bottom-0 left-1/2 w-px bg-gray-300'></div>
        <div className='grid grid-cols-2 gap-8'>
          {visionAndMissionData.map((data, index) => (
            <VisionAndMissionItem data={data} index={index} key={index} />
          ))}
        </div>
      </div>

      {/* Responsive For Mobile Size Devices */}
      <div className='block sm:hidden mx-auto px-7'>
        {visionAndMissionData.map((data, index) => (
          <div className='w-full my-10' key={index}>
            <h2 className='text-primary text-20 font-bold'>{data.title}</h2>
            <p className='text-gray-500 text-14 my-2'>{data.description}</p>
            <div className='w-full'>
              <Image
                className='object-cover'
                src={data.imageUrl}
                alt='vision-image'
                width={1000}
                height={1000}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
