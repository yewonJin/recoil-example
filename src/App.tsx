import { useRecoilValue } from "recoil";
import { filteredTodoListState } from './store/Todo'
import Template from "./components/Template";
import TodoButton from "./components/Todo/TodoButton";
import TodoItem from "./components/Todo/TodoItem";
import TodoList from "./components/Todo/TodoList";
import DateForm from "./components/Date";
import TodoTag from "./components/Todo/TodoTag";

function App() {
   const todos = useRecoilValue(filteredTodoListState)

   return (
      <Template>
         <DateForm />     
         <TodoTag />    
         <TodoList>
            {todos.map((todo) => <TodoItem todo={todo}/>)}
         </TodoList>
         <TodoButton />
      </Template>
   );
}

export default App;
