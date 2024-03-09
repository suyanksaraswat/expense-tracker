import '@/styles/globals.css';

import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { ReactNode } from 'react';

import { MainProvider } from '@/components/providers/MainProvider';
import { MainLayout } from '@/components/templates/MainLayout';

import { cn } from '@/lib/utils';

// const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description:
    '🚀 Track spending effortlessly with intuitive expense tracker. Gain insights through comprehensive summaries and analytics for better financial management.'
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={cn(nunito.variable, 'font-primary')} suppressHydrationWarning>
        <MainProvider>
          <MainLayout>{children}</MainLayout>
        </MainProvider>
      </body>
    </html>
  );
};

export default RootLayout;
