'use client';

import { FC, useEffect, useState } from 'react';
import { Table, TableColumn } from 'preline-react';
import { Button } from 'preline-react';

interface SomeEntity {
  id: number;
  name: string;
  desc: string;
}

function mockApi(pageNumber: number, pageSize: number) {
  return new Promise<{
    total: number;
    list: SomeEntity[];
  }>((resolve) => {
    setTimeout(() => {
      resolve({
        total: 1234,
        list: new Array(pageSize).fill(0).map((n, i) => ({
          id: pageNumber * pageSize + i,
          name: `item-${pageNumber * pageSize + i}`,
          desc: `hello, this is item-${pageNumber * pageSize + i}`,
        })),
      });
    }, 800);
  });
}

const TableDemo: FC = () => {
  const columns: TableColumn<SomeEntity>[] = [
    {
      name: 'NAME',
      render: (rec) => rec.name,
    },
    {
      name: 'DESCRIPTION',
      render: (rec) => rec.desc,
    },
    {
      id: 'op',
      render: () => (
        <>
          <Button size='small' type='ghost'>
            Delete
          </Button>
        </>
      ),
    },
  ];
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    total: number;
    list: SomeEntity[];
  }>();
  const [pagi, setPagi] = useState({
    pageNumber: 0,
    pageSize: 5,
  });
  const load = async (page: number, size: number) => {
    setLoading(true);
    const res = await mockApi(page, size);
    setLoading(false);
    setData(res);
  };
  useEffect(() => {
    load(pagi.pageNumber, pagi.pageSize);
  }, [pagi]);
  return (
    <div>
      <div className='mb-6 border p-5'>
        <p className='mb-4'>Table with Pagination, no border</p>
        <Table
          loading={loading}
          columns={columns}
          data={data?.list}
          pagination={{
            showTotal: true,
            pageNumber: pagi.pageNumber,
            pageSize: pagi.pageSize,
            total: data?.total,
            onChange(pageNumber, pageSize) {
              setPagi({ pageNumber, pageSize });
            },
          }}
        />
      </div>
      <div className='border p-5'>
        <p className='mb-4'>Bordered & Hoverable & Striped</p>
        <Table
          hoverable
          striped
          size='small'
          loading={loading}
          columns={columns}
          data={data?.list}
          bordered
        />
      </div>
    </div>
  );
};

export default TableDemo;
