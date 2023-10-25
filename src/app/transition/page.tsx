'use client';

import { FC, useState } from 'react';
import { uid } from 'preline-react';
import { Transition, TransitionGroup } from 'preline-react';
import { Button } from 'preline-react';

const ts = {
  enterFrom: 'opacity-0',
  enterTo: 'opacity-1',
  enterActive: 'transition-opacity duration-700',
  leaveFrom: 'opacity-1',
  leaveActive: 'transition-opacity duration-700',
  leaveTo: 'opacity-0',
};

const TransitionDemo: FC = () => {
  const [list, setList] = useState<string[]>(() => [
    ...new Array(1).fill(0).map((n, i) => `item-${i}`),
    'some-special',
  ]);
  const [hide, setHide] = useState(false);
  return (
    <div className='mt-20 overflow-auto pt-10'>
      <div className='border p-5'>
        <h1>Appear</h1>
        <Transition isEnter appear {...ts}>
          <div>hello</div>
        </Transition>
        <Transition isEnter={false} appear {...ts}>
          <div>hello</div>
        </Transition>
      </div>
      <div className='my-2 border p-5'>
        <h1>Toogle Show/Hide, with leaveDone className</h1>
        <Transition isEnter={!hide} {...ts} leaveDone='hidden'>
          <div>hello</div>
        </Transition>
        <h1>Toggle Show/Hide, destroyAfterLeave</h1>
        <Transition {...ts} isEnter={!hide} destroyAfterLeave>
          <div>hello</div>
        </Transition>
        <Button
          onClick={() => {
            setHide(!hide);
          }}
        >
          {hide ? 'SHOW' : 'HIDE'}
        </Button>
      </div>
      <div className='my-2 border p-5'>
        <div className='mb-2 flex justify-between'>
          <h1>Transition Group, List items transition</h1>
          <div className='flex gap-2'>
            <Button
              size='small'
              onClick={() => {
                setList([...list, uid()]);
              }}
            >
              ADD
            </Button>
            <Button
              size='small'
              onClick={() => {
                if (list.indexOf('some-special') < 0) {
                  setList([...list, 'some-special']);
                }
              }}
            >
              ADD SPECIAL
            </Button>
          </div>
        </div>
        <ul>
          <TransitionGroup>
            {list.map((item) => (
              <Transition isEnter key={item} {...ts}>
                <li key={item} className='flex items-center gap-4 border p-4'>
                  <div>{item}</div>
                  <div>
                    <Button
                      size='small'
                      onClick={() => {
                        const i = list.indexOf(item);
                        if (i >= 0) {
                          const newList = list.slice();
                          newList.splice(i, 1);
                          setList(newList);
                        }
                      }}
                    >
                      Remove {list.length}
                    </Button>
                  </div>
                </li>
              </Transition>
            ))}
          </TransitionGroup>
        </ul>
      </div>
    </div>
  );
};

export default TransitionDemo;
