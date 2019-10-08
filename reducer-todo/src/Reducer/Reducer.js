import React from "react";

export const ADD_TO_LIST = "ADD_TO_LIST";
export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";

export const todoList = [
  { item: "You Dont Know JS", completed: false, id: new Date() },
  { item: "Front End Masters", completed: false, id: new Date() },
  { item: "Redux", completed: false, id: new Date() }
];

export const initialState = {
  todos: todoList,
  todo: ""
};

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: state.todo,
            completed: false,
            id: new Date()
          }
        ],
        todo: ""
      };
    case ON_INPUT_CHANGE:
      return { ...state, todo: action.payload };
    default:
      return state;
  }
}
