// import Image from 'next/image'
// import WelcomeImage from '../../../public/images/welcome-image.png'
// import Button from '../button/Button'
import Link from 'next/link'

export default function WelcomeSection() {
  return (
    <div className='mb-20 max-w-[1400px] w-full mx-auto flex justify-between items-center gap-6 xs:flex-wrap xs:p-4 xs:justify-center lg:p-0 xl:justify-between xl:mx-auto xl:flex-nowrap'>
      {/* <div className="grid grid-cols-2 gap-4 w-full">
        <div className="py-4 bg-gray-100 grid-cols-3">
          <h2 className='text-[30px] text-darkTwo font-bold xl:text-[30px]'>
          Event
        </h2>
        </div>
        <div className="py-4 bg-gray-200 grid-cols-4">
            <h2 className='text-[30px] text-darkTwo font-bold xl:text-[30px]'>
                Notice
            </h2>

            <div role="tablist" className="tabs tabs-bordered">
              <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 1" />
              <div role="tabpanel" className="tab-content p-10">Tab content 1</div>

              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab"
                aria-label="Tab 2"
                defaultChecked />
              <div role="tabpanel" className="tab-content p-10">Tab content 2</div>

              <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 3" />
              <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
            </div>
        </div>
      </div> */}

      <div className='grid grid-cols-[60%,40%] gap-16 w-full'>
        <div className='eventBox'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-[30px] text-darkTwo font-bold xl:text-[30px] mb-0'>
              Event
            </h2>
            <Link
              href='/'
              className='inline-flex items-center text-sm px-4 py-2 bg-[#8C1515] hover:bg-[#7A1313] text-white rounded-md transition-colors duration-200'
            >
              View All
              <svg
                className='w-3 h-3 -rotate-45 text-white ml-2 transition duration-300 ease-in-out group-hover:text-main'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </Link>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          necessitatibus non hic nobis architecto rerum! Temporibus sequi
          consequatur, animi eius optio reprehenderit perferendis eligendi
          accusamus fuga! Iste at ad quidem?
        </div>
        <div className='noticeBox'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-[30px] text-darkTwo font-bold xl:text-[30px] mb-0'>
              Notice
            </h2>
            <Link
              href='/'
              className='inline-flex items-center text-sm px-4 py-2 bg-[#8C1515] hover:bg-[#7A1313] text-white rounded-md transition-colors duration-200'
            >
              View All
              <svg
                className='w-3 h-3 -rotate-45 text-white ml-2 transition duration-300 ease-in-out group-hover:text-main'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
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
              className='tab text-center w-32'
              aria-label='Latest'
              defaultChecked
            />
            <div role='tabpanel' className='tab-content'>
              <div className='noticeList divide-y divide-slate-200'>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
              </div>
            </div>

            <input
              type='radio'
              name='my_tabs_1'
              role='tab'
              className='tab text-center w-32'
              aria-label='Exam'
            />
            <div role='tabpanel' className='tab-content'>
              <div className='noticeList divide-y divide-slate-200'>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
              </div>
            </div>

            <input
              type='radio'
              name='my_tabs_1'
              role='tab'
              className='tab text-center w-32'
              aria-label='Admission'
            />
            <div role='tabpanel' className='tab-content'>
              <div className='noticeList divide-y divide-slate-200'>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
                <div className='notice py-5'>
                  <p className='date leading-4 pr-4'>
                    <span className='font-bold text-xl'>20</span> <br />
                    <span className='text-gray-600'>Jan</span>
                  </p>
                  <p className='title text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam repudiandae recusandae vero modi placeat possimus?
                    Eaque non eveniet, alias iure iusto soluta veritatis libero!
                    Quos eveniet ipsa fuga iusto iure?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
