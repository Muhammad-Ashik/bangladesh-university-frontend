import { FaRegFilePdf } from 'react-icons/fa'
import { IoDownloadOutline } from 'react-icons/io5'
import { noticeBoardData } from './NoticeBoardData'

const NoticeBoard = () => {
  return (
    <div className='container max-w-[1400px] mx-auto py-14 px-5'>
      <h2 className='title-40 font-bold text-secondary mb-10'>Notice Board</h2>
      <div className='w-full space-y-5 mb-10'>
        {noticeBoardData.map((data, index) => (
          <div
            className='w-full flex justify-between items-center rounded-md shadow-md py-4 px-4 md:px-8'
            key={index}
          >
            <div className='flex items-center'>
              <span className='block rounded-full p-3 bg-red-100'>
                <FaRegFilePdf className='text-red-700' />
              </span>
              <div className='pl-3 md:pl-8 space-y-2'>
                <p className='text-16'>{data.title}</p>
                <p className='text-16'>Date: {data.date}</p>
              </div>
            </div>
            <div className='cursor-pointer'>
              <IoDownloadOutline size={20} />
            </div>
          </div>
        ))}
      </div>
      <div className='max-w-72 mx-auto join grid grid-cols-2'>
        <button className='join-item btn btn-outline'>Previous</button>
        <button className='join-item btn btn-outline'>Next</button>
      </div>
    </div>
  )
}

export default NoticeBoard
