import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';

import '../../style/style.css';
import { ChartPage } from '@/app/pages/chart';

interface Props {}

// サーバーサイドでデータを取得する関数
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   return { props };
// };

const Chart: React.FC<Props> = ({}: Props): JSX.Element => {
  return <ChartPage />;
};

export default Chart;
