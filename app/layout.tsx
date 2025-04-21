import type React from 'react';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { DashboardNav } from './dashboard/components/dashboard-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Darul Qurro - Pondok Pesantren Modern',
  description: 'Lorem ipsum dolor sit amet',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <DashboardNav />
        {children}
      </body>
    </html>
  );
}
