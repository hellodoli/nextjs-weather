'use client';
import Image from 'next/image';

const WeatherDetail = () => {
  return (
    <div className='bg-bgPrimary text-contentPrimary font-primary ml-[55px] flex h-[330px] flex-1 flex-col rounded-2xl p-4 drop-shadow-[--tw-drop-shadow-1]'>
      {/* Main detail */}
      <div className='flex h-full max-w-[204px] flex-col justify-between'>
        <div className='bg-linear-radient-primary font-primary'>
          <div className='text-[80px] font-bold leading-[normal]'>
            <span>24°C</span>
          </div>
          <div className='flex items-center'>
            <span className='mr-1 text-xl font-semibold'>Feels like:</span>
            <span className='text-[32px] font-semibold'>22°C</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='mb-2 flex items-center'>
            <Image
              src='images/weather/sunrise.svg'
              alt='sunrise'
              width={48}
              height={48}
            />
            <div className='pl-3'>
              <div className='text-xl font-bold'>Sunrise</div>
              <div className='text-base font-semibold'>06:37 AM</div>
            </div>
          </div>
          <div className='flex items-center'>
            <Image
              src='images/weather/sunset.svg'
              alt='sunset'
              width={48}
              height={48}
            />
            <div className='pl-3'>
              <div className='text-xl font-bold'>Sunset</div>
              <div className='text-base font-semibold'>20:37 AM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
