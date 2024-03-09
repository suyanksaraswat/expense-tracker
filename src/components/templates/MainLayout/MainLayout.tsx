import { ReactNode } from 'react';

import { BottomNavigation } from './BottomNavigation';
import { Header } from './Header';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex justify-center relative">
      <div className="bg-white dark:bg-black sm:max-w-lg mx-auto w-full flex flex-col">
        <Header />

        <div className="grow-[1] pb-[89px]">{children}</div>

        <BottomNavigation />
      </div>
    </div>
  );
};
