import React from 'react';

import { Home } from './';

export const getWeatherData = async () => {
  try {
    const response = await fetch(
      'https://samples.openweathermap.org/data/2.5/weather?q=Tokyo&appid=b6907d289e10d714a6e88b30761fae22',
      { cache: 'no-store' },
    ).then((response) => response.json());

    const temp = response.main.temp;
    // console.log(response);
    if (response.cod !== 200) {
      throw new Error(`API request failed with status ${response.cod}`);
    }
    return { temp };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      error: 'Failed to fetch data',
    };
  }
};

export default async function Page() {
  const weatherData = await getWeatherData();

  return weatherData.error ? <>ERROR</> : <Home temp={`${((weatherData.temp ?? 0) - 273.15).toFixed(1).toString()}`} />;
}
