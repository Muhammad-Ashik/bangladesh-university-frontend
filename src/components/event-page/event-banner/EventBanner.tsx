import Button from '@/components/reusable-ui/button/Button'
import { CiCalendarDate } from 'react-icons/ci'
import { FiMapPin } from 'react-icons/fi'
import { countdownData } from '../eventData'

const EventBanner = () => {
  const EventBannerImg = '/images/event/event-banner.png'
  return (
    <div
      className='w-full bg-center'
      style={{ backgroundImage: `url(${EventBannerImg})`, opacity: 0.9 }}
    >
      <div className='max-w-4xl py-16 mx-auto flex flex-col justify-center items-center bg-opacity-75'>
        <h1 className='text-primary title-40 font-bold text-center'>
          International Conference on Learning Higher Education
        </h1>
        <div className='flex my-12'>
          {countdownData.map((item, index) => (
            <h2
              className={`px-2 sm:px-5 xl:px-10 text-center ${index !== countdownData.length - 1 ? 'border-r border-gray-500' : ''}`}
              key={index}
            >
              <span className='title-40 font-bold'>{item.eventTime}</span>
              <br />
              <span className='text-30'>{item.label}</span>
            </h2>
          ))}
        </div>
        <div className='flex flex-wrap justify-center space-x-10 space-y-2 mb-8'>
          <p className='flex items-center text-16'>
            <CiCalendarDate size={20} />{' '}
            <span className='ml-2'>28 December 2024</span>
          </p>
          <p className='flex items-center text-16'>
            <FiMapPin />{' '}
            <span className='ml-2'>Mohammadpur-1207, Dhaka, Bangladesh</span>
          </p>
        </div>
        <Button text='Book Now' />
      </div>
    </div>
  )
}

export default EventBanner
