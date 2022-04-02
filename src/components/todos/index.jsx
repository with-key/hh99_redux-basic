import React from "react";
import { Link } from "react-router-dom";
import TodoList from "./TodoList";
import TodoForm from "./TodosForm";

const Todos = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Todos;
