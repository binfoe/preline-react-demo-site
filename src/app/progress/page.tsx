'use client';

import { FC, useEffect, useState } from 'react';

import { Progress } from 'preline-react';

const ProgressDemo: FC = () => {
  const [v, setV] = useState(30);
  useEffect(() => {
    const int = setInterval(() => {
      setV((v) => {
        if (v >= 100) {
          return 30;
        } else {
          return v + 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, []);
  return (
    <div className='p-20'>
      <div className='mb-8'>
        <h3>Simple</h3>
        <Progress value={v} />
      </div>
      <div className='mb-8'>
        <h3>Mini</h3>
        <Progress label={false} value={v} />
      </div>
      <div className='text-xl'>
        More At:{' '}
        <a className='underline' href='https://www.preline.co/docs/progress.html' target='_blank'>
          Preline UI - Progress
        </a>
      </div>
    </div>
  );
};

export default ProgressDemo;
