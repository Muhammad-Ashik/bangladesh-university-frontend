import { allEventsData } from './allEventsData'
import Event from './event/Event'

export default function AllEvents() {
  return (
    <div className='container max-w-[1400px] mx-auto py-14 sm:px-5'>
      <h2 className='title-40 font-bold text-secondary mb-10 px-5 sm:px-0'>
        All Events
      </h2>
      <div className='w-full grid sm:grid-cols-3 justify-center gap-5 p-5'>
        {allEventsData.map((event, index) => (
          <Event data={event} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
