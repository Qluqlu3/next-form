'use client';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

type Props = {};

export const BarChart: React.FC<Props> = ({}: Props) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const labels = ['ラベル1', 'ラベル2'];
  const data1 = [133, 471];
  const data2 = [358, 236];

  const options: ChartOptions<'bar'> = {
    scales: {
      y: {
        ticks: {
          color: '#000', // 目盛りの文字色
        },
      },
      x: {
        ticks: {
          color: '#000', // 目盛りの文字色
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'データ1',
        data: data1,
        backgroundColor: 'rgba(0,120, 0, 0.9)',
      },
      {
        label: 'データ2',
        data: data2,
        backgroundColor: 'rgba(180, 100, 0, 0.9)',
      },
    ],
  };

  return <Bar data={data} options={options} />;
};
