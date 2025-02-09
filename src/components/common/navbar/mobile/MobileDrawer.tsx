import Button from '@/components/reusable-ui/button/Button'
import Link from 'next/link'
import { HiOutlineSearch } from 'react-icons/hi'
import { dropdownData } from '../navbarData'

const MobileDrawer = () => {
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById(
      'mobile-drawer',
    ) as HTMLInputElement
    if (drawerCheckbox) {
      drawerCheckbox.checked = false
    }
  }

  return (
    <div className='drawer z-10 text-black'>
      <input id='mobile-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-side'>
        <label
          htmlFor='mobile-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu bg-white min-h-full w-80 py-4'>
          <li>
            <Link href='/' onClick={closeDrawer}>
              Home
            </Link>
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
                        <Link href={item.link || '#'} onClick={closeDrawer}>
                          {item.name}
                        </Link>
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
                                <Link
                                  href={subItem.link || '#'}
                                  onClick={closeDrawer}
                                >
                                  {subItem.name}
                                </Link>
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
            <Link href='/certificate' onClick={closeDrawer}>
              Certificate
            </Link>
          </li>
          <li className='mt-2 w-full'>
            <Button
              className='h-10 justify-center'
              text='Online Portal'
              onClick={closeDrawer}
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
}

export default MobileDrawer
