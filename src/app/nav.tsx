'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavMenu } from 'preline-react/lib/menu';
import { useNonFirstEffect } from 'preline-react/lib/util';
import { MenuItemProps } from 'preline-react/src/menu/common';
import { FC, useState } from 'react';

function a(t: string, p?: string) {
  return {
    name: (
      <a
        target='_blank'
        href={`https://www.preline.co/docs/${p || t.replace(/\s+/g, '-').toLowerCase()}.html`}
      >
        {t}
      </a>
    ),
    key: t,
  };
}
function l(t: string, p?: string) {
  const href = `/${p || t.replace(/\s+/g, '-').toLowerCase()}`;
  return {
    name: <Link href={href}>{t}</Link>,
    key: href,
  };
}
const MenuItems: MenuItemProps[] = [
  {
    name: (
      <a href='https://www.preline.co/index.html' target='_blank'>
        Preline UI
      </a>
    ),
    key: 'preline',
  },
  {
    name: 'Content',
    key: 'content',
    children: [
      a('Typography'),
      a('Images'),
      a('Links'),
      a('Dividers'),
      a('KBD'),
      a('Custom Scrollbar'),
      l('zIndex'),
    ],
  },
  {
    name: 'Basic Components',
    key: 'basic',
    children: [
      a('Alerts'),
      a('Avatar'),
      l('Avatar Group'),
      a('Badge'),
      l('Button'),
      a('Button Group'),
      a('Card'),
      a('Chat Bubbles'),
      a('Carousel'),
      a('Collapse'),
      a('Datepicker'),
      a('Devices'),
      a('Lists'),
      a('List Group'),
      a('Legend Indicator'),
      l('Progress'),
      a('File Uploading Progress', 'file-uploading-progress-form'),
      a('Ratings'),
      l('Skeleton'),
      l('Spinner'),
      a('Static Icons'),
      l('Stepper'),
      l('Toast'),
      a('Timeline'),
    ],
  },
  {
    name: 'Navigations',
    key: 'Navigations',
    children: [
      a('Mega Menu'),
      a('Scrollspy'),
      l('App Menu'),
      l('Nav Menu'),
      l('Tab'),
      l('Breadcrumb'),
      l('Pagination'),
    ],
  },
  {
    name: 'Basic Forms',
    key: 'Basic Forms',
    children: [
      l('Input'),
      l('TextArea'),
      a('Input Group'),
      l('Switch'),
      l('Select'),
      l('Radio'),
      l('Checkbox'),
      l('Form State'),
      l('Range Slider'),
      a('Color Picker'),
    ],
  },
  {
    name: 'Advance Forms',
    key: 'Advance Forms',
    children: [
      a('Input Number'),
      a('Strong Password'),
      a('Toggle Password'),
      a('Toggle Count'),
      a('Copy Markup'),
      a('Pin Input'),
    ],
  },
  {
    name: 'Overlays',
    key: 'overlay',
    children: [
      l('Tooltip'),
      l('Popover'),
      l('Modal'),
      l('Popup'),
      l('Popconfirm'),
      l('Drawer'),
      l('Dropdown'),
    ],
  },
  {
    name: 'Data Display',
    key: 'data-display',
    children: [l('Table')],
  },
  {
    name: 'Third Party Plugins',
    key: 'third-p-p',
    children: [a('Charts'), a('Datamaps'), a('WYSIWYG Editor', 'text-editor'), a('Clipboard')],
  },
];

// 搜索菜单项
function findMenuPath(marr: (MenuItemProps | '-')[], pn: string): MenuItemProps[] {
  for (let i = 0; i < marr.length; i += 1) {
    const m = marr[i];
    if (m === '-') continue;
    if (m.key === pn) {
      return [m];
    }
    if (m.children?.length) {
      const result = findMenuPath(m.children, pn);
      if (result.length) {
        return [m, ...result];
      }
    }
  }
  return [];
}

export const Nav: FC = () => {
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState<string[]>(() => {
    return MenuItems.filter((item) => item.children?.length).map((item) => item.key);
  });
  const [selectKeys, setSelectKeys] = useState<string[]>(pathname ? [pathname] : []);

  useNonFirstEffect(() => {
    setSelectKeys(pathname ? [pathname] : []);
    if (!pathname) {
      return;
    }
    const mpath = findMenuPath(MenuItems, pathname);
    const keys = mpath.filter((menu) => !!menu.children?.length).map((menu) => menu.key);
    setOpenKeys((oldKeys) => [...new Set([...oldKeys, ...keys]).values()]);
  }, [pathname]);

  return (
    <NavMenu
      items={MenuItems}
      openKeys={openKeys}
      selectedKeys={selectKeys}
      onSelect={(keys) => {
        const lk = keys[keys.length];
        if (lk?.startsWith('/')) {
          setSelectKeys([lk]);
        }
      }}
      onOpenChange={(keys) => {
        setOpenKeys(keys);
      }}
      className='-ml-2.5 w-[240px]'
    />
  );
  // return (
  //   <div className='w-[30%] flex-shrink-0'>
  //     <ul>
  //       <li>
  //         <Link href='avatar'>Avatar</Link>
  //       </li>
  //       <li>
  //         <Link href='avatar-group'>Avatar Group</Link>
  //       </li>
  //       <li>
  //         <Link href='breadcrumb'>Breadcrumb</Link>
  //       </li>
  //       <li>
  //         <Link href='tab'>Tab</Link>
  //       </li>
  //       <li>
  //         <Link href='nav-menu'>Nav Menu</Link>
  //       </li>
  //       <li>
  //         <Link href='app-menu'>App Menu</Link>
  //       </li>
  //       <li>
  //         <Link href='badge'>Badge</Link>
  //       </li>
  //       <li>
  //         <Link href='/toast'>Toast</Link>
  //       </li>
  //       <li>
  //         <Link href='button'>Button</Link>
  //       </li>
  //       <li>
  //         <Link href='sidebar'>Sidebar</Link>
  //       </li>
  //       <li>
  //         <Link href='alert'>Alert</Link>
  //       </li>
  //       <li>
  //         <Link href='tooltip'>Tooltip</Link>
  //       </li>
  //       <li>
  //         <Link href='popover'>Popover</Link>
  //       </li>
  //       <li>
  //         <Link href='popconfirm'>Popconfirm</Link>
  //       </li>
  //       <li>
  //         <Link href='popup'>Popup</Link>
  //       </li>
  //       <li>
  //         <Link href='drawer'>Drawer</Link>
  //       </li>
  //       <li>
  //         <Link href='modal'>Modal</Link>
  //       </li>
  //       <li>
  //         <Link href='input'>Input</Link>
  //       </li>
  //       <li>
  //         <Link href='form'>Form</Link>
  //       </li>
  //       <li>
  //         <Link href='dropdown'>Dropdown</Link>
  //       </li>
  //       <li>
  //         <Link href='transition'>Transition</Link>
  //       </li>
  //       <li>
  //         <Link href='table'>Table</Link>
  //       </li>
  //       <li>
  //         <Link href='pagination'>Pagination</Link>
  //       </li>
  //       <li>
  //         <Link href='/zindex'>zIndex</Link>
  //       </li>
  //     </ul>
  //   </div>
  // );
};
