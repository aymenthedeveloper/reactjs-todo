import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('');

  function addTodo(todoText){
    const newTodos = [...todos, todoText];
    presistData(newTodos)
    setTodos(newTodos);
  }
  
  function deleteTodo(index){
    const newTodos = todos.filter((todo, i) =>{
      return i != index
    })
    presistData(newTodos)
    setTodos(newTodos);
  }

  function editTodo(index){
    const todo = todos[index];
    setTodoText(todo)
    deleteTodo(index)
  }

  function presistData(newTodos){
    localStorage.setItem('localTodos', JSON.stringify({todos: newTodos}))
  }

  useEffect(()=>{
    let localTodos = localStorage.getItem('localTodos');
    if (localTodos){
      localTodos = JSON.parse(localTodos);
      setTodos(localTodos.todos)
      
    }
    
  }, [])

  return (
    <>
      <TodoInput addTodo={addTodo} todoText={todoText} setTodoText={setTodoText} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </>
  )
}

export default App
