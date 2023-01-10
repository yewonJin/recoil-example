import { AiOutlinePlus } from 'react-icons/ai';
import { useSetRecoilState } from 'recoil';
import { todoState } from '../../store/Todo';

export default function TodoButton() {
   const setTodoState = useSetRecoilState(todoState);

   return (
      <span
         className="w-20 h-20 absolute flex justify-center items-center -bottom-10 rounded-full bg-rose-900 text-white hover:cursor-pointer hover:bg-rose-700 duration-150"
         onClick={() =>{
            setTodoState(state => [...state, { content: 'hi', checked: false }]);            
         }}
      >
         <AiOutlinePlus className="text-3xl" />
      </span>
   );
}
