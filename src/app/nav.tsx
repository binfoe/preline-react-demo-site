'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavMenu } from 'preline-react';
import { MenuItemProps } from 'preline-react/src/menu/common';
import { FC, useEffect, useState } from 'react';

const DemoMenuItems = [
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
      {
        name: (
          <a href='https://www.preline.co/docs/typography.html' target='_blank'>
            Typography
          </a>
        ),
        key: 'typo',
      },
      {
        name: (
          <a href='https://www.preline.co/docs/images.html' target='_blank'>
            Images
          </a>
        ),
        key: 'images',
      },
    ],
  },
  {
    name: 'Basic Components',
    key: 'basic',
    children: [
      {
        name: <Link href='/button'>Buttons</Link>,
        key: '/button',
      },
      {
        name: (
          <a href='https://www.preline.co/docs/timeline.html' target='_blank'>
            Timeline
          </a>
        ),
        key: 'Timeline',
      },
    ],
  },
  {
    name: 'Navigations',
    key: 'Navigations',
    children: [
      {
        name: <Link href='/app-menu'>App Menu</Link>,
        key: '/app-menu',
      },
    ],
  },
  {
    name: 'Basic Forms',
    key: 'Basic Forms',
    children: [
      {
        name: <Link href='/input'>Input</Link>,
        key: '/input',
      },
    ],
  },
  {
    name: 'Advance Forms',
    key: 'Advance Forms',
    children: [
      {
        name: <Link href='/number-input'>Number Input</Link>,
        key: '/input-number',
      },
    ],
  },
  {
    name: 'Overlays',
    key: 'overlay',
    children: [
      {
        name: <Link href='/tooltip'>Tooltip</Link>,
        key: '/tooltip',
      },
    ],
  },
  {
    name: 'Data Display',
    key: 'data-display',
    children: [
      {
        name: <Link href='/table'>Table</Link>,
        key: '/table',
      },
    ],
  },
  {
    name: 'Third Party Plugins',
    key: 'third-p-p',
    children: [
      {
        name: (
          <a href='https://www.preline.co/docs/text-editor.html' target='_blank'>
            WYSIWYG Editor
          </a>
        ),
        key: 'wysiwyg',
      },
    ],
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
    return DemoMenuItems.filter((item) => item.children?.length).map((item) => item.key);
  });
  const [selectKeys, setSelectKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectKeys(pathname ? [pathname] : []);
    if (!pathname) {
      return;
    }
    const mpath = findMenuPath(DemoMenuItems, pathname);
    const keys = mpath.filter((menu) => !!menu.children?.length).map((menu) => menu.key);
    setOpenKeys((oldKeys) => [...new Set([...oldKeys, ...keys]).values()]);
  }, [pathname]);

  return (
    <NavMenu
      items={DemoMenuItems}
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