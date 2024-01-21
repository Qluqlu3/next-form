import React from 'react';
import { BarChart } from '@/app/components/BarChart';
import { Layout } from '@/app/components/Layouts/Layout';

export const ChartPage = () => {
  return (
    <Layout>
      <h1 className='text-5xl font-bold'>CHART</h1>
      <BarChart />
    </Layout>
  );
};
