/**
 * アイコン付きリンク
 */
'use client';

import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  icon: ReactElement;
  prefetch?: boolean;
  children?: ReactNode;
};

export const IconLink: React.FC<Props> = ({ icon, href = '/home', prefetch, children }: Props) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={clsx(href === path ? 'bg-green-500' : 'hover:bg-green-100', 'rounded-xl cursor-pointer p-2')}
    >
      <div className='flex'>
        <div>{icon}</div>
        <div>{children}</div>
      </div>
    </Link>
  );
};
