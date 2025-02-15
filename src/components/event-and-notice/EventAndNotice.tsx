import React from 'react'
import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { CiCalendarDate } from 'react-icons/ci'
import { MdOutlineWatchLater } from 'react-icons/md'
import { IoLocationOutline } from 'react-icons/io5'

export default function EventAndNotice() {
  const events = [
    {
      id: 1,
      title: 'Diversity, Equity, and Inclusion',
      date: 'November 28, 2023',
      time: '10:30 am',
      location: 'Yarra Park, UK',
      link: '/events/diversity-equity-inclusion',
    },
    {
      id: 2,
      title: 'Talking Money With Kids and Teens',
      date: 'November 28, 2023',
      time: '10:30 am',
      location: 'Yarra Park, UK',
      link: '/events/talking-money-kids-teens',
    },
    {
      id: 3,
      title: 'Planning for College After Affirmative Action',
      date: 'November 28, 2023',
      time: '10:30 am',
      location: 'Yarra Park, UK',
      link: '/events/planning-college-affirmative-action',
    },
  ]
  // lg:grid-cols-[60%,40%]
  return (
    <div className='my-20 md:container sm:px-8 xs:px-5 mx-auto'>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 xl:gap-28'>
        {/* <div className='eventBox'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-[30px] text-darkTwo font-bold xl:text-[30px] mb-0'>
              Event
            </h2>
            <Link
              href='/'
              className='inline-flex items-center text-sm font-semibold text-[#8C1515] hover:text-[#DB2D2A] duration-200'
            >
              View All{' '}
              <IoIosArrowRoundForward className='text-2xl font-semibold' />
            </Link>
          </div>

          <div className='space-y-1'>
            {events.map((event) => (
              <Link
                key={event.id}
                href={event.link}
                passHref
                className='eventItem flex items-center gap-6 py-7 px-6 rounded bg-gray-100 text-[#555] hover:bg-[#8C1515] hover:text-white transition-all'
              >
                <div className='number text-6xl font-bold text-gray-400 border-r-2 border-gray-200 pe-6'>
                  {event.id.toString().padStart(2, '0')}
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-3'>{event.title}</h3>
                  <div className='text-md'>
                    <p className='flex gap-3'>
                      <span className='inline-block mr-2 flex items-center'>
                        <CiCalendarDate className='text-md me-1' />
                        {event.date}
                      </span>
                      <span className='inline-block mr-2 flex items-center'>
                        <MdOutlineWatchLater className='text-md me-1' />
                        {event.time}
                      </span>
                      <span className='inline-block flex items-center'>
                        <IoLocationOutline className='text-md me-1' />
                        {event.location}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
        <div className='eventBox'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6'>
            <h2 className='text-2xl sm:text-3xl font-bold text-darkTwo mb-4 sm:mb-0'>
              Event
            </h2>
            <Link
              href='/'
              className='inline-flex items-center text-sm sm:text-base font-semibold text-[#8C1515] hover:text-[#DB2D2A] duration-200'
            >
              View All{' '}
              <IoIosArrowRoundForward className='text-xl sm:text-2xl font-semibold' />
            </Link>
          </div>

          <div className='space-y-4'>
            {events.map((event) => (
              <Link
                key={event.id}
                href={event.link}
                passHref
                className='eventItem flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-7 rounded-lg bg-gray-100 text-[#555] hover:bg-[#8C1515] hover:text-white transition-all'
              >
                <div className='number text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-400 border-b-2 sm:border-r-2 sm:border-b-0 border-gray-200 pb-2 sm:pb-0 sm:pe-6'>
                  {event.id.toString().padStart(2, '0')}
                </div>
                <div>
                  <h3 className='text-lg sm:text-xl font-semibold mb-2 sm:mb-3'>
                    {event.title}
                  </h3>
                  <div className='text-sm sm:text-md'>
                    <p className='flex flex-wrap gap-3'>
                      <span className='inline-flex items-center'>
                        <CiCalendarDate className='text-md me-1' /> {event.date}
                      </span>
                      <span className='inline-flex items-center'>
                        <MdOutlineWatchLater className='text-md me-1' />{' '}
                        {event.time}
                      </span>
                      <span className='inline-flex items-center'>
                        <IoLocationOutline className='text-md me-1' />{' '}
                        {event.location}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='noticeBox'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-[30px] text-darkTwo font-bold xl:text-[30px] mb-0'>
              Notice
            </h2>
            <Link
              href='/'
              className='inline-flex items-center text-sm font-semibold text-[#8C1515] hover:text-[#DB2D2A] duration-200'
            >
              View All{' '}
              <IoIosArrowRoundForward className='text-2xl font-semibold' />
            </Link>
          </div>

          <div
            role='tablist'
            className='tabs tabs-bordered grid grid-cols-3 w-full justify-center align-bottom'
          >
            <input
              type='radio'
              name='my_tabs_1'
              role='tab'
              className='tab text-center w-32 h-12 font-semibold'
              aria-label='Latest'
              defaultChecked
            />
            <div role='tabpanel' className='tab-content'>
              <div className='noticeList divide-y divide-slate-200'>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>20</p>
                    <p className='text-gray-600 text-center'>Mar</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Discover the amazing features of our revamped platform!
                    Explore what’s new and how it can improve your workflow.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Discover the amazing features of our revamped platform!
                    Explore what’s new and how it can improve your workflow.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>22</p>
                    <p className='text-gray-600 text-center'>Mar</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Join us as we unveil new tools to enhance your productivity.
                    Check out the latest updates on our platform! Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Join us as we
                    unveil new tools to enhance your productivity. Check out the
                    latest updates on our platform! Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>25</p>
                    <p className='text-gray-600 text-center'>Mar</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Stay tuned for more exciting updates coming soon to your
                    platform. Keep an eye on what’s next! Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Stay tuned for more
                    exciting updates coming soon to your platform. Keep an eye
                    on what’s next! Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>10</p>
                    <p className='text-gray-600 text-center'>Apr</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Ready for more? Check out our latest tools and features
                    designed to make your experience even better. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Ready for
                    more? Check out our latest tools and features designed to
                    make your experience even better. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>18</p>
                    <p className='text-gray-600 text-center'>Apr</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Our newest feature is here! See how it can help you simplify
                    tasks and improve efficiency. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Our newest feature is here!
                    See how it can help you simplify tasks and improve
                    efficiency. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </Link>
                </div>
              </div>
            </div>

            <input
              type='radio'
              name='my_tabs_1'
              role='tab'
              className='tab text-center w-32 h-12 font-semibold'
              aria-label='Exam'
            />
            <div role='tabpanel' className='tab-content'>
              <div className='noticeList divide-y divide-slate-200'>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>5</p>
                    <p className='text-gray-600 text-center'>May</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    We’ve made it easier to manage your workflow with our
                    updated platform. Explore the latest features today! Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. We’ve
                    made it easier to manage your workflow with our updated
                    platform. Explore the latest features today! Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>7</p>
                    <p className='text-gray-600 text-center'>May</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Discover how our new integrations can help you save time and
                    stay organized. Start now! Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Discover how our new
                    integrations can help you save time and stay organized.
                    Start now! Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>12</p>
                    <p className='text-gray-600 text-center'>May</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Maximize your productivity with our newest feature. See the
                    full details now! Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Maximize your productivity with our newest
                    feature. See the full details now! Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>20</p>
                    <p className='text-gray-600 text-center'>May</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Our latest updates are here! Find out how we’ve improved our
                    platform for your convenience. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Our latest updates are here!
                    Find out how we’ve improved our platform for your
                    convenience. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>25</p>
                    <p className='text-gray-600 text-center'>May</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Join us for an exclusive webinar where we’ll showcase all
                    the new features of our platform. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Join us for an exclusive
                    webinar where we’ll showcase all the new features of our
                    platform. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </Link>
                </div>
              </div>
            </div>

            <input
              type='radio'
              name='my_tabs_1'
              role='tab'
              className='tab text-center w-32 h-12 font-semibold'
              aria-label='Admission'
            />
            <div role='tabpanel' className='tab-content'>
              <div className='noticeList divide-y divide-slate-200'>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>30</p>
                    <p className='text-gray-600 text-center'>May</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Our platform just got a major update! Explore the new
                    features and enhancements that make your experience even
                    better. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Our platform just got a major update! Explore the new
                    features and enhancements that make your experience even
                    better. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>5</p>
                    <p className='text-gray-600 text-center'>Jun</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    New tools available! Check out the latest additions designed
                    to improve your efficiency. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. New tools available! Check out
                    the latest additions designed to improve your efficiency.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>10</p>
                    <p className='text-gray-600 text-center'>Jun</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Get a sneak peek into our upcoming features and updates.
                    Stay ahead of the curve! Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Get a sneak peek into our
                    upcoming features and updates. Stay ahead of the curve!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>15</p>
                    <p className='text-gray-600 text-center'>Jun</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    New improvements are live! Take advantage of these updates
                    to boost your productivity. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. New improvements are live!
                    Take advantage of these updates to boost your productivity.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Link>
                </div>
                <div className='notice py-5 pe-4'>
                  <div className='date leading-4 pr-5'>
                    <p className='font-bold text-xl text-center'>20</p>
                    <p className='text-gray-600 text-center'>Jun</p>
                  </div>
                  <Link
                    href='/'
                    className='inline-flex items-center noticeTitle text-sm text-gray-600 hover:text-[#DB2D2A] duration-200'
                  >
                    Our community just grew stronger! Join the discussion and
                    share your ideas with us. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Our community just grew
                    stronger! Join the discussion and share your ideas with us.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default function UpdatedNews() {
//   return (
//     <section className='py-10 px-4'>
//       <div className='text-center'>
//         <h2 className='text-2xl md:text-3xl font-bold'>Updated News</h2>
//         <p className='text-gray-600 mt-2 max-w-2xl mx-auto'>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
//           elementum eu volutpat odio tristique ullamcorper gravida nulla.
//         </p>
//       </div>

//       <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
//         {[1, 2].map((item) => (
//           <div
//             key={item}
//             className='border rounded-lg shadow-md overflow-hidden'
//           >
//             <img
//               src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//               alt='Graduation Event'
//               className='w-full h-56 object-cover'
//             />
//             <div className='p-4'>
//               <h3 className='font-semibold text-lg'>
//                 Introduction to Javascript for the Beginners
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
