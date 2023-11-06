'use client';
import * as React from 'react';

import ToggleDarkLight from '@/components/ToggleDarkLight';

import Location from './components/Location';
import WeatherDetail from './components/WeatherDetail';

function Weather() {
  return (
    <main>
      <section>
        <div className='layout min-h-screen py-20'>
          <ToggleDarkLight />
          <div className='flex max-h-[330px] min-h-[330px] items-center'>
            <Location />
            <WeatherDetail />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Weather;
