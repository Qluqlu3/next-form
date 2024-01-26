import React from 'react';

import '../../style/style.css';
import { ChartPage } from '@/app/chart/page';

interface Props {}

const Chart: React.FC<Props> = ({}: Props): JSX.Element => {
  return <ChartPage />;
};

export default Chart;
