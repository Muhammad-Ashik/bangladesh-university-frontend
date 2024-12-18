import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialMediaLinks = ({ className = '' }) => {
  const links = [
    {
      href: 'https://www.facebook.com/BangladeshUniversityBd/',
      Icon: FaFacebook,
      alt: 'Facebook',
      style: 'text-white hover:text-blue-700',
    },
    {
      href: 'https://twitter.com/bu_officialpage',
      Icon: FaTwitter,
      alt: 'Twitter',
      style: 'text-white hover:text-blue-500',
    },
    {
      href: 'https://www.linkedin.com/school/bangladesh-university/',
      Icon: FaLinkedin,
      alt: 'LinkedIn',
      style: 'text-white hover:text-blue-500',
    },
    {
      href: 'https://www.youtube.com/@BangladeshUniversityBd',
      Icon: FaYoutube,
      alt: 'YouTube',
      style: 'text-white hover:text-red-700',
    },
  ]

  return (
    <div className={`flex gap-8 ${className}`}>
      {links.map(({ href, Icon, alt, style }) => (
        <a
          key={alt}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={`text-20 ${style}`}
        >
          <Icon className='w-8 h-8' />
        </a>
      ))}
    </div>
  )
}

const Footer = () => {
  const contactInfo = [
    {
      title: 'Permanent Campus',
      address: '5/B, Beribandh Main Road, Adabar, Mohammadpur, Dhaka - 1207',
      phones: [],
      email: null,
    },
  ]

  return (
    <footer className='footer md:px-8 flex flex-col bg-[#191E24] text-[#9CA2B0]'>
      <div className='md:container mx-auto py-10 px-6 md:px-0 grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-16 md:justify-items-center'>
        <div className='w-full'>
          <Image
            src='/images/logo.png'
            alt='Logo'
            width={100}
            height={100}
            className='grayscale hover:grayscale-0 transition duration-300 ease-in-out'
          />

          <p className='mt-4 text-14'>
            We provide innovative educational solutions to help students grow
            and succeed in their academic journey.
          </p>
        </div>

        <div>
          <h1 className='text-24 font-bold'>
            <span className='text-white'>Quick</span>{' '}
            <span className='text-red-500'>Links</span>
          </h1>
          <div className='flex flex-col gap-4 pt-4'>
            {['About Us', 'Programs', 'Admissions', 'Contact'].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className='link link-hover'
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className='md:col-span-2'>
          <h1 className='text-24 font-bold'>
            <span className='text-white'>Contact</span>{' '}
            <span className='text-red-500'>Us</span>
          </h1>
          <div className='flex flex-col gap-6 pt-4'>
            <p className='text-14'>
              Feel free to reach out to us with any questions or inquiries.
            </p>
            <div className='flex gap-8'>
              {contactInfo.map(({ title, address, email }) => (
                <div key={title}>
                  <div className='mb-2'>
                    <p className='font-semibold'>{title}</p>
                    {address && <p>{address}</p>}
                    {email && (
                      <a href={`mailto:${email}`} className='link link-hover'>
                        {email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <SocialMediaLinks className='hidden md:flex' />
          </div>
          <SocialMediaLinks className='md:hidden justify-between mt-8' />
        </div>
      </div>
      <div className='w-full text-center text-slate-400 p-4 border-t border-slate-700'>
        <p className='text-14 w-full'>
          Copyright © {new Date().getFullYear()} All Rights Reserved by
          Bangladesh University
        </p>
      </div>
    </footer>
  )
}

export default Footer
