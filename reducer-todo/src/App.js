import React, { useReducer } from "react";
import "./App.css";
import reducer from "./Reducer/Reducer";
import { todoList } from "./Reducer/Reducer";
import TodoForm from "./TodoForm";



function Todo() {
  const [todo, dispatch] = useReducer(reducer, todoList);
  return (
    <div className="App">
      {todo.map(el => (
        <div> {el.item} </div>
      ))}
      <TodoForm />
    </div>
  );
}

export default Todo;
