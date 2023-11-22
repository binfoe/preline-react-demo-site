import { FC } from 'react';
import { BsGithub, BsMoon } from 'react-icons/bs';

export const Header: FC = () => {
  return (
    <header className='sticky inset-x-0 top-0 flex h-[70px] w-full flex-wrap border-b bg-white py-2.5 text-sm dark:border-gray-700 dark:bg-slate-900 sm:flex-nowrap sm:justify-start sm:py-4'>
      <nav
        className='mx-auto flex w-full basis-full flex-nowrap items-center px-4 sm:px-6 md:px-8 lg:max-w-[90rem]'
        aria-label='Global'
      >
        <a
          className='flex flex-none items-center rounded-md text-blue-600 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          href='/'
        >
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 28.9786V15.9786C1 9.35116 6.37258 3.97858 13 3.97858C19.6274 3.97858 25 9.35116 25 15.9786C25 22.606 19.6274 27.9786 13 27.9786H12'
              stroke='currentColor'
              strokeWidth='2'
            ></path>
            <path
              d='M5 28.9786V16.1386C5 11.6319 8.58172 7.97858 13 7.97858C17.4183 7.97858 21 11.6319 21 16.1386C21 20.6452 17.4183 24.2986 13 24.2986H12'
              stroke='currentColor'
              strokeWidth='2'
            ></path>
            <circle cx='13' cy='16' r='5' fill='currentColor'></circle>
          </svg>
          <span className='ml-2 text-2xl'>Preline React</span>
        </a>

        <div className='ms-auto flex items-center sm:order-3 sm:ms-0 sm:w-full sm:gap-x-3'>
          <div className='relative z-10 ms-auto flex items-center'>
            <div className='space-x-1 ps-2'>
              <a
                className='-me-1.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                href='https://www.figma.com/community/file/1179068859697769656'
                target='_blank'
              >
                <svg
                  className='h-4 w-4'
                  width='19'
                  height='18'
                  viewBox='0 0 19 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z'
                    fill='#0ACF83'
                  ></path>
                  <path
                    d='M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z'
                    fill='#A259FF'
                  ></path>
                  <path
                    d='M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z'
                    fill='#F24E1E'
                  ></path>
                  <path
                    d='M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z'
                    fill='#FF7262'
                  ></path>
                  <path
                    d='M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z'
                    fill='#1ABCFE'
                  ></path>
                </svg>
              </a>
              <a
                className='inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                href='https://github.com/binfoe/preline-react'
                target='_blank'
              >
                <BsGithub />
              </a>
              <button className='inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-medium text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
                <BsMoon />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
