import Image from 'next/image'
import { eventDetails } from '../eventData'

const EventVenue = () => {
  return (
    <div className='grid md:grid-cols-2 gap-12'>
      <div>
        <Image
          src='/images/event/event-1.png'
          width={1000}
          height={1000}
          alt='event-1'
        />
      </div>
      <div className='py-4 px-8 bg-red-100 space-y-5'>
        <h3 className='text-2xl my-6'>Event Venue</h3>
        {eventDetails.map((data, index) => (
          <p className='text-xl font-bold' key={index}>
            {data.label}: <span className='font-normal'>{data.value}</span>
          </p>
        ))}
      </div>
    </div>
  )
}

export default EventVenue
