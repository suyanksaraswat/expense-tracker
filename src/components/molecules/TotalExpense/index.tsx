import ChangeExpense from '../ChangeExpense';

type Props = {
  variant?: 'left' | 'ceter';
};

const TotalExpense = ({ variant }: Props) =>
  variant === 'left' ? (
    <div>
      <h1 className="text-5xl font-semibold mb-2 text-red-500">
        {'$ -'}
        2131321
      </h1>
      <div className="flex gap-2 items-center">
        <span className="text-gray-500 dark:text-gray-400">Total spent this month</span>
        <ChangeExpense />
      </div>
    </div>
  ) : (
    <div className="h-[40vh] flex flex-col justify-center items-center">
      <h1 className="text-center text-gray-500 dark:text-gray-400">Spent this month</h1>
      <div className="flex justify-center mt-5 text-red-500">
        <h1 className="text-4xl  font-bold">{'$ -'}</h1>
        <h1 className="text-center text-6xl">21312312</h1>
        <h1 className="text-center  text-4xl">.22</h1>
      </div>
    </div>
  );

export default TotalExpense;
