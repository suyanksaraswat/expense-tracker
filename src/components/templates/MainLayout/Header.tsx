'use client';

import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { HiOutlineMoon, HiOutlineArrowRightOnRectangle, HiOutlineSun } from 'react-icons/hi2';

export const Header = () => {
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();

  return (
    <div className="p-5 flex justify-between pt-12">
      {theme === 'dark' ? (
        <HiOutlineSun
          className="h-5 w-5 hover:scale-110 transition-all"
          onClick={() => {
            setTheme('light');
          }}
        />
      ) : (
        <HiOutlineMoon
          className="h-5 w-5 hover:scale-110 transition-all"
          onClick={() => {
            setTheme('dark');
          }}
        />
      )}

      <h1 className="font-bold uppercase">{pathname.split('/')[1] || 'Expenses'}</h1>

      <HiOutlineArrowRightOnRectangle className="h-5 w-5 hover:scale-110 transition-all" />
    </div>
  );
};
