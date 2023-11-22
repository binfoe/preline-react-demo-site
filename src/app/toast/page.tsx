'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { Button } from 'preline-react';
import { Toast } from 'preline-react';
import { ToastInstance } from 'preline-react/src/toast/ToastContainer';

let i = 0;
function x() {
  return new Array(i++).fill(0).join('-');
}

const X: FC<{ n: number }> = ({ n }) => {
  const [k, setK] = useState(n);
  useEffect(() => {
    console.log('set int', n);
    setK(n);
    const int = setInterval(() => {
      setK((k) => k + 1);
    }, 1000);
    return () => {
      console.log('clear int');
      clearInterval(int);
    };
  }, [n]);
  return (
    <div>
      <Button
        onClick={() => {
          Toast.show('yes');
        }}
      >
        TTT {k}
      </Button>
    </div>
  );
};
const ToastDemo: FC = () => {
  const [n, setN] = useState(0);
  const xRef = useRef<ToastInstance>();
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
          xRef.current = Toast.success({
            content: <X n={n} />,
            closable: true,
            duration: 0,
          });
        }}
      >
        SHOW SUCCESS
      </Button>
      <Button
        className='ml-8'
        onClick={() => {
          setN(n + 10);
          xRef.current?.update(<X n={n + 10} />);
        }}
      >
        UPDATE SUCCESS
      </Button>
    </div>
  );
};
export default ToastDemo;
