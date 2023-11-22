'use client';

import { FC } from 'react';
import { Select } from 'preline-react/lib/select';

const PaginationDemo: FC = () => {
  return (
    <>
      <div className='border p-5'>
        <div className='flex items-center gap-2'>
          <label>Choose your favirate fruit:</label>
          <Select
            options={[
              {
                label: 'Apple',
                value: 'apple',
              },
              {
                label: 'Banana',
                value: 'banana',
              },
            ]}
          />
        </div>
        <div>TODO: muliple & more at https://preline.co/docs/advanced-select.html</div>
      </div>
    </>
  );
};

export default PaginationDemo;
