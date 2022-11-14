import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const ShowTodos = () => {
  const todoCtx = useContext(TodoContext);
  const removeTodo = (id) => {
    // console.log(id);
    todoCtx.dispatch({ type: "remove", payload: id });
  };

  return (
    <div>
      {todoCtx.state.map((todo) => {
        return (
          <div key={todo.todoId}>
            <h2>{todo.todo}</h2>
            <button onClick={() => removeTodo(todo.todoId)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTodos;
