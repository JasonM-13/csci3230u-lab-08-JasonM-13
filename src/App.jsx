import TodoList from "./TodoList.jsx";
import {useState} from 'react';
// Step 3: create AddTodoForm.jsx, then import and use it below.
import AddTodoForm from "./AddTodoForm.jsx";

const INITIAL_TODOS = [
  { id: 1, text: "Read the lab README", done: true },
  { id: 2, text: "Build the to-do list", done: false },
  { id: 3, text: "Add one of your own", done: false },
];

export default function App() {
  // Right now the list is STATIC. Your job is to make it live.
  //
  // Step 1: hold the todos in state instead of a constant:
  //   const [todos, setTodos] = useState(INITIAL_TODOS)

  //const todos = INITIAL_TODOS; 
  const [todos, setTodos] = useState(INITIAL_TODOS)

  const [filter, setFilter] = useState("all")
  const visible = todos.filter((t) => filter === "active" ? !t.done : filter === "completed" ? t.done : true,);

  // Step 2: write these handlers. They must NOT mutate state - build a NEW
  // array each time (spread / map / filter) and pass it to setTodos:
  //   addTodo(text)   → append { id, text, done: false }  (give it a fresh id)
  //   toggleTodo(id)  → flip `done` on the matching todo
  //   deleteTodo(id)  → drop the matching todo
  // Then pass them as props to the components below.

  //Add todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    }
    setTodos([...todos, newTodo]);
  };

  //Toggle todo 
  const toggleTodo = (id) => {
    const selTodo = todos.map((t) => {
      if(t.id === id){ 
        return{ 
          ...t, 
          done: !t.done
        };
      }
      return t;
    });
    setTodos(selTodo);
  };
  /*use .map to find matching id
  * if current id matchines target id
  * return copy of todo object with oppposite done value
  * selTodo contains the new array and is rendered 
  */

  //Delete todo
  const deleteTodo = (id) => {
    const updateTodo = todos.filter((t) => {
      return t.id !== id;
    });
    setTodos(updateTodo);
  }
  /*use .filter to find matching id and create an array for mathcing id
  * if current id  does match target id
  * return object with oppposite id value
  * use !== because using === would keep matching id and remove the nonmatching ids (only want to remove matchign)
  * updateTodo contrains teh new array and is rendered 
  */

  //Count done
  const done = todos.filter((t) => {
    return t.done;
  }).length;
  const total = todos.length;

  return (
    <main className="app">
      <h1>My To-Dos</h1>
      {/* Step 3: <AddTodoForm onAdd={addTodo} /> */}
      <AddTodoForm onAdd={addTodo}/>

      <button onClick={() => setFilter("all")}>All</button> 
      <button onClick={() => setFilter("active")}>Active</button> 
      <button onClick={() => setFilter("completed")}>Completed</button> 
      
      <TodoList todos={visible} onToggle={toggleTodo} onDelete={deleteTodo}/>
      {/* Step 4: a derived count - "{done} of {total} done" computed from todos */}
      <p>{done} of {total} done</p>
    </main>
  );
}
