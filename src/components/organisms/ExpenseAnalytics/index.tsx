import ExpenseChart from '@/components/molecules/ExpenseChart';
import TotalExpense from '@/components/molecules/TotalExpense';

const ExpenseAnalytics = () => (
  <div className="p-5 pt-14 flex flex-col">
    <TotalExpense variant="left" />
    <ExpenseChart />
    {/* <ListOfSpent expenses={data.data} /> */}
  </div>
);

export default ExpenseAnalytics;
