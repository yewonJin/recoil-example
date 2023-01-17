import { useSetRecoilState } from 'recoil';
import { todoListFilterState } from '../../store/Todo';


export default function TodoTag() {
   const setFilter = useSetRecoilState(todoListFilterState);

   const updateFilter = (value: string) => {
      setFilter(value);
   };

   return (
      <ul className="w-full h-[30px] mt-3 flex gap-2 text-white">
         <li
            onClick={() => updateFilter('Show All')}
            className="h-[30px] px-3 rounded-2xl bg-neutral-600 flex items-center justify-center hover:cursor-pointer hover:bg-neutral-500 duration-150"
         >
            All
         </li>
         <li
            onClick={() => updateFilter('Show Completed')}
            className="h-[30px] px-3 rounded-2xl bg-blue-600 flex items-center justify-center hover:cursor-pointer hover:bg-blue-500 duration-150"
         >
            Completed
         </li>
         <li
            onClick={() => updateFilter('Show Uncompleted')}
            className="h-[30px] px-3 rounded-2xl bg-green-600 flex items-center justify-center hover:cursor-pointer hover:bg-green-500 duration-150"
         >
            Uncompleted
         </li>
      </ul>
   );
}
