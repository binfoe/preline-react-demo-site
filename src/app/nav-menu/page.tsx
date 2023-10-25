'use client';

import { FC, useState } from 'react';
import { BsBook, BsCalendar, BsHouse, BsPeople, BsPersonCircle } from 'react-icons/bs';
import { NavMenu } from 'preline-react';

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
const MenuDemo: FC = () => {
  const [openKeys, setOpenKeys] = useState(['account']);
  return (
    <>
      <div className='border p-5'>
        <h1 className='mb-2 border-b pb-2'>Simple usage</h1>
        <NavMenu items={DemoMenuItems} />
      </div>
      <div className='mt-5 border p-5'>
        <h1 className='mb-2 border-b pb-2'>Controled open keys</h1>
        <NavMenu items={DemoMenuItems} openKeys={openKeys} onOpenChange={setOpenKeys} />
      </div>
    </>
  );
};

export default MenuDemo;
