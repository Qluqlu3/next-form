import React, { useCallback, useState } from 'react';

import { Checkbox } from '@/app/components/Form/Checkbox/Checkbox';
import { CHECK_BOX_LIST } from '@/constants';
import { Card } from '@/app/components/Card';
import { Layout } from '@/app/layout';

interface Props {
  temp: string;
}

export const Home: React.FC<Props> = ({ temp }) => {
  return (
    <Layout>
      <h1 className='text-5xl font-bold'>Home</h1>
      <div className='flex gap-x-3 items-center'>
        <div>気温：</div>
        <span className='block font-semibold text-3xl text-red-600'>{temp}</span>
        <span>°C</span>
      </div>

      <div className='flex w-full gap-5 flex-wrap'>
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
    </Layout>
  );
};
