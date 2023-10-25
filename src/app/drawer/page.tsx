'use client';

import { FC, useState } from 'react';
import { Button } from 'preline-react';
import { Drawer } from 'preline-react';

const DrawerDemo: FC = () => {
  const [vis1, setVis1] = useState(false);
  const [vis2, setVis2] = useState(false);
  const [vis3, setVis3] = useState(false);
  const [vis4, setVis4] = useState(false);

  return (
    <div className='mt-20'>
      <div className='relative p-5'>
        <Drawer title='Left Drawer' visible={vis1} onVisibleChange={(v) => setVis1(v)}>
          Hello World
        </Drawer>
        <Button onClick={() => setVis1(true)}>LEFT DRAWER</Button>
      </div>
      <div className='relative p-5'>
        <Drawer
          title='Right Drawer'
          placement='right'
          visible={vis2}
          onVisibleChange={(v) => setVis2(v)}
        >
          Hello World
        </Drawer>
        <Button onClick={() => setVis2(true)}>RIGHT DRAWER</Button>
      </div>
      <div className='relative p-5'>
        <Drawer
          title='Bottom Drawer'
          placement='bottom'
          visible={vis3}
          onVisibleChange={(v) => setVis3(v)}
        >
          Hello World
        </Drawer>
        <Button onClick={() => setVis3(true)}>BOTTOM DRAWER</Button>
      </div>
      <div className='relative p-5'>
        <Drawer
          title='Top Drawer'
          placement='top'
          visible={vis4}
          onVisibleChange={(v) => setVis4(v)}
        >
          Hello World
        </Drawer>
        <Button onClick={() => setVis4(true)}>TOP DRAWER</Button>
      </div>
    </div>
  );
};

export default DrawerDemo;
