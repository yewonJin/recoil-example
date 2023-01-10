import { useRecoilValue } from "recoil";
import { todoState } from './store/Todo'
import Date from "./components/Date";
import Template from "./components/Template";
import TodoButton from "./components/Todo/TodoButton";
import TodoItem from "./components/Todo/TodoItem";
import TodoList from "./components/Todo/TodoList";

function App() {
   const todos = useRecoilValue(todoState)

   return (
      <Template>
         <Date />
         <TodoList>
            {todos.map((todo) => <TodoItem todo={todo}/>)}
         </TodoList>
         <TodoButton />
      </Template>
   );
}

export default App;
