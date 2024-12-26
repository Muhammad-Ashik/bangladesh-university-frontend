import Image from 'next/image'
import { CiCalendarDate, CiUser } from 'react-icons/ci'
import { MdOutlineWatchLater } from 'react-icons/md'
import { allNewsData } from '../all-news/allNewsData'
import UpdateNewsCard from '../home-page/updated-news/UpdateNewsCard'

export default function NewsDetails() {
  return (
    <div className='container max-w-[1400px] mx-auto py-14 p-4 sm:px-5'>
      <div className='grid lg:grid-cols-12 gap-6'>
        <div className='lg:col-span-8 mt-4'>
          <div>
            <Image
              src='/images/news-details/news-details-1.png'
              width={1000}
              height={1000}
              alt='news-details'
            />
          </div>
          <div className='flex items-center my-6 text-14 space-x-3'>
            <p className='flex items-center text-14'>
              <CiUser size={16} className='mr-2' /> Junaed
            </p>
            <p className='flex items-center space-x-2 text-14'>
              <CiCalendarDate size={16} className='mr-2' /> 28 Dec 2024
            </p>
            <p className='flex items-center space-x-2 text-14'>
              <MdOutlineWatchLater size={16} className='mr-2' /> 09:50 PM
            </p>
          </div>
          <h2 className='text-30 font-bold my-3'>
            10 Effective Study Tips for College Success
          </h2>
          <p className='text-16 text-justify sm:text-left'>
            Welcome to Bangladesh University! As a student, navigating through
            college can sometimes feel overwhelming. However, with the right
            strategies and study techniques, you can enhance your learning
            experience and achieve academic success. In this blog post, we will
            explore 10 effective study tips to help you thrive in college.
          </p>
          <div className='space-y-8 mt-8 text-justify sm:text-left'>
            <div>
              <h3 className='text-20'>Create a Study Schedule:</h3>
              <p className='text-16'>
                Establishing a study schedule can help you manage your time
                effectively and ensure that you allocate sufficient time for
                studying each subject. Determine your most productive hours and
                dedicate them to focused study sessions.
              </p>
            </div>
            <div>
              <h3 className='text-20'>Set Specific Goals:</h3>
              <p className='text-16'>
                Set clear and achievable goals for each study session. Whether
                its completing a set of practice problems or reviewing lecture
                notes, having specific objectives will keep you motivated and on
                track.
              </p>
              <p className='text-16 mt-4'>
                Whether you are looking to advance your career, pursue your
                passions, or simply expand your horizons, Unipix is here to help
                you unlock your full potential. Embrace the journey of lifelong
                learning with Unipix as your trusted partner and embark on a
                transformative educational experience that will shape your
                future success.
              </p>
            </div>
            <div>
              <h3 className='text-20'>Why Lifelong Learning Matters:</h3>
              <p className='text-16'>
                In an era defined by rapid technological advancements and
                evolving job markets, the importance of lifelong learning cannot
                be overstated. Lifelong learning empowers individuals to adapt
                to change, acquire new knowledge and skills, and remain
                competitive in todays dynamic workforce. It fosters personal and
                professional development, enriches lives, and opens doors to
                endless opportunities.
              </p>
              <p className='text-16 mt-4'>
                At Unipix, we believe that education has the power to change
                lives, inspire innovation, and create positive impact in the
                world. Join us on this exciting journey of lifelong learning and
                discover the endless possibilities that await you. Visit Unipix
                today and take the first step towards realizing your dreams and
                aspirations. Remember, your education journey starts here!
              </p>
            </div>
          </div>
        </div>
        <div className='lg:col-span-4 sm:grid sm:grid-cols-2 lg:grid-rows-none lg:grid-cols-none'>
          {allNewsData.splice(0, 3).map((data, index) => (
            <UpdateNewsCard data={data} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
