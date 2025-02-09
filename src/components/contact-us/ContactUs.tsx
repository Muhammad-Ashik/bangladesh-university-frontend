import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import Button from '../reusable-ui/button/Button'

export default function ContactUs() {
  return (
    <div className='container max-w-[1400px] mx-auto'>
      <h2 className='title-40 font-bold text-center my-10'>
        Get In Touch With Us
      </h2>
      <div className='grid lg:grid-cols-2 gap-5 m-4 md:m-10'>
        <div className='order-1 lg:order-none'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.447613391786!2d90.34238047602331!3d23.767069888134856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c083149585f5%3A0xeb28ac94751626ca!2sBangladesh%20University!5e0!3m2!1sen!2sbd!4v1707564371261!5m2!1sen!2sbd'
            width='100%'
            height='100%'
            className='min-h-80 md:min-h-96'
          ></iframe>
        </div>
        <div className='lg:ml-5'>
          <div className='flex flex-wrap space-y-3 lg:flex-nowrap lg:space-y-0 lg:space-x-3'>
            <div className='w-full'>
              <div className='label'>
                <span className='label-text'>Full Name</span>
              </div>
              <input
                type='text'
                placeholder='Enter Name'
                className='input input-bordered w-full max-w-md focus:outline-none'
              />
            </div>
            <div className='w-full'>
              <div className='label'>
                <span className='label-text'>Phone</span>
              </div>
              <input
                type='text'
                placeholder='Enter phone'
                className='input input-bordered w-full max-w-md focus:outline-none'
              />
            </div>
            <div className='w-full'>
              <div className='label'>
                <span className='label-text'>Email</span>
              </div>
              <input
                type='text'
                placeholder='name@example.com'
                className='input input-bordered w-full max-w-md focus:outline-none'
              />
            </div>
          </div>
          <div>
            <div className='my-5'>
              <div className='label'>
                <span className='label-text'>Message</span>
              </div>
              <textarea
                className='textarea textarea-bordered w-full max-w-md xl:max-w-full h-52 focus:outline-none'
                placeholder='Message Here...'
              ></textarea>
            </div>
            <Button text='Submit' />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap my-20 space-y-3 xl:justify-between m-4 md:mx-10'>
        <div className='flex items-center space-x-2'>
          <span className='bg-primary p-2 md:p-3 rounded-full text-white text-16 lg:text-lg'>
            <FaLocationDot />
          </span>
          <p className='text-16 lg:text-base'>
            5/B, Beribandh Main Road, Adabar, Mohammadpur, Dhaka - 1207
          </p>
        </div>
        <div className='flex items-center space-x-2 md:mr-5'>
          <span className='bg-primary p-2 md:p-3 rounded-full text-white text-16 lg:text-lg'>
            <FaPhoneAlt />
          </span>
          <p className='text-16 lg:text-base'>
            +88 01755-559301, +88 01755-559312
          </p>
        </div>
        <div className='flex items-center space-x-2'>
          <span className='bg-primary p-2 md:p-3 rounded-full text-white text-16 lg:text-lg'>
            <IoMdMail />
          </span>
          <p className='text-16 lg:text-base'>cse@bu.edu.bd</p>
        </div>
      </div>
    </div>
  )
}
