'use client';

import { FC } from 'react';
import { Button } from 'preline-react';

const ButtonDemo: FC = () => {
  return (
    <div>
      <Button>SOLID</Button>
      <Button type='outline'>OUTLINE</Button>
    </div>
  );
};

export default ButtonDemo;
