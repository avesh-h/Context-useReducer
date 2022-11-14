import { useState, createContext, useReducer } from "react";

const TodoContext = createContext();

const reducerFunction = (currState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "add":
      return [...currState, payload];
    case "remove":
      return currState.filter((todo) => todo.todoId !== payload);
  }
};
export const TodoContextProvider = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [todo, setTodo] = useState({});

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        state,
        dispatch,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
