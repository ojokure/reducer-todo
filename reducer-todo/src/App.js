import React, { useReducer } from "react";
import "./App.css";
import reducer, { initialState } from "./Reducer/Reducer";
import { todoList } from "./Reducer/Reducer";
import TodoForm from "./TodoForm";
import {
  ON_INPUT_CHANGE,
  ADD_TO_LIST,
  TOGGLE_COMPLETE
} from "./Reducer/Reducer";

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const add = e => {
    e.preventDefault();
    dispatch({ type: ADD_TO_LIST });
  };

  const toggleComplete = id => e => {
    e.preventDefault();
    dispatch({
      type: TOGGLE_COMPLETE,
      payload: id
    });
  };
  const onChange = event => {
    dispatch({ type: ON_INPUT_CHANGE, payload: event.target.value });
  };

  return (
    <div className="App">
      {state.todos.map(el => (
        <div
          onClick={toggleComplete(el.id)}
          style={{
            fontFamily: "ABeeZee",
            color: el.completed ? "green" : "",
            fontWeight: el.completed ? "bold" : "",
            textDecoration: el.completed ? "lineThrough" : "none"
          }}
        >
          {el.item}
        </div>
      ))}
      <TodoForm todo={state.todo} add={add} onchange={onChange} />
    </div>
  );
}

export default Todo;
