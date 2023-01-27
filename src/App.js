import React from "react";
import Header from "./components/Header.jsx";
import TodoItem from "./components/TodoItems";
import Button from "./components/Button.jsx";

import "./style.css";

const App = () => {
  return (
    <div className="todo-container">
      <Header title="Todoie App" />
      <TodoItem text="Eat" />
      <TodoItem text="Code" />
      <TodoItem text="Play" />
      <TodoItem text="Study" />
      <TodoItem text="Sleep" />
      <Button />
    </div>
  );
};

export default App;
