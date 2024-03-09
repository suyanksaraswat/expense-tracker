import { atom } from 'recoil';

export const selectTagState = atom<boolean>({
  key: 'selectTag',
  default: false
});
