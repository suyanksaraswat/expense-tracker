'use client';

import { motion } from 'framer-motion';
import { BsArrowDown } from 'react-icons/bs';
import { FiRotateCcw } from 'react-icons/fi';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { addExpenseState } from 'src/recoil/atoms/addExpense';
import { selectTagState } from 'src/recoil/atoms/selectTag';

import Tag from '../Tag';

const AddExpense = () => {
  const [expenseModal, setExpenseModal] = useRecoilState(addExpenseState);
  const setSelectTag = useSetRecoilState(selectTagState);

  const handleSubmit = () => {
    setExpenseModal(false);
  };

  const closeExpenseModal = () => {
    setExpenseModal(false);
  };

  return (
    <>
      <motion.div
        initial={false}
        animate={expenseModal ? 'open' : 'closed'}
        variants={{
          open: { y: 0 },
          closed: { y: '100%' }
        }}
        className="fixed bottom-0 h-screen  w-full sm:w-lg bg-white dark:bg-black p-5 bg-opacity-90 backdrop-blur-sm "
      >
        <div
          className="w-full flex justify-center items-center h-screen flex-col gap-10"
          style={{
            height: '90vh'
          }}
        >
          <div className="flex">
            <div>
              <h1 className="text-center text-sm text-gray-400">
                Today at {new Date().toDateString()}
              </h1>
              <input
                className="border-b border-zinc-200 bg-transparent outline-none text-center text-5xl w-52 font-bold "
                placeholder="0"
                type="number"
                min={0}
                required
              />
            </div>
          </div>

          <BsArrowDown className="w-6 h-6 text-gray-400" />

          <div
            className="flex cursor-pointer hover:tracking-wider transition-all items-center gap-5"
            onClick={() => setSelectTag(true)}
          >
            <Tag tag={undefined} />
            <FiRotateCcw className="text-gray-400" />
          </div>

          <div className="flex gap-2">
            <button
              className=" bg-red-200 dark:bg-red-400 px-8  py-3 rounded-md hover:tracking-wider transition-all hover:shadow-md"
              onClick={closeExpenseModal}
            >
              Cancel
            </button>
            <button
              className="bg-black dark:bg-white text-white dark:text-black px-8  py-3 rounded-md hover:tracking-wider transition-all hover:shadow-md"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AddExpense;
