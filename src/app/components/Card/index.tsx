import Image from 'next/image';
import React from 'react';

export const Card: React.FC = () => {
  return (
    <div className='flex flex-col justify-between hover:cursor-pointer shadow-md hover:opacity-90 bg-gray-600 w-full h-full rounded-lg shadow-black'>
      <div className='bg-slate-500 w-full h-10 p-2 rounded-t-lg'>HEADER</div>
      <div className='bg-slate-400 w-full h-full p-3 '>
        <Image src='' alt='image' />
        Card
      </div>
      <div className='bg-slate-500 w-full h-10 p-2 rounded-b-lg'>FOOTER</div>
    </div>
  );
};
