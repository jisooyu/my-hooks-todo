import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { title, body }]);
    setTitle("");
    setBody("");
  };

  const removeTodo = (title) => {
    setTodos(todos.filter((todo) => todo.title !== title));
  };

  useEffect(() => {
    const todosData = JSON.parse(localStorage.getItem("todos"));
    if (todosData) {
      setTodos(todosData);
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
