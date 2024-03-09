'use client';

import { motion } from 'framer-motion';
import { BsArrowLeftShort } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';
import { VscLoading } from 'react-icons/vsc';
import { useRecoilState } from 'recoil';
import { selectTagState } from 'src/recoil/atoms/selectTag';

const TagList = () => {
  const [selectTag, setSelectTag] = useRecoilState(selectTagState);

  const handleClose = () => {
    setSelectTag(false);
  };

  return (
    <>
      {selectTag && (
        <div className=" h-screen fixed top-0 left-0  w-full" onClick={handleClose}>
          <div className="h-screen w-lg mx-auto bg-white dark:bg-black bg-opacity-60 backdrop-blur-sm"></div>
        </div>
      )}

      <motion.div
        initial={false}
        animate={selectTag ? 'open' : 'closed'}
        variants={{
          open: { y: 0 },
          closed: { y: '100%' }
        }}
        className="fixed bottom-0 h-1/2 max-w-lg sm:w-lg w-full bg-white dark:bg-black p-5 border-t  rounded-t-3xl dark:border-zinc-600"
      >
        <h1 className="text-center mb-5 uppercase text-gray-400">Expenses</h1>
        <div className="w-full grid grid-cols-4 gap-y-5">
          <div className="rounded-full border w-14 h-14 mx-auto flex justify-center items-center cursor-pointer group hover:border-zinc-500 transition-all">
            <IoIosAdd className="h-8 w-8 text-gray-400 group-hover:text-zinc-500 group-hover:scale-125 transition-all" />
          </div>
          {[]?.map((tag: Tag, index: number) => {
            const name = tag.name.split(' ');

            return (
              <div className="flex flex-col items-center group cursor-pointer" key={index}>
                <span className="text-xl ">{name[0]}</span>
                <h1 className="text-sm group-hover:scale-125 transition-all dark:text-slate-100">
                  {name[1]}
                </h1>
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={false}
        animate={'closed'}
        variants={{
          open: { x: 0, opacity: 1 },
          closed: { x: '-200%', opacity: 0 }
        }}
        className="fixed bottom-0 h-2/3 max-w-lg sm:w-lg w-full bg-white dark:bg-black p-5 border-t dark:border-zinc-600"
      >
        <div className="border-b dark:border-zinc-600">
          <BsArrowLeftShort className="w-8 h-8" />
        </div>
        <h1 className="text-center mb-5 uppercase text-gray-400 pt-2">New Tag</h1>

        <form className="flex flex-col justify-center items-center gap-8" onSubmit={() => {}}>
          <input
            className="border-b text-center outline-none bg-transparent dark:border-zinc-600"
            placeholder="🏠 (sticker)"
            name="sticker"
            required
          />
          <input
            className="border-b text-center outline-none bg-transparent dark:border-zinc-600"
            placeholder="rent (name)"
            name="name"
            required
          />
          <button
            className={
              'bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-md flex items-center gap-2'
            }
            onClick={handleClose}
          >
            <VscLoading className="animate-spin" />
            Confirm
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default TagList;
