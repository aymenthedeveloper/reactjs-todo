import React, { useState } from 'react'

export default function TodoInput(props) {
  const {addTodo, todoText, setTodoText} = props;
  return (
    <header>
      <input type="text" placeholder='enter a todo...' value={todoText} onChange={(e)=>{
        setTodoText(e.target.value)
      }} />
      <button onClick={()=>{
        addTodo(todoText);
        setTodoText('');
      }}>add</button>
    </header>
  )
}
