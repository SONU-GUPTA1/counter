import { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState(0);
  function inc() {
    setTodoItem(todoItem + 1);
  }
  function dec() {
    setTodoItem(todoItem - 1);
  }
  return (
    <div className="a">
      <button onClick={inc}>+</button>
      <h1>{todoItem}</h1>
      <button onClick={dec}>-</button>
    </div>
  );
}
export default App;
