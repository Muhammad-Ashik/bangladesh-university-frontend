import Button from '@/components/reusable-ui/button/Button'
import { HiOutlineSearch } from 'react-icons/hi'
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
            <details className='group'>
              <summary className='cursor-pointer rounded-none'>
                {dropdown.label}
              </summary>
              <ul className='pl-2 rounded-none'>
                {dropdown.items?.map((item, subIndex) => (
                  <li key={subIndex}>
                    {!item.subItems ? (
                      <a>{item.name}</a>
                    ) : (
                      <details className='group'>
                        <summary className='cursor-pointer rounded-none'>
                          {item.name}
                        </summary>
                        <ul
                          className={`pl-2 rounded-none overflow-hidden transition-all duration-300 max-h-0 ${
                            item.subItems ? 'group-open:max-h-screen' : ''
                          }`}
                        >
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
          <Button
            icon={false}
            className='h-10 justify-center'
            text='Online Portal'
          />
        </li>
        <div className='input h-10 mt-4 text-slate-500 border border-slate-400 flex items-center bg-white rounded-none mx-4'>
          <input
            type='text'
            className='placeholder-slate-500 w-full border-none focus:outline-none'
            placeholder='Search'
          />
          <HiOutlineSearch size={20} />
        </div>
      </ul>
    </div>
  </div>
)

export default MobileDrawer
