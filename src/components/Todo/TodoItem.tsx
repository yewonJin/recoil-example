import { useRecoilState } from 'recoil';
import { todoState } from '../../store/Todo';
import { inputState } from '../../store/Input';
import { AiOutlineDelete } from 'react-icons/ai';

// 타입 선언
type TodoType = { index: number; content: string; checked: boolean };

type ReplaceItemType = (arr: TodoType[], index: number, newValue: TodoType) => TodoType[];

type RemoveItemType = (arr: TodoType[], index: number) => TodoType[];

const replaceItemAtIndex: ReplaceItemType = (arr, index, newValue) => {
   return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex: RemoveItemType = (arr, index) => {
   return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default function TodoItem({ todo }: { todo: TodoType }) {
   const [todoList, setTodoList] = useRecoilState(todoState);

   const [input, setInput] = useRecoilState(inputState);

   const toggleItem = () => {
      const newList = replaceItemAtIndex(todoList, todo.index, { ...todo, checked: !todo.checked });

      setTodoList(newList);
   };

   const changeItem = () => {
      const newList = replaceItemAtIndex(todoList, todo.index, { ...todo, content: input });

      setTodoList(newList);
   }

   const removeItem = () => {
      const newList = removeItemAtIndex(todoList, todo.index);

      const nnewList = []

      for(let i = 0; i < newList.length; i++) {
         nnewList.push({ ...newList[i], index: i});
      }
      
      setInput('');
      setTodoList(nnewList);
   };

   if(!todo.content) {
      return (
         <li className="h-[60px] px-4 flex justify-between items-center border-[1px] shadow-md min-h-[60px] scroll">
            <div className="flex gap-4">
               <input
                  type="checkbox"
                  className="w-[28px] h-[28px] rounded-full"
                  checked={todo.checked}
                  onChange={toggleItem}
               />
               <form
                  onSubmit={e => {
                     e.preventDefault();
                     changeItem();
                     setInput('');
                  }}
               >
                  <input
                     placeholder="입력하시오..."
                     className="border-b-2 outline-none"
                     onChange={e => {
                        setInput(e.target.value);
                     }}
                     value={input}
                  />
               </form>
            </div>
            <span onClick={removeItem}>
               <AiOutlineDelete className="text-2xl hover:duration-150 hover:text-rose-900 hover:scale-105 hover:cursor-pointer" />
            </span>
         </li>
      );
   }

   return (
      <li className="h-[60px] px-4 flex justify-between items-center border-[1px] shadow-md min-h-[60px]">
         <div className="flex gap-4">
            <input
               type="checkbox"
               className="w-[28px] h-[28px] rounded-full"
               checked={todo.checked}
               onChange={toggleItem}
            />
            <p
               style={{
                  color: `${todo.checked ? '#aaaaaa' : ''}`,
                  textDecoration: `${todo.checked ? 'line-through' : ''}`,
               }}
            >
               {todo.content}
            </p>
         </div>
         <span onClick={removeItem}>
            <AiOutlineDelete className="text-2xl hover:duration-150 hover:text-rose-900 hover:scale-105 hover:cursor-pointer" />
         </span>
      </li>
   );
}
