'use client';

import { FC, useState } from 'react';
import { BsGear, BsHouse, BsPersonCircle } from 'react-icons/bs';
import { Tab } from 'preline-react';

const TabDemo: FC = () => {
  const [k1, setK1] = useState<string | number>('1');
  const [k2, setK2] = useState<string | number>('2');
  return (
    <>
      <div className='m-4 flex flex-col gap-y-3 border p-5'>
        <h1>Normal Tabs</h1>
        <Tab
          activeKey={k1}
          onChange={setK1}
          items={[
            { label: 'Tab 1', key: '1' },
            { label: 'Tab 2', key: '2' },
            { label: 'Tab 3', key: '3' },
          ]}
        />
        <Tab
          className='justify-end'
          activeKey={k1}
          onChange={setK1}
          items={[
            { label: 'Tab 1', key: '1', icon: <BsHouse /> },
            { label: 'Tab 2', key: '2', icon: <BsPersonCircle /> },
            { label: 'Tab 3', key: '3', icon: <BsGear /> },
          ]}
        />
        <Tab
          className='justify-center'
          activeKey={k1}
          onChange={setK1}
          items={[
            { label: 'Tab 1', key: '1', badge: 10 },
            { label: 'Tab 2', key: '2', badge: '99+' },
            { label: 'Tab 3', key: '3', badge: '12345' },
          ]}
        />
        <h1>Card Tabs</h1>

        <Tab
          type='card'
          activeKey={k1}
          onChange={setK1}
          items={[
            { label: 'Tab 1', key: '1' },
            { label: 'Tab 2', key: '2' },
            { label: 'Tab 3', key: '3' },
          ]}
        />
        <Tab
          type='card'
          className='justify-center'
          activeKey={k1}
          onChange={setK1}
          items={[
            { label: 'Tab 1', key: '1' },
            { label: 'Tab 2', key: '2' },
            { label: 'Tab 3', key: '3' },
          ]}
        />
      </div>
      <div className='m-4 flex flex-col gap-y-3 border p-5'>
        <h1>Pills Tabs</h1>
        <Tab
          type='segment'
          activeKey={k2}
          onChange={setK2}
          items={[
            { label: 'Tab 1', key: '1' },
            { label: 'Tab 2', key: '2' },
            { label: 'Tab 3', key: '3' },
          ]}
        />
        <Tab
          type='gray-pills'
          activeKey={k2}
          onChange={setK2}
          items={[
            { label: 'Tab 1', key: '1' },
            { label: 'Tab 2', key: '2' },
            { label: 'Tab 3', key: '3' },
          ]}
        />
        <Tab
          type='pills'
          activeKey={k2}
          onChange={setK2}
          items={[
            { label: 'Tab 1', key: '1' },
            { label: 'Tab 2', key: '2' },
            { label: 'Tab 3', key: '3' },
          ]}
        />
      </div>
      <div className='m-4 flex flex-col gap-y-3 border p-5'>
        <h1>Vertical Tabs</h1>
        <div className='flex'>
          <Tab
            type='vertical-underline'
            activeKey={k2}
            onChange={setK2}
            items={[
              { label: 'Tab 1', key: '1' },
              { label: 'Tab 2', key: '2' },
              { label: 'Tab 3', key: '3' },
            ]}
          />
          <div className='flex-1 px-4'>Tab Content - {k2}</div>
        </div>
      </div>

      <div className='m-4 flex flex-col gap-y-2 border p-5'>
        <h1>Equal-width elements</h1>
        <Tab
          type='pills'
          activeKey={k2}
          onChange={setK2}
          innerClassName='w-full'
          itemClassName='flex-1'
          items={[
            { label: 'Tab 1', key: '1' },
            { label: 'Tab 2', key: '2' },
            { label: 'Tab 3', key: '3' },
          ]}
        />
      </div>
    </>
  );
};

export default TabDemo;
