import './tailwind.css';

import type { Metadata } from 'next';
import Link from 'next/link';
import { ToastContainerWrapper } from './toast';

export const metadata: Metadata = {
  title: 'Preline React',
  description: 'React implementation of Preline UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </head>
      <body>
        <ToastContainerWrapper />
        <div className='flex h-[100vh] w-full dark:text-white'>
          <div className='w-[30%] flex-shrink-0'>
            <ul>
              <li>
                <Link href='avatar'>Avatar</Link>
              </li>
              <li>
                <Link href='avatar-group'>Avatar Group</Link>
              </li>
              <li>
                <Link href='breadcrumb'>Breadcrumb</Link>
              </li>
              <li>
                <Link href='tab'>Tab</Link>
              </li>
              <li>
                <Link href='nav-menu'>Nav Menu</Link>
              </li>
              <li>
                <Link href='app-menu'>App Menu</Link>
              </li>
              <li>
                <Link href='badge'>Badge</Link>
              </li>
              <li>
                <Link href='toast'>Toast</Link>
              </li>
              <li>
                <Link href='button'>Button</Link>
              </li>
              <li>
                <Link href='sidebar'>Sidebar</Link>
              </li>
              <li>
                <Link href='alert'>Alert</Link>
              </li>
              <li>
                <Link href='tooltip'>Tooltip</Link>
              </li>
              <li>
                <Link href='popover'>Popover</Link>
              </li>
              <li>
                <Link href='popconfirm'>Popconfirm</Link>
              </li>
              <li>
                <Link href='popup'>Popup</Link>
              </li>
              <li>
                <Link href='drawer'>Drawer</Link>
              </li>
              <li>
                <Link href='modal'>Modal</Link>
              </li>
              <li>
                <Link href='input'>Input</Link>
              </li>
              <li>
                <Link href='form'>Form</Link>
              </li>
              <li>
                <Link href='dropdown'>Dropdown</Link>
              </li>
              <li>
                <Link href='transition'>Transition</Link>
              </li>
              <li>
                <Link href='table'>Table</Link>
              </li>
              <li>
                <Link href='pagination'>Pagination</Link>
              </li>
              <li>
                <Link href='zindex'>zIndex</Link>
              </li>
            </ul>
          </div>
          <div className='flex-1 p-10'>{children}</div>
        </div>
      </body>
    </html>
  );
}
