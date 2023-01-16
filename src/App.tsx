import { useRecoilValue } from "recoil";
import { todoState } from './store/Todo'
import Template from "./components/Template";
import TodoButton from "./components/Todo/TodoButton";
import TodoItem from "./components/Todo/TodoItem";
import TodoList from "./components/Todo/TodoList";
import DateForm from "./components/Date";

function App() {
   const todos = useRecoilValue(todoState)

   return (
      <Template>
         <DateForm />
         <TodoList>
            {todos.map((todo) => <TodoItem todo={todo}/>)}
         </TodoList>
         <TodoButton />
      </Template>
   );
}

export default App;
