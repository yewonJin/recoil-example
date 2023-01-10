interface TodoType {
   content: string,
   checked: boolean
}

export default function TodoItem({todo}: {todo: TodoType}) {
    return (
       <li className="h-[70px] px-4 flex gap-4 items-center border-[1px] shadow-md">
          <input type="checkbox" className="w-6 h-6 rounded-full" />
          <p>{todo.content}</p>
       </li>
    );
}