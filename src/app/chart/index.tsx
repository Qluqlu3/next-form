import { BarChart } from '@/components/BarChart';
import React from 'react';

type Props = {};

export const Chart: React.FC<Props> = ({}: Props): JSX.Element => {
  return (
    <>
      <h1 className='text-5xl font-bold p-4'>Chart</h1>
      <BarChart />
    </>
  );
};
