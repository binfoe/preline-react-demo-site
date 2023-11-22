import { FC } from 'react';

import { Spin } from 'preline-react/lib/spin';

const SkeletonDemo: FC = () => {
  return (
    <div className='p-20'>
      <div className='mb-8'>
        <h3>Simple</h3>
        <Spin />
      </div>
      <div className='mb-8'>
        <h3>Color & Size</h3>
        <Spin className='text-pink-600' size='lg' />
      </div>
    </div>
  );
};

export default SkeletonDemo;
