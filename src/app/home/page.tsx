// import React, { useCallback, useState } from 'react';

// import { Checkbox } from '@/components/Form/Checkbox/Checkbox';
// import { CHECK_BOX_LIST } from '@/constants';
// import { Card } from '@/components/Card';
// import { Layout } from '@/app/layout';

// interface Props {
//   temp: string;
// }

// export const Home: React.FC<Props> = ({ temp }) => {
//   return (
//     <Layout>
//       <h1 className='text-5xl font-bold'>Home</h1>
//       <div className='flex gap-x-3 items-center'>
//         <div>気温：</div>
//         <span className='block font-semibold text-3xl text-red-600'>{temp}</span>
//         <span>°C</span>
//       </div>

//       <div className='flex w-full gap-5 flex-wrap'>
//         <div className='w-[200px] h-[200px]'>
//           <Card />
//         </div>
//         <div className='w-[200px] h-[200px]'>
//           <Card />
//         </div>
//         <div className='w-[200px] h-[200px]'>
//           <Card />
//         </div>
//         <div className='w-[200px] h-[200px]'>
//           <Card />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// import axios from 'axios';
// import { GetServerSideProps } from 'next';
import React from 'react';

import '../../app/globals.css';
// import Home from '../pages';

interface Props {
  weatherData?: number;
  error?: string;
}

// サーバーサイドでデータを取得する関数
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   try {
//     const response = await axios.get(
//       'https://samples.openweathermap.org/data/2.5/weather?q=Tokyo&appid=b6907d289e10d714a6e88b30761fae22',
//     );
//     const weatherData = response.data.main.temp;
//     if (response.status !== 200) {
//       throw new Error(`API request failed with status ${response.status}`);
//     }
//     return { props: { weatherData } };
//   } catch (error) {
//     console.error('Error fetching data:', error);

//     return {
//       props: {
//         error: 'Failed to fetch data',
//       },
//     };
//   }
// };

const Home: React.FC<Props> = ({ weatherData, error }: Props): JSX.Element => {
  return <>AAAAAA</>;
  // return error ? <>ERROR</> : <Home temp={`${((weatherData ?? 0) - 273.15).toFixed(1).toString()}`} />;
};

export default Home;
