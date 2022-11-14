import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import ShowTodos from "./components/ShowTodos";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <ShowTodos />
    </div>
  );
}

export default App;
