import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm() {
  const todoCtx = useContext(TodoContext);

  const changeHandler = (e) => {
    todoCtx.setTodo(e.target.value);
  };
  const addTodos = (e) => {
    e.preventDefault();
    const todoObj = {
      todo: todoCtx.todo,
      todoId: new Date().toISOString(),
    };
    todoCtx.dispatch({ type: "add", payload: todoObj });
  };
  return (
    <form onSubmit={addTodos}>
      <label>Add Task</label>
      <input type="text" onChange={changeHandler} />
      <button type="submit">add Task</button>
    </form>
  );
}

export default TodoForm;
