import { atom } from 'recoil';

export const addExpenseState = atom<boolean>({
  key: 'addExpense',
  default: false
});
