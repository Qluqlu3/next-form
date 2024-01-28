import { Card } from '@/components/Card';
import React from 'react';

type Props = {
  temp: string;
};

export const Home: React.FC<Props> = ({ temp }: Props): JSX.Element => {
  return (
    <>
      <h1 className='text-5xl font-bold my-4 ml-1 border-b-8 border-blue-300'>Home</h1>
      <div className='px-5'>
        <div className='flex gap-x-1 items-end p-5'>
          <div>気温：</div>
          <div className='font-semibold text-3xl text-red-600'>{temp}</div>
          <div>°C</div>
        </div>

        <div className='flex w-full gap-5 flex-wrap p-2'>
          <div className='w-[200px] h-[200px]'>
            <Card />
          </div>
          <div className='w-[200px] h-[200px]'>
            <Card />
          </div>
          <div className='w-[200px] h-[200px]'>
            <Card />
          </div>
          <div className='w-[200px] h-[200px]'>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};
