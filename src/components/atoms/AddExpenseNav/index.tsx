'use client';

import { HiOutlinePlus } from 'react-icons/hi2';

type Props = {
  onClick: () => void;
};

const AddExpenseNav = ({ onClick }: Props) => {
  return (
    <button
      className="flex justify-center items-center flex-col group cursor-pointer"
      onClick={onClick}
    >
      <div className="h-12 w-12 bg-yellow-200 group-hover:bg-yellow-300 rounded-full grid place-content-center shadow-sm transition-all groupgroup-hover:hover:text-black dark:text-black dark:bg-yellow-300">
        <HiOutlinePlus className="h-8 w-8 hover:scale-125 transition-all " />
      </div>
    </button>
  );
};

export default AddExpenseNav;
