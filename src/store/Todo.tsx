import { atom } from 'recoil';

export const todoState = atom({
   key: 'todoState',
   default: [
      {
         content: 'Read an article',
         checked: true,
      },
   ],
});
