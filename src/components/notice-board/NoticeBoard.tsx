'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import { noticeBoardData } from './NoticeBoardData'

const NoticeBoard = () => {
  const [selectedNotice, setSelectedNotice] = useState<
    (typeof noticeBoardData)[0] | null
  >(null)
  const [currentPage, setCurrentPage] = useState(1)
  const noticesPerPage = 5
  const totalPages = Math.ceil(noticeBoardData.length / noticesPerPage)

  const indexOfLastNotice = currentPage * noticesPerPage
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage
  const currentNotices = noticeBoardData.slice(
    indexOfFirstNotice,
    indexOfLastNotice,
  )

  const formatDate = (dateStr: string) => {
    const dateObj = new Date(dateStr.split('-').reverse().join('-'))
    return dateObj.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  if (selectedNotice) {
    return (
      <div className='container max-w-[1200px] mx-auto py-14 px-5'>
        <h2 className='text-3xl font-bold text-center text-secondary mb-8'>
          Notice Details
        </h2>

        <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200'>
          <div className='relative w-full h-[80vh]'>
            <Image
              src='http://res.cloudinary.com/dljz4h5ki/image/upload/v1710311224/ie0tt3qymuym0ekl7ddt.jpg'
              alt='Notice'
              fill
              className='object-contain rounded-lg'
            />
          </div>

          <h2 className='text-2xl font-semibold text-gray-800 mt-6'>
            {selectedNotice.title}
          </h2>
          <p className='text-sm text-gray-500 mt-1'>
            Published on: {formatDate(selectedNotice.date)}
          </p>
          <p className='text-gray-700 text-base mt-4'>
            {selectedNotice.description}
          </p>

          <button
            onClick={() => setSelectedNotice(null)}
            className='mt-6 bg-gray-600 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition'
          >
            Back to Notices
          </button>
        </div>

        {/* Related Notices Section */}
        <div className='max-w-3xl mx-auto mt-10'>
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>
            Other Notices
          </h3>
          <div className='space-y-4'>
            {noticeBoardData.slice(0, 3).map((notice, index) => (
              <div
                key={index}
                className='flex justify-between items-center bg-gray-50 p-4 rounded-md shadow border'
              >
                <div>
                  <h4 className='text-lg font-medium'>{notice.title}</h4>
                  <p className='text-sm text-gray-500'>
                    Published on: {formatDate(notice.date)}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedNotice(notice)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className='text-blue-600 font-medium hover:underline'
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container max-w-[1200px] mx-auto py-14 px-5'>
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-secondary mb-10 relative after:absolute after:content-[''] after:w-20 after:h-1 after:bg-red-500 after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px]">
        Notice Board
      </h2>

      {/* Notice List */}
      <div className='w-full space-y-6 mb-10'>
        {currentNotices.map((data, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row justify-between items-start md:items-center rounded-md bg-white shadow-lg p-6 border border-gray-200'
          >
            <div className='flex items-start md:items-center w-full'>
              {/* Icon */}
              <span className='block rounded-full p-3 bg-red-100'>
                <FaRegFilePdf className='text-red-700' size={24} />
              </span>
              {/* Notice Content */}
              <div className='pl-4 md:pl-6 w-full'>
                <h2 className='text-lg font-semibold text-gray-800'>
                  {data.title}
                </h2>
                <p className='text-sm text-gray-500'>
                  Published on: {formatDate(data.date)}
                </p>
                <p className='text-gray-700 text-sm mt-2 line-clamp-2'>
                  {data.description}
                </p>
                <button
                  onClick={() => {
                    setSelectedNotice(data)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className='mt-3 text-blue-600 font-medium hover:underline'
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center items-center space-x-2'>
        <button
          className={`px-3 py-2 text-sm rounded-md border ${
            currentPage === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              currentPage === i + 1
                ? 'bg-red-600 text-white'
                : 'border hover:bg-gray-100'
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className={`px-3 py-2 text-sm rounded-md border ${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default NoticeBoard
