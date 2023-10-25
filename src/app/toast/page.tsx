'use client';

import { FC } from 'react';
import { Button } from 'preline-react';
import { Toast } from 'preline-react';

let i = 0;
function x() {
  return new Array(i++).fill(0).join('-');
}

const ToastDemo: FC = () => {
  return (
    <div className='flex gap-4 p-5'>
      <Button
        color='red'
        onClick={() => {
          Toast.info({
            content: `This is a normal message${x()}`,
            closable: true,
            duration: 0,
          });
          Toast.success(`hello${x()}`);
          Toast.error(`hello${x()}`);
          Toast.warn(`hello${x()}`);
          const xx = Toast.show({
            content: `hello${x()}`,
            duration: 0,
            loading: true,
          });
          setTimeout(() => {
            xx.close();
          }, 5000);
        }}
      >
        SHOW TOAST
      </Button>
      <Button
        onClick={() => {
          Toast.success({
            content: `Successed!` + ` ${i++}`,
            closable: true,
            duration: 0,
          });
        }}
      >
        SHOW SUCCESS
      </Button>
    </div>
  );
};
export default ToastDemo;
