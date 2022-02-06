import React from "react";
import '../App.css'

function Form() {
  return (
    <div>
      <form action="">
        <input type="text" className="todo-input" />
        <button className="todo-button">+</button>
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
