'use client';

import { FC } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { Button } from 'preline-react';
import { Tooltip } from 'preline-react';

const TooltipDemo: FC = () => {
  return (
    <div className='mt-20 h-[300px] overflow-auto pt-10'>
      <p className='p-5'>
        <Tooltip content='Simple Tooltip'>
          <Button>DEFAULT</Button>
        </Tooltip>
      </p>
      <p className='p-5'>
        <Tooltip trigger='click' content='Tooltip'>
          <Button>TRIGGER CLICK</Button>
        </Tooltip>
      </p>
      <p className='flex items-center p-5'>
        <Tooltip content='Hello, World'>
          <span>
            <BsInfoCircle className='mr-1' />
          </span>
        </Tooltip>
        Simple Tooltip
      </p>
      <p className='p-5'>
        <Tooltip delay={1000} content='Tooltip'>
          <Button>HOVER WITH DELAY</Button>
        </Tooltip>
      </p>
      <p className='p-5'>
        <Tooltip placement='bottom' content='Tooltip'>
          <Button>BOTTOM PLACEMENT</Button>
        </Tooltip>
      </p>
    </div>
  );
};

export default TooltipDemo;
