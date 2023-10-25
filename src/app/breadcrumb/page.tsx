import { FC } from 'react';
import { Breadcrumb } from 'preline-react/lib/breadcrumb';

const BreadcrumbDemo: FC = () => {
  return (
    <div className='m-4 border p-5'>
      <Breadcrumb items={[{ name: '首页' }, { name: '项目' }, { name: '项目详情' }]} />
    </div>
  );
};

export default BreadcrumbDemo;
