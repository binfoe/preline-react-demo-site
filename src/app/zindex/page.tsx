'use client';

/**
 * Modal 和 Popup 相互嵌套递归，可以无限进行弹窗再弹窗，新弹出层的蒙版应该遮挡好旧的层。
 * Modal 和 Popup 中都有 Tooltip 和 Toast（Message）。
 * Tooltip 需要在当前弹窗层的内容之上展示，但能够被下一层新的弹窗遮挡，无限递归下去后每一层的 Tooltip 都满足这个要求。
 * Toast 一般是比如操作提交 api 接口后的成功或失败提示，需要永远在最顶上，不论当前有多少层弹窗。
 * 这个示例以及使用到的相关组件，达到上述目标，不是靠不同组件约定某个特定的 zIndex，而是统一的进行动态化 z-index 管理。
 */

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
