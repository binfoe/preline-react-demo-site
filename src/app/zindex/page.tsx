'use client';

import { FC, useState } from 'react';
import { Button } from 'preline-react';
import { Modal } from 'preline-react';
import { Toast } from 'preline-react';
import { Tooltip } from 'preline-react';
import { Popup } from 'preline-react';

function renderCnt(vis: boolean) {
  return (
    <>
      <div className='flex justify-end'>
        <Button
          onClick={() => {
            Toast.info({
              content: 'Test toast will be topest',
              duration: 0,
            });
          }}
        >
          TOAST
        </Button>
      </div>
      <div className='flex gap-4'>
        <Tooltip content='Test tooltip' visible={vis}>
          <Button>TOOLTIP</Button>
        </Tooltip>
        <Tooltip content='Test tooltip'>
          <Button>TOOLTIP</Button>
        </Tooltip>
      </div>
    </>
  );
}
const P: FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const [vis, setVis] = useState(false);
  return (
    <Popup visible={visible} onMaskClick={onClose}>
      <div className='flex flex-col gap-4'>
        <Button
          onClick={() => {
            setVis(true);
          }}
        >
          OPEN MODAL
        </Button>
        {renderCnt(visible)}
      </div>
      <M visible={vis} onClose={() => setVis(false)} />
    </Popup>
  );
};
const M: FC<{
  visible: boolean;
  onClose: () => void;
}> = ({ visible, onClose }) => {
  const [vis, setVis] = useState(false);
  return (
    <Modal visible={visible} onCancel={onClose}>
      <div className='flex flex-col gap-4'>
        <Button
          onClick={() => {
            setVis(true);
          }}
        >
          OPEN POPUP
        </Button>
        {renderCnt(visible)}
      </div>
      <P visible={vis} onClose={() => setVis(false)} />
    </Modal>
  );
};
const ZIndexDemo: FC = () => {
  const [vis, setVis] = useState(false);
  return (
    <div className='mt-20 h-[300px] overflow-auto pt-10'>
      <Button onClick={() => setVis(true)}>OPEN MODAL</Button>
      <M onClose={() => setVis(false)} visible={vis}></M>
    </div>
  );
};

export default ZIndexDemo;
