/**
 * アイコン付きリンク
 */
import Link from 'next/link';
// import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode } from 'react';
// import { clsx } from 'clsx';

type Props = {
  href: string;
  icon: ReactElement;
  prefetch?: boolean;
  children?: ReactNode;
};

export const IconLink: React.FC<Props> = ({ icon, href = '/home', prefetch, children }: Props) => {
  // const { asPath } = useRouter();

  return (
    <Link
      href={href}
      prefetch={prefetch}
      // className={clsx(href === asPath ? 'bg-green-500' : 'hover:bg-green-100', 'rounded-xl cursor-pointer p-2')}
    >
      <div className='flex'>
        <div>{icon}</div>
        <div>{children}</div>
      </div>
    </Link>
  );
};
