/**
 * グローバルメニュー
 */
import React from 'react';
import { MdHome, MdComment, MdEqualizer, MdSettings } from '../Icon';
import { IconLink } from '../IconLink';

export const Menu: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-screen flex-col gap-y-3 items-center p-4 pt-6 border-0 bg-green-900'>
      <IconLink icon={<MdHome className='w-12 h-12 fill-gray-300' />} href='/home'></IconLink>
      <IconLink icon={<MdComment className='w-12 h-12 fill-gray-300' />} href='/chat'></IconLink>
      <IconLink icon={<MdEqualizer className='w-12 h-12 fill-gray-300' />} href='/chart'></IconLink>
      <IconLink icon={<MdSettings className='w-12 h-12 fill-gray-300' />} href='/setting'></IconLink>
    </div>
  );
};
