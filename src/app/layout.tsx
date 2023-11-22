import type { Metadata } from 'next';

import { Nav } from './nav';
import './tailwind.css';
import { Header } from './header';

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
      <body className='mb-[56px] dark:bg-slate-900 sm:mb-[116px]'>
        <Header />
        <div className='mx-auto flex max-w-[90rem]'>
          <div className='relative -my-8 space-y-8 px-8 pb-10 pt-7 lg:my-0'>
            <Nav />
          </div>
          <div className='flex-1 px-4 pt-10 sm:px-6 md:px-8 lg:ps-[22rem]'>{children}</div>
        </div>
      </body>
    </html>
  );
}
