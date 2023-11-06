'use client';

const Location = () => {
  return (
    <div className='bg-bgPrimary font-primary flex h-[330px] w-[510px] flex-col items-center justify-center rounded-2xl drop-shadow-[--tw-drop-shadow-1]'>
      {/* Location */}
      <div className='text-contentPrimary text-4xl font-bold'>Athens</div>
      {/* Date, time */}
      <div className='mt-[29px] flex flex-col text-center'>
        <span className='text-contentPrimary text-8xl font-bold'>09:03</span>
        <span className='text-contentPrimary text-xl font-normal'>
          Thursday, 31 Aug
        </span>
      </div>
    </div>
  );
};

export default Location;
