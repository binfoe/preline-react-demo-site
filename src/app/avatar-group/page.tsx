'use client';

import Image from 'next/image';
import { FC } from 'react';
import { Dropdown } from 'preline-react';

const AvatarGroupDemo: FC = () => {
  return (
    <div>
      <p>
        <a
          className='underline'
          href='https://www.preline.co/docs/avatar-group.html'
          target='_blank'
        >
          Preline UI - Avatar Group
        </a>
      </p>

      <div className='mb-6 border p-6'>
        <h1 className='mb-4'>With Dropdown</h1>
        <div className='flex -space-x-2'>
          <Image
            width={300}
            height={300}
            className='inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
            alt='Image Description'
          />
          <Image
            width={300}
            height={300}
            className='inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
            alt='Image Description'
          />
          <Image
            width={300}
            height={300}
            className='inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80'
            alt='Image Description'
          />
          <Image
            width={300}
            height={300}
            className='inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
            alt='Image Description'
          />
          <Dropdown
            placement='top-start'
            offset={12}
            items={[
              {
                label: 'Chris Lynch',
              },
              {
                label: 'Maria Guan',
              },
            ]}
          >
            <button className='inline-flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full border-2 border-white bg-gray-200 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-800 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800'>
              <span className='font-medium leading-none'>9+</span>
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default AvatarGroupDemo;
