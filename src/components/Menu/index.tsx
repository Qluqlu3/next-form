/**
 * グローバルメニュー
 */
import React from 'react';
import { MdHome, MdComment, MdEqualizer, MdSettings } from '../Icon';
import { IconLink } from '../IconLink';

export const Menu: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-row gap-x-3 items-center'>
      <IconLink icon={<MdHome className='w-12 h-12' />} href='/home'></IconLink>
      <IconLink icon={<MdComment className='w-12 h-12' />} href='/chat'></IconLink>
      <IconLink icon={<MdEqualizer className='w-12 h-12' />} href='/chart'></IconLink>
      <IconLink icon={<MdSettings className='w-12 h-12' />} href='/setting'></IconLink>
    </div>
  );
};
