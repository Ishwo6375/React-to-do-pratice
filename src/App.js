import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
   <header>
     <h1 className='todo-heading'>Ish's Todo List</h1>
   
   </header>
     <Form todos={todos} setTodos={setTodos} setTodoInput={setTodoInput} todoInput={todoInput} /> 
     <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
