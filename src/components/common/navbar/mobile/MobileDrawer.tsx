import Link from 'next/link'
import { dropdownData } from '../navbarData'

const MobileDrawer = () => (
  <div className='drawer z-10'>
    <input id='mobile-drawer' type='checkbox' className='drawer-toggle' />
    <div className='drawer-side'>
      <label
        htmlFor='mobile-drawer'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      <ul className='menu bg-white min-h-full w-80 py-4'>
        <li>
          <a>Home</a>
        </li>
        {dropdownData.map((dropdown, index) => (
          <li key={index}>
            <details>
              <summary className='cursor-pointer rounded-none'>
                {dropdown.label}
              </summary>
              <ul className='pl-2 rounded-none'>
                {dropdown.items?.map((item, subIndex) => (
                  <li key={subIndex}>
                    {!item.subItems ? (
                      <a>{item.name}</a>
                    ) : (
                      <details>
                        <summary className='rounded-none'>{item.name}</summary>
                        <ul className='pl-2 rounded-none'>
                          {item.subItems?.map((subItem, subIndex) => (
                            <li key={subIndex} className='rounded-none'>
                              <a>{subItem}</a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
        <li>
          <a>Certificate</a>
        </li>
        <li className='mt-2 w-full'>
          <Link
            href='#'
            className='py-2 text-white bg-primary rounded-none text-center block'
          >
            Online Portal
          </Link>
        </li>
        <label className='input h-10 mt-4 text-slate-500 border-slate-400 flex items-center gap-2 bg-white rounded-none'>
          <input
            type='text'
            className='placeholder-slate-500 w-[calc(100%-10px)] focus:!outline-none'
            placeholder='Search'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='h-5 w-5 text-slate-500'
          >
            <path
              fillRule='evenodd'
              d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
              clipRule='evenodd'
            />
          </svg>
        </label>
      </ul>
    </div>
  </div>
)

export default MobileDrawer
