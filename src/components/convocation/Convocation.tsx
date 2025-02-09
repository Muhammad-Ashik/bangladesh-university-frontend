import Image from 'next/image'
import Button from '../reusable-ui/button/Button'

export default function Convocation() {
  return (
    <div>
      <div className="relative h-screen bg-[url('/images/convocation/convocation-banner-1.JPG')] bg-cover bg-center mt-[60px]">
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='h-full z-10 relative flex flex-col justify-center items-center gap-y-9'>
          <h2 className='title-60 text-white font-bold'>2nd Convocation</h2>
          <Button text='Apply' />
        </div>
      </div>
      <div className='grid md:grid-cols-4 justify-center gap-8 m-10'>
        <div>
          <Image
            src='/images/convocation/2.png'
            width='500'
            height='500'
            alt='convocation-1'
          />
        </div>
        <div>
          <Image
            src='/images/convocation/1.png'
            width='500'
            height='500'
            alt='convocation-1'
          />
        </div>
        <div>
          <Image
            src='/images/convocation/3.png'
            width='500'
            height='500'
            alt='convocation-1'
          />
        </div>
        <div>
          <Image
            src='/images/convocation/4.png'
            width='500'
            height='500'
            alt='convocation-1'
          />
        </div>
      </div>
      <div className='max-w-6xl mx-auto my-24 grid md:grid-cols-2 gap-4 lg:gap-10 p-5'>
        <div className='space-y-5'>
          <div className='space-y-4'>
            <h3 className='title-40 font-bold'>About the Convocation</h3>
            <p className='text-16'>
              Join us for the Future Minds Symposium, a thought-provoking
              educational event designed to inspire and empower individuals to
              navigate the challenges and opportunities of tomorrows world. This
              symposium brings together leading experts, visionaries, and
              innovators from various fields to explore cutting-edge ideas and
              share insights on shaping the future. Join us for the Future Minds
              Symposium, a thought-provoking educational event designed to
              inspire and empower individuals to navigate the challenges and
              opportunities of tomorrows world. This symposium brings together
              leading experts, visionaries, and innovators from various fields
              to explore cutting-edge ideas and share insights on shaping the
              future.
            </p>
            <p className='text-16'>
              Symposium, a thought-provoking educational event designed to
              inspire and empower individuals to navigate the challenges and
              opportunities of tomorrows world. This symposium brings together
              leading experts, visionaries, and innovators from various fields
              to explore cutting-edge ideas and share insights on shaping the
              future. Join us for the Future Minds Symposium, a
              thought-provoking educational event designed to inspire and
              empower individuals to navigate the challenges
            </p>
          </div>
          <div className='space-y-4'>
            <h4 className='text-20 font-bold'>Interactive Workshops:</h4>
            <p className='text-16'>
              Connect with like-minded individuals, professionals, and mentors.
              Build a network that will support your personal and professional
              growth, fostering collaboration and idea exchange.
            </p>
          </div>
          <div>
            <h4 className='text-20 font-bold'>Networking Opportunities:</h4>
            <p className='text-16'>
              Hear from renowned thought leaders who will delve into topics such
              as artificial intelligence, sustainability, and the future of
              work. Gain valuable perspectives to help you thrive.
            </p>
          </div>
          <div>
            <h4 className='text-20 font-bold'>Networking Opportunities:</h4>
            <p className='text-16'>
              Hear from renowned thought leaders who will delve into topics such
              as artificial intelligence, sustainability, and the future of
              work. Gain valuable perspectives to help you thrive.
            </p>
          </div>
          <div>
            <h4 className='text-20 font-bold'>Registration:</h4>
            <p className='text-16'>
              Secure your spot today and be part of the Future Minds Symposium.
              Early bird registration is now open at www.Unipix Dont miss this
              opportunity to gain valuable insights.
            </p>
          </div>
        </div>
        <div>
          <h3 className='title-40 font-bold'>Related Convocation</h3>
          <div className='space-y-7'>
            <div className='p-5 shadow-xl'>
              <Image
                className='w-full'
                src='/images/convocation/related-convocation-1.png'
                height={500}
                width={500}
                alt='related-convocation'
              />
              <h4 className='mt-5 text-20 font-bold'>
                Convocation: 3rd Igniting Minds Off on Transforming Lives
              </h4>
            </div>
            <div className='p-5 shadow-xl'>
              <Image
                className='w-full'
                src='/images/convocation/related-convocation-1.png'
                height={500}
                width={500}
                alt='related-convocation'
              />
              <h4 className='mt-5 text-20 font-bold'>
                Convocation: 3rd Igniting Minds Off on Transforming Lives
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
