import { atom } from 'recoil';

export const todoState = atom({
   key: 'todoState',
   default: [
      {
         index: 0,
         content: '책 읽기',
         checked: true,
      },
      { index: 1, content: 'Recoil 개념 공부하기', checked: false },
   ],
});
