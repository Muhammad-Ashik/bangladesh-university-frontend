import { routes } from '@/config/routes'
import { DropdownProps } from './navbar-dropdown/dropdown.types'

export const dropdownData: DropdownProps[] = [
  {
    label: 'About',
    items: [
      { name: 'About BU', link: routes.about },
      { name: 'Mission & Vision', link: routes.vision },
      { name: 'The Founder', link: routes.founder },
      { name: 'The Board of Trustees', link: routes.trustees },
      { name: 'Career', link: routes.career },
    ],
  },
  {
    label: 'Academics',
    items: [
      {
        name: 'Faculty of Science, Engineering & Technology',
        subItems: [
          'Computer Science & Engineering (CSE)',
          'Mathematics',
          'Pharmacy',
        ],
      },
      {
        name: 'Faculty of Arts, Social Science & Law',
        subItems: ['English', 'Sociology', 'Law'],
      },
      {
        name: 'Faculty of Business Administration & Economics',
        subItems: ['Business Administration', 'Economics'],
      },
    ],
  },
  {
    label: 'Admission',
    items: [
      { name: 'Academic Calendar' },
      { name: 'Academic Policy' },
      { name: 'Courses & Tuition Fees' },
      { name: 'Offered Degrees' },
      { name: 'Rules and Regulation' },
    ],
  },
  {
    label: 'Administration',
    items: [
      { name: 'The Vice-Chancellor' },
      { name: 'Pro-Vice-Chancellor' },
      { name: 'Treasurer' },
      { name: 'Registrar Office' },
      { name: 'Exam Control Office' },
      { name: 'Syndicate' },
    ],
  },
  {
    label: 'News & Events',
    items: [
      { name: 'All Events' },
      { name: 'All News' },
      { name: 'Campus Life' },
      { name: 'Photo Gallery' },
      { name: 'Video Gallery' },
      { name: 'News Archive' },
      { name: 'Convocation' },
    ],
  },
]
