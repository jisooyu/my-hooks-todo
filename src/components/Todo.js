import React, { useContext } from "react";
import TodosContext from "../context/todos-context";

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_TODO",
            title: todo.title,
          })
        }
      >
        Remove
      </button>
    </div>
  );
};

export default Todo;
