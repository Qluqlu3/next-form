/**
 * グローバルメニュー
 */
import React from 'react';
import { MdHome, MdComment, MdEqualizer, MdSettings } from '../components/Icon';
import { IconLink } from '../components/IconLink';

export const Menu: React.FC = () => {
  return (
    <div className='flex flex-row gap-x-3 items-center'>
      <IconLink icon={<MdHome className='w-12 h-12' />} href='/home'></IconLink>
      <IconLink icon={<MdComment className='w-12 h-12' />} href='/chat'></IconLink>
      <IconLink icon={<MdEqualizer className='w-12 h-12' />} href='/chart'></IconLink>
      <IconLink icon={<MdSettings className='w-12 h-12' />} href='/setting'></IconLink>
    </div>
  );
};
