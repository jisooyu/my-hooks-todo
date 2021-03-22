import React, { useEffect, useReducer } from "react";
import TodosContext from "../context/todos-context";
import todosReducer from "../reducers/todos";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);
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
      <h1>Todo Management App</h1>
      <TodosContext.Provider value={{ todos, dispatch }}>
        <TodoList />
        <AddTodoForm />
      </TodosContext.Provider>
    </div>
  );
};

export default TodoApp;
