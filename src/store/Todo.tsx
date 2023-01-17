import { atom, selector } from 'recoil';

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


export const todoListFilterState = atom({
   key: 'todoListFilterState',
   default: 'Show All'
})

export const filteredTodoListState = selector({
   key: 'filteredTodoListState',
   get: ({get}) => {
      const filter = get(todoListFilterState);
      const list = get(todoState);

      switch (filter) {
         case 'Show Completed':
            return list.filter(item => item.checked);
         case 'Show Uncompleted':
            return list.filter(item => !item.checked);
         default:
            return list;
      }
   }
});