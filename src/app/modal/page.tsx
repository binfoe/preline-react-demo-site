'use client';

import { FC, useEffect, useState } from 'react';
import { Button } from 'preline-react';
import { Modal } from 'preline-react';

const PC: FC<{ v: boolean }> = ({ v }) => {
  const [c, setC] = useState(0);
  useEffect(() => {
    setC((c) => c + 1);
  }, [v]);
  useEffect(() => {
    return () => {
      console.log('FC has been destroied');
    };
  }, []);
  return (
    <div className='py-20'>
      <p>Hello, World</p>
      <p>You have count {c} times</p>
    </div>
  );
};
const ModalDemo: FC = () => {
  const [vis1, setVis1] = useState(false);
  const [vis2, setVis2] = useState(false);

  return (
    <div className='mt-20 h-[300px] overflow-auto pt-10'>
      <div className='relative p-5'>
        <Modal title='Test Modal 1' visible={vis1} onCancel={() => setVis1(false)}>
          <PC v={vis1} />
        </Modal>
        <Button onClick={() => setVis1(true)}>OPEN MODAL</Button>
      </div>
      <div className='relative p-5'>
        <Modal
          visible={vis2}
          title='Test Modal 2'
          onCancel={() => setVis2(false)}
          destroyAfterClose={false}
          onMaskClick={() => setVis2(false)}
        >
          <PC v={vis2} />
        </Modal>
        <Button onClick={() => setVis2(true)}>KEEP DOM AFTER CLOSE</Button>
      </div>
    </div>
  );
};

export default ModalDemo;
