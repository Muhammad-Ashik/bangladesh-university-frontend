import Image from 'next/image'

interface IVisionAndMissionProps {
  data: {
    id: number
    title: string
    description: string
    imageUrl: string
  }
  index: number
}

export default function VisionAndMissionItem({
  data,
  index,
}: IVisionAndMissionProps) {
  return (
    <div
      className={`relative flex flex-col items-${
        index % 2 === 0 ? 'end mt-20' : 'start mt-5'
      }`}
    >
      <div
        className={`relative mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
      >
        <div
          className={`flex items-start ${
            index % 2 === 0 ? 'justify-end' : 'justify-start'
          }`}
        >
          {index % 2 !== 0 && (
            <div className='w-12 mt-4 ml-[-15px] mr-6 h-px bg-gray-400'></div>
          )}

          <div
            className={`flex flex-col ${
              index % 2 === 0 ? 'items-end' : 'items-start'
            }`}
          >
            <h2 className='text-24 font-bold text-primary'>{data.title}</h2>
            <p className='w-full lg:w-1/2 pb-5 text-gray-500'>
              {data.description}
            </p>
            <div className={`max-w-96`}>
              <Image
                className='w-full object-cover'
                src={data.imageUrl}
                height={1000}
                width={1000}
                alt='Diversity-Image'
              />
            </div>
          </div>
          {index % 2 === 0 && (
            <div className='w-12 mt-4 mr-[-15px] ml-6 h-px bg-gray-500'></div>
          )}
        </div>
      </div>
    </div>
  )
}
