'use client';

import { FC } from 'react';
import { Pagination } from 'preline-react';

const PaginationDemo: FC = () => {
  return (
    <>
      <div className='border p-5'>
        <h1 className='mb-2 border-b pb-2'>Full pagination</h1>
        <Pagination
          total={29}
          pageSize={4}
          onChange={(page, size) => {
            console.log(page, size);
          }}
        />
      </div>
      <div className='mt-5 border p-5'>
        <h1 className='mb-2 border-b pb-2'>Cursor pagination</h1>
        <p>Todo...</p>
      </div>
    </>
  );
};

export default PaginationDemo;
