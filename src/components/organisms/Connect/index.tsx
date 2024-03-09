import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoReturnUpBack } from 'react-icons/io5';

const Connect = () => (
  <div className="p-5 pt-10 flex flex-col dark:text-slate-100">
    <div className="flex border-b">
      <Link href="/">
        <IoReturnUpBack className="h-8 w-8 hover:scale-110 transition-all" />
      </Link>
    </div>

    <div>
      <h1 className="font-black text-3xl pb-8 pt-8">Connect with me!</h1>

      <div className="flex gap-5">
        <Link href={'https://github.com/suyanksaraswat'} target="_blank">
          <FaGithub size={36} />
        </Link>

        <Link href={'https://www.linkedin.com/in/suyank-saraswat-347449129/'} target="_blank">
          <FaLinkedin size={36} />
        </Link>
      </div>
    </div>
  </div>
);

export default Connect;
