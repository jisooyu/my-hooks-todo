import React, { useState, useContext } from "react";
import TodosContext from "../context/todos-context";

const AddTodoForm = () => {
  const { dispatch } = useContext(TodosContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      title,
      body,
    });
    setTitle("");
    setBody("");
  };
  return (
    <div>
      <h1>Add Todo</h1>
      <form className="form" onSubmit={(e) => addTodo(e)}>
        <input
          className="text-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="textarea"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button className="button">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
