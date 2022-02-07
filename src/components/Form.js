import React from "react";
import '../App.css'

function Form({setTodoInput, todos, setTodos, todoInput}) {

    //here we can write javascript code and functin//
    const todoTextHandler = (e) => {
        // console.log(e.target.value);
        setTodoInput(e.target.value);

    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: todoInput, completed: false, id: Math.random() * 1000}
        ]);
        setTodoInput("");
    }
  return (
    <div>
      <form action="">
        <input value={todoInput} onChange={todoTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button">+</button>
        <div className="select">
          <select name="todos" class="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
