import React, { useContext } from "react";
import Todo from "./Todo";
import TodosContext from "../context/todos-context";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  return todos.map((todo) => <Todo key={todo.title} todo={todo} />);
};

export default TodoList;
