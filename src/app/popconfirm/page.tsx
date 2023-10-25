'use client';

import { FC, useState } from 'react';
import { Button } from 'preline-react';
import { Popconfirm } from 'preline-react';
import { Toast } from 'preline-react';

const PopoverDemo: FC = () => {
  const [vis, setVis] = useState(false);
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 3000)); // 模拟删除资源
    setLoading(false);
    Toast.success('删除资源成功');
    setVis(false);
  };
  return (
    <div className='mt-20 h-[300px] overflow-auto pt-10'>
      <p className='p-5'>
        <Popconfirm
          visible={vis}
          loading={loading}
          onCancel={() => setVis(false)}
          onConfirm={() => submit()}
          onVisibleChange={(v) => {
            if (v) setVis(true);
          }}
          title='删除xxx'
          content='确认要删除 xxx 吗？'
        >
          <Button>DELETE</Button>
        </Popconfirm>
      </p>
    </div>
  );
};

export default PopoverDemo;
