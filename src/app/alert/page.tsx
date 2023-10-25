'use client';

import { FC } from 'react';

import { AlertDark, AlertError, AlertInfo, AlertSuccess, AlertTip, AlertWarn } from 'preline-react';

const AlertDemo: FC = () => {
  return (
    <div className='grid max-w-lg grid-cols-1 gap-2 p-4'>
      <AlertTip>You should check in on some of those fields below.</AlertTip>
      <AlertDark>You should check in on some of those fields below.</AlertDark>
      <AlertInfo>You should check in on some of those fields below.</AlertInfo>
      <AlertSuccess>You should check in on some of those fields below.</AlertSuccess>
      <AlertError>You should check in on some of those fields below.</AlertError>
      <AlertWarn>You should check in on some of those fields below.</AlertWarn>
    </div>
  );
};

export default AlertDemo;
