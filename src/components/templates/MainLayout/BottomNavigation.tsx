'use client';

import { usePathname, useRouter } from 'next/navigation';
import { HiOutlineChartPie, HiOutlineMegaphone } from 'react-icons/hi2';

import AddExpenseNav from '@/components/atoms/AddExpenseNav';

import { cn } from '@/lib/utils';

export const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0  w-lg h-18 grid grid-cols-3 bg-white dark:bg-black px-8 sm:px-0 pb-5 border-t pt-5 z-10 dark:border-zinc-600">
      <button onClick={() => router.push('/summary')}>
        <div className="flex justify-center items-center flex-col group cursor-pointer">
          <div
            className={cn(
              'flex items-center flex-col  justify-center',
              pathname === '/summary'
                ? 'text-black dark:text-white'
                : 'text-gray-500 dark:text-gray-400'
            )}
          >
            <HiOutlineChartPie className="h-6 w-6 group-hover:scale-125 transition-all " />
            <span className="text-sm ">Analytic</span>
          </div>
        </div>
      </button>

      <AddExpenseNav />

      <button onClick={() => router.push('/logs')}>
        <div className="flex justify-center items-center flex-col group cursor-pointer">
          <div
            className={cn(
              'flex items-center flex-col  justify-center ',
              pathname === '/logs'
                ? 'text-black dark:text-white'
                : 'text-gray-500 dark:text-gray-400'
            )}
          >
            <HiOutlineMegaphone className="h-6 w-6 group-hover:scale-125 transition-all" />
            <span className="text-sm">Change logs</span>
          </div>
        </div>
      </button>
    </div>
  );
};
