import { AiOutlinePlus } from 'react-icons/ai';
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
