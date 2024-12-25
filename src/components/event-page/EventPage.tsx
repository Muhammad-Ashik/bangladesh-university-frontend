import Event from '../all-events/event/Event'
import AboutEvent from './about-event/AboutEvent'
import EventBanner from './event-banner/EventBanner'
import EventSpeaker from './event-speaker/EventSpeaker'
import EventVenue from './event-venue/EventVenue'
import { relatedEventData } from './eventData'

const EventPage = () => {
  return (
    <div className='mt-[83px]'>
      <EventBanner />
      <div className='container max-w-[1400px] mx-auto py-14 px-5'>
        <EventVenue />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-14'>
          <div>
            <EventSpeaker />
            <AboutEvent />
          </div>
          <div className='w-full space-y-8'>
            <h3 className='title-40 font-bold'>Related Event</h3>
            {relatedEventData.map((data, index) => (
              <Event data={data} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage
