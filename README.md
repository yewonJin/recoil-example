# recoil-example 

리액트 상태 관리 라이브러리 Recoil 공부 및 예제(Todo App)

<img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/>  <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat&logo=TailwindCSS&logoColor=white"/>


https://user-images.githubusercontent.com/102349522/212889390-0c2acef9-422c-4fb4-bd41-a4d708e6347d.mp4


### react의 한계
React 자체에 내장된 상태 관리 기능을 사용하는 것이 제일 좋지만 컴포넌트의 상태는 

공통된 상위요소로부터 공유 되기 때문에 state가 존재하는 곳부터 state가 사용되는 곳까지의 코드 분할을 어렵게 한다.

## Recoil 개념
Recoil을 사용하면 atoms에서 selectors를 거쳐 React 컴포넌트로 내려가는 data-flow graph를 만들 수 있다.

### Atom
Atom는 상태의 단위이며, 업데이트와 구독이 가능하다.

Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다. atom의 값을 읽는 컴포넌트는 암묵적으로 atom을 구독한다. 그래서 atom이 업데이트되면 각각의 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링 된다.

```js
  import { atom } from 'recoil';

  const todoState = atom({
    key: 'todoState',
    default: [
      {
         index: 0,
         content: '책 읽기',
         checked: true,
      },
      { 
        index: 1, 
        content: 'Recoil 개념 공부하기',
        checked: false 
      },
   ],
```

Atoms는 디버깅, 지속성 및 모든 atoms의 map을 볼 수 있는 특정 고급 API에 사용되는 고유한 key가 필요하다.

컴포넌트에서 atom을 읽고 쓰려면 useRecoilState라는 훅을 사용한다.

```js
import { useRecoilState } from 'recoil';
import { todoState } from '../../store/Todo';

export default function TodoButton() {
   const [todoList, setTodoList] = useRecoilState(todoState);

   return (
      <span
         className="w-20 h-20 absolute flex justify-center items-center -bottom-10 rounded-full bg-rose-900 text-white hover:cursor-pointer hover:bg-rose-700 duration-150"
         onClick={() =>{
            if(todoList[todoList.length-1].content === '') {
               console.log('먼저 입력하시오')
               return;
            }

            setTodoList(state => [...state, { index: (todoList.length > 0 ? todoList[todoList.length-1].index + 1 : 0), content: '', checked: false }]);            
         }}         
      >
         <AiOutlinePlus className="text-3xl" />
      </span>
   );
}
```

Recoil은 또한 getter/setter 함수를 제공한다.

```js
  const todoList = useRecoilValue(todoState); 
  // Recoil 상태의 값을 반환
  
  const setTodoList = useSetRecoilState(todoState);
  // Recoil 상태의 값을 업데이트하기 위한 setter 함수
```

### Selectors

Selector는 파생된 상태(derived state)의 일부를 나타낸다.

파생된 상태는 다른 데이터에 의존하는 동적인 데이터를 만들 수 있기 때문에 강력한 개념이다.

```js
  const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All'
  })
  
  const filteredTodoListState = selector({
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
```

filteredTodoListState는 내부적으로 2개의 의존성 todoListFilterState와 todoListState를 추적한다. 그래서 둘 중 하나라도 변하면 filteredTodoListState는 재실행된다.






