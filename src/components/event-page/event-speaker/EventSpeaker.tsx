import Image from 'next/image'

const EventSpeaker = () => {
  return (
    <div>
      <h3 className='title-40 font-bold pb-2'>Event Speaker</h3>
      <div className='w-full flex justify-between mb-10'>
        <div>
          <div className='w-10 h-10 md:w-18 md:h-18 xl:w-24 xl:h-24 rounded-full m-4'>
            <Image
              src='/images/event/event-speaker-1.png'
              width={500}
              height={500}
              alt='event-speaker'
            />
          </div>
          <p className='text-xs text-center'>Jiaur Rehman</p>
          <p className='text-xs text-center'>Assistant Professor</p>
        </div>
        <div>
          <div className='w-10 h-10 md:w-18 md:h-18 xl:w-24 xl:h-24 rounded-full m-4'>
            <Image
              src='/images/event/event-speaker-1.png'
              width={500}
              height={500}
              alt='event-speaker'
            />
          </div>
          <p className='text-xs text-center'>Jiaur Rehman</p>
          <p className='text-xs text-center'>Assistant Professor</p>
        </div>
        <div>
          <div className='w-10 h-10 md:w-18 md:h-18 xl:w-24 xl:h-24 rounded-full m-4'>
            <Image
              src='/images/event/event-speaker-1.png'
              width={500}
              height={500}
              alt='event-speaker'
            />
          </div>
          <p className='text-xs text-center'>Jiaur Rehman</p>
          <p className='text-xs text-center'>Assistant Professor</p>
        </div>
        <div>
          <div className='w-10 h-10 md:w-18 md:h-18 xl:w-24 xl:h-24 rounded-full m-4'>
            <Image
              src='/images/event/event-speaker-1.png'
              width={500}
              height={500}
              alt='event-speaker'
            />
          </div>
          <p className='text-xs text-center'>Jiaur Rehman</p>
          <p className='text-xs text-center'>Assistant Professor</p>
        </div>
      </div>
    </div>
  )
}

export default EventSpeaker
