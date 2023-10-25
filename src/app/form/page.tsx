'use client';

import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CheckboxGroup } from 'preline-react';
import { Input, NumberInput } from 'preline-react';
import { Button } from 'preline-react';
import { Toast } from 'preline-react';

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
const FormDemo: FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
    age: number;
    fruits: string[];
  }>({
    defaultValues: {
      email: '',
      password: '',
      age: 18,
      fruits: [],
    },
  });

  return (
    <>
      <div className='m-4 border p-5'>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            Toast.show(JSON.stringify(data, null, 2));
          })}
          className='flex flex-col gap-y-4'
        >
          <label className='flex flex-col gap-2'>
            <span className='text-sm font-medium dark:text-white'>Email address</span>
            <Input
              state={errors.email ? 'error' : 'default'}
              {...register('email', {
                required: '邮件不能为空',
                pattern: {
                  value: /.+@.+/,
                  message: '邮箱格式错误',
                },
              })}
            />
            {errors.email && <span className='text-xs text-red-600'>{errors.email.message}</span>}
          </label>
          <label className='flex flex-col gap-2'>
            <span className='text-sm font-medium dark:text-white'>Password</span>
            <Input
              state={errors.password ? 'error' : 'default'}
              type='password'
              {...register('password', { required: '密码不能为空' })}
            />
            {errors.password && (
              <span className='text-xs text-red-600'>{errors.password.message}</span>
            )}
          </label>
          <label className='flex flex-col gap-2'>
            <span className='text-sm font-medium dark:text-white'>Age</span>
            <Controller
              control={control}
              name='age'
              rules={{
                min: {
                  value: 16,
                  message: '16岁以下禁止使用',
                },
                max: {
                  value: 30,
                  message: '30岁以上禁止使用',
                },
              }}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <NumberInput
                  state={error ? 'error' : 'default'}
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            {errors.age && <span className='text-xs text-red-600'>{errors.age.message}</span>}
          </label>
          <label className='flex flex-col gap-2'>
            <span className='text-sm font-medium dark:text-white'>Favorite fruits</span>
            <Controller
              control={control}
              name='fruits'
              rules={{
                validate(v) {
                  if (v.length < 1) {
                    return '至少选择一个水果';
                  }
                },
              }}
              render={({ field: { onChange, value } }) => (
                <CheckboxGroup options={Options} value={value} onChange={onChange} />
              )}
            />
            {errors.fruits && <span className='text-xs text-red-600'>{errors.fruits.message}</span>}
          </label>
          <Button htmlType='submit'>Submit</Button>
        </form>
      </div>
    </>
  );
};

export default FormDemo;
