'use client';

import { FC } from 'react';
import { Button } from 'preline-react';
import { Popover } from 'preline-react';

const PopoverDemo: FC = () => {
  return (
    <div className='mt-20 h-[300px] overflow-auto pt-10'>
      <p className='p-5'>
        <Popover content='Popover content'>
          <Button>DEFAULT</Button>
        </Popover>
      </p>
      <p className='p-5'>
        <Popover content='Popover content' placement='right'>
          <Button>RIGHT PLACEMENT</Button>
        </Popover>
      </p>
      <p className='p-5'>
        <Popover content='Popover content' trigger='hover'>
          <Button>HOVER TRIGGER</Button>
        </Popover>
      </p>
    </div>
  );
};

export default PopoverDemo;
