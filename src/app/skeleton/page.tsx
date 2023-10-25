import { FC } from 'react';

import { Skeleton } from 'preline-react';

const SkeletonDemo: FC = () => {
  return (
    <div className='p-20'>
      <div className='mb-8'>
        <h3>Simple</h3>
        <Skeleton />
      </div>
      <div>
        <h3>No animate and avatar</h3>
        <Skeleton animate={false} avatar={false} />
      </div>
    </div>
  );
};

export default SkeletonDemo;
