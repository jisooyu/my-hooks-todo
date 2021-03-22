import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import TodoApp from "./components/TodoApp";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
