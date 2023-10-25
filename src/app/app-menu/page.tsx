'use client';

import { FC } from 'react';
import {
  BsBook,
  BsCalendar,
  BsChevronDown,
  BsHouse,
  BsPeople,
  BsPersonCircle,
} from 'react-icons/bs';
import { AppMenu } from 'preline-react';

const DemoMenuItems = [
  {
    name: 'Dashboard',
    key: 'dashboard',
    icon: <BsHouse />,
  },
  {
    name: 'Users',
    key: 'users',
    icon: <BsPeople />,
    children: [
      {
        name: 'Sub Menu 1',
        key: 'sub1',
        children: [
          {
            name: 'Link 1',
            key: 'link1',
          },
          {
            name: 'Link 2',
            key: 'link2',
          },
        ],
      },
      {
        name: 'Sub Menu 2',
        key: 'sub2',
        children: [
          {
            name: 'Link 1',
            key: 'link1',
          },
          {
            name: 'Link 2',
            key: 'link2',
          },
        ],
      },
    ],
  },
  {
    name: 'Account',
    icon: <BsPersonCircle />,
    key: 'account',
    children: [
      {
        name: 'Link 1',
        key: 'link1',
      },
      {
        name: 'Link 2',
        key: 'link2',
      },
      {
        name: 'Link 3',
        key: 'link3',
      },
    ],
  },
  {
    name: 'Calendar',
    icon: <BsCalendar />,
    key: 'calendar',
  },
  {
    name: 'Documentation',
    icon: <BsBook />,
    key: 'doc',
  },
];
const AppMenuDemo: FC = () => {
  return (
    <>
      <div className='border p-5'>
        <h1 className='mb-2 border-b pb-2'>Simple usage</h1>
        <AppMenu items={DemoMenuItems} trigger='hover'>
          <div className='flex cursor-pointer items-center gap-3.5 hover:text-blue-500'>
            <span>Dropdown Menu</span>
            <BsChevronDown />
          </div>
        </AppMenu>
      </div>
    </>
  );
};

export default AppMenuDemo;
