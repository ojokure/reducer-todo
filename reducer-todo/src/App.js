import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import reducer from "./Reducer/Reducer";
import { todoList } from "./Reducer/Reducer";

function App() {
  const [todo, dispatch] = useReducer(reducer, todoList);
  return (
    <div className="App">
      {todo.map(el => 
        <div> {el.item} </div> 
      )}
    </div>
  );
}

export default App;
