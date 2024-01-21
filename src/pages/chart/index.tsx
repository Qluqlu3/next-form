import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';

import '../../style/style.css';
import { ChartPage } from '@/app/pages/chart';
import Menu from '@/app/components/Layouts/Menu';

interface Props {}

// サーバーサイドでデータを取得する関数
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   return { props };
// };

const Chart: React.FC<Props> = ({}: Props): JSX.Element => {
  return (
    <div className='flex flex-col gap-y-8 bg-gray-300 min-h-screen p-5'>
      <Menu />
      <h1 className='text-5xl font-bold'>CHART</h1>
      <ChartPage />;
    </div>
  );
};

export default Chart;
