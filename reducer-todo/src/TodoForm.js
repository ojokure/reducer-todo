import React, { useReducer } from "react";

export default function TodoForm() {
  return (
    <div>
      <form>
        <input name="item" type="text" placeholder="add a todo"></input>
      </form>
      <button> Add to List </button>
    </div>
  );
}
