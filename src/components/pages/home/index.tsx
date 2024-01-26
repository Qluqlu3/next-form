import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';

import '../../style/style.css';
import { Home } from '@/app/home/page';

interface Props {
  weatherData?: number;
  error?: string;
}

// サーバーサイドでデータを取得する関数
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const response = await axios.get(
      'https://samples.openweathermap.org/data/2.5/weather?q=Tokyo&appid=b6907d289e10d714a6e88b30761fae22',
    );
    const weatherData = response.data.main.temp;
    if (response.status !== 200) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return { props: { weatherData } };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        error: 'Failed to fetch data',
      },
    };
  }
};

const HomePage: React.FC<Props> = ({ weatherData, error }: Props): JSX.Element => {
  return error ? <>ERROR</> : <Home temp={`${((weatherData ?? 0) - 273.15).toFixed(1).toString()}`} />;
};

export default HomePage;
