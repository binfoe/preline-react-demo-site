'use client';

import { FC, useState } from 'react';
import { Switch } from 'preline-react';
import { Checkbox, CheckboxGroup } from 'preline-react';
import { Radio, RadioGroup } from 'preline-react';
import { Input, NumberInput, Textarea } from 'preline-react';

const Options = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Orange',
    value: 'orange',
  },
  {
    label: 'Banana',
    value: 'banana',
  },
];
const InputDemo: FC = () => {
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState<string[]>([]);
  const [v3, setV3] = useState('');
  return (
    <>
      <div className='m-4 border p-5'>
        <div>
          <p>
            <Switch value={v1} onChange={(v) => setV1(v)}>
              On
            </Switch>
          </p>
          <p>
            <Checkbox value={v1} onChange={(v) => setV1(v)}>
              Some Check
            </Checkbox>
          </p>
          <p>
            <Radio value={v1} onChange={(v) => setV1(v)}>
              Some Radio
            </Radio>
          </p>
        </div>
      </div>
      <div className='m-4 border p-5'>
        <div className='flex gap-2'>
          <h3>Radio Group:</h3>
          <RadioGroup options={Options} />
        </div>
        <div className='flex gap-2'>
          <h3>Checkbox Group:</h3>
          <CheckboxGroup
            options={Options}
            value={v2}
            onChange={(v) => {
              console.log(v);
              setV2(v);
            }}
          />
        </div>
      </div>
      <div className='m-4 border p-5'>
        <div className='flex gap-2'>
          Input:
          <Input placeholder='some input' value={v3} onChange={(evt) => setV3(evt.target.value)} />
        </div>
        <div className='mt-2 flex gap-2'>
          Textarea:
          <Textarea value={v3} onChange={(evt) => setV3(evt.target.value)} />
        </div>
        <div className='mt-2 flex gap-2'>
          Number:
          <NumberInput />
        </div>
      </div>
    </>
  );
};

export default InputDemo;
