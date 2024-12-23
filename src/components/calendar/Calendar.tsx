import Image from 'next/image'

const Calendar = () => {
  return (
    <div className='container max-w-[1400px] mx-auto py-14 sm:px-5'>
      <h2 className='title-40 font-bold text-secondary mb-10 px-5 sm:px-0'>
        Notice Board
      </h2>
      <div className='w-full space-y-5 mb-10 flex justify-center'>
        <Image
          src='/images/calendar/calendar-1.png'
          width={2000}
          height={1000}
          alt='calendar'
        />
      </div>
      <div className='w-full space-y-5 mb-10 flex justify-center'>
        <Image
          src='/images/calendar/calendar-2.png'
          width={2000}
          height={1000}
          alt='calendar'
        />
      </div>
    </div>
  )
}

export default Calendar
