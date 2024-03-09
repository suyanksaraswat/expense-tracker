import { BiDownArrowAlt } from 'react-icons/bi';

const ChangeExpense = () => (
  <div className="flex items-center gap-2">
    <div className="h-5 w-5 rounded-full bg-green-200 grid place-content-center">
      <BiDownArrowAlt className="text-green-500" />
    </div>

    <span className={`'text-red-500'`}>11.23%</span>
  </div>
);

export default ChangeExpense;
