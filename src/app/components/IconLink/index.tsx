/** アイコン付きリンク */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode } from 'react';

interface Props {
  href?: string;
  icon?: ReactElement;
  prefetch?: boolean;
  children?: ReactNode;
}

export const IconLink: React.FC<Props> = ({ icon, href = '/home', prefetch, children }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link
      href='/home'
      prefetch={prefetch}
      className={`rounded-xl cursor-pointer ${href === asPath ? 'bg-green-500' : 'hover:bg-green-100 '}`}
    >
      <div className='flex'>
        <div>{icon}</div>
        <div>{children}</div>
      </div>
    </Link>
  );
};
