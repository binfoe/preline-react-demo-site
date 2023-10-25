'use client';

import { FC, useState } from 'react';
import { BsChevronDown, BsDownload, BsPerson } from 'react-icons/bs';
import { Button } from 'preline-react';
import { Dropdown } from 'preline-react';
import { Toast } from 'preline-react';
import { Spin } from 'preline-react';

const DropdownDemo: FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className='mt-20 h-[300px] overflow-auto pt-10'>
      <div className='p-5'>
        <Dropdown
          items={[
            {
              title: 'With icon',
            },
            {
              label: 'Download',
              icon: <BsDownload />,
            },
            {
              icon: <BsPerson />,
              key: 'person',
              label: <>Team Support</>,
            },
            '-',
            {
              title: 'Normal',
            },
            {
              label: 'Newsletter',
            },
            {
              label: 'Purchases',
            },
            '-',
            {
              label: 'Logout',
            },
          ]}
        >
          <Button>
            Actions
            <BsChevronDown />
          </Button>
        </Dropdown>
      </div>
      <div className='p-5'>
        <Dropdown
          items={[
            {
              autoClose: false,
              disabled: loading,
              onClick: () => {
                setLoading(true);
                setTimeout(() => {
                  Toast.success('Delete success');
                  setLoading(false);
                  setOpen(false);
                }, 5000);
              },
              label: (
                <div className='flex w-full items-center justify-between'>
                  Delete
                  {loading && <Spin />}
                </div>
              ),
              key: 'delete',
            },
          ]}
          visible={open}
          onVisibleChange={(v) => {
            if (loading) return;
            setOpen(v);
          }}
        >
          <Button>
            Control Mode
            <BsChevronDown />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default DropdownDemo;
