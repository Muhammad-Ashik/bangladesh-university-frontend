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
        link: '/academics/faculty-of-science-engineering-and-technology',
        subItems: [
          {
            name: 'Computer Science & Engineering (CSE)',
            link: 'https://frontend-bangladesh-univarsity.vercel.app/home',
          },
          {
            name: 'Mathematics',
            link: '/academics/faculty-of-science-engineering-and-technology/mathematics',
          },
          {
            name: 'Pharmacy',
            link: '/academics/faculty-of-science-engineering-and-technology/pharmacy',
          },
        ],
      },
      {
        name: 'Faculty of Arts, Social Science & Law',
        link: '/academics/faculty-of-arts-social-science-and-law',
        subItems: [
          {
            name: 'English',
            link: '/academics/faculty-of-arts-social-science-and-law/english',
          },
          {
            name: 'Sociology',
            link: '/academics/faculty-of-arts-social-science-and-law/sociology',
          },
          {
            name: 'Law',
            link: '/academics/faculty-of-arts-social-science-and-law/law',
          },
        ],
      },
      {
        name: 'Faculty of Business Administration & Economics',
        link: '/academics/faculty-of-business-administration-and-economics',
        subItems: [
          {
            name: 'Business Administration',
            link: '/academics/faculty-of-business-administration-and-economics/business-administration',
          },
          {
            name: 'Economics',
            link: '/academics/faculty-of-business-administration-and-economics/economics',
          },
        ],
      },
    ],
  },
  {
    label: 'Admission',
    items: [
      { name: 'Academic Calendar', link: routes.calendar },
      { name: 'Academic Policy', link: routes.academicPolicies },
      { name: 'Courses & Tuition Fees', link: routes.courseTuitionFees },
      { name: 'Offered Degrees', link: routes.offeredDegrees },
      { name: 'Rules and Regulation', link: routes.rulesAndRegulation },
    ],
  },
  {
    label: 'Administration',
    items: [
      { name: 'The Vice-Chancellor', link: routes.viceChancellor },
      { name: 'Treasurer', link: routes.treasurer },
      { name: 'Registrar Office', link: routes.registrarOffice },
      {
        name: 'Exam Control Office',
        link: routes.examControlOffice,
      },
      { name: 'Syndicate', link: routes.syndicate },
    ],
  },
  {
    label: 'News & Events',
    items: [
      { name: 'All Events', link: routes.allEvents },
      { name: 'All News', link: routes.allNews },
      { name: 'Notice Board', link: routes.noticeBoard },
      { name: 'Campus Life', link: routes.campusLife },
      { name: 'Gallery', link: routes.gallery },
      { name: 'IQAC', link: routes.iqac },
      {
        name: 'Convocation',
        subItems: [
          {
            name: '1st Convocation',
            link: routes.convocation,
          },
          {
            name: '2nd Convocation',
            link: routes.convocation,
          },
        ],
      },
    ],
  },
]
