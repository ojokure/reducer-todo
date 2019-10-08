import React, { useReducer } from "react";
import reducer from "./Reducer/Reducer";
import { todoList } from "./Reducer/Reducer";

export default function TodoForm(props) {
  return (
    <div>
      <form>
        <input
          name="item"
          type="text"
          placeholder="add a todo"
          value={props.todo}
          onChange={props.onchange}
        />
        <button onClick={props.add}> Add to List </button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
}
