import React from 'react';
import { BarChart } from '@/components/BarChart';
import { Layout } from '@/app/layout';

export const ChartPage = () => {
  return (
    <Layout>
      <h1 className='text-5xl font-bold'>CHART</h1>
      <BarChart />
    </Layout>
  );
};
