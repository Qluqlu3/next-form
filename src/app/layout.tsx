import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Menu } from '@/components/Menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={`${inter.className} grid grid-flow-col bg-slate-200`}>
        <Menu />
        <div>{children}</div>
      </body>
    </html>
  );
}
