import React, { useState, useEffect, useReducer } from "react";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_TODOS":
      return action.todos;
    case "ADD_TODO":
      return [
        ...state,
        {
          title: action.title,
          body: action.body,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.title !== action.title);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);
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

  const removeTodo = (title) => {
    dispatch({ type: "REMOVE_TODO", title });
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      dispatch({ type: "POPULATE_TODOS", todos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="content-container">
      <h1>Todo Mangement App</h1>
      {todos.map((todo) => (
        <div key={todo.title}>
          <h3>{todo.title}</h3>
          <p>{todo.body}</p>
          <button onClick={() => removeTodo(todo.title)}>Remove</button>
        </div>
      ))}
      <p>Add Todo</p>
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

export default TodoApp;
