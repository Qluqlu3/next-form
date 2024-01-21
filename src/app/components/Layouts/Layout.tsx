import React from 'react';
import Menu from './Menu';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='flex flex-col gap-y-8 bg-gray-300 min-h-screen p-5'>
      <Menu />
      {children}
    </div>
  );
};
