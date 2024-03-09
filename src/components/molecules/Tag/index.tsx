import { BsTags } from 'react-icons/bs';

const Tag = ({ tag }: { tag: Tag | undefined }) => {
  if (tag) {
    const name = tag?.name.split(' ');

    return (
      <div className="flex gap-5 text-xl items-center">
        <span>{name[0]}</span>
        <h1>{name[1]}</h1>
      </div>
    );
  }

  return (
    <div className="flex gap-5 text-xl items-center text-gray-400">
      <BsTags />
      <h1>select your tag</h1>
    </div>
  );
};

export default Tag;
