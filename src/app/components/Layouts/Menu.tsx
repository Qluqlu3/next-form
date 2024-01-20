import React from 'react';
import { MdHome, MdComment, MdEqualizer, MdSettings } from '../Icon';
import { IconLink } from '../IconLink';

const Menu: React.FC = () => {
  return (
    <div className='flex flex-row gap-x-3 items-center'>
      <IconLink icon={<MdComment className='w-16 h-16' />} href='/setting'></IconLink>
      <IconLink icon={<MdEqualizer className='w-16 h-16' />} href='/setting'></IconLink>
      <IconLink icon={<MdSettings className='w-16 h-16' />} href='/setting'></IconLink>
      {/* <MdSettings className='w-16 h-16 p-2 hover:bg-green-500 rounded-2xl cursor-pointer' /> */}
      {/* <div className='w-16 h-16'> */}
      <IconLink icon={<MdHome className='w-16 h-16' />}></IconLink>
      {/* </div> */}
    </div>
  );
};

export default Menu;
