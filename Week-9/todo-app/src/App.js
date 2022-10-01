import "./App.css";

import { v4 } from "uuid";
import { useState, useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: v4(), text: "React Assignment", completed: false },
    { id: v4(), text: "Meeting friend", completed: true },
    { id: v4(), text: "Practice DSA", completed: false },
    { id: v4(), text: "Workout", completed: true },
    { id: v4(), text: "Gardening", completed: false },
    { id: v4(), text: "Cleaning my room", completed: false },
  ]);

  const inputValue = useRef(null);

  function onItemClick(item) {
    let index = todoList.indexOf(item);
    todoList[index].completed = !todoList[index].completed;
    setTodoList([...todoList]);
  }

  function onItemAdd(e) {
    e.preventDefault();
    if (inputValue.current.value)
      todoList.push({
        id: v4(),
        text: inputValue.current.value,
        completed: false,
      });
    setTodoList([...todoList]);
    inputValue.current.value = "";
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>Todo App</h1>
      </div>
      <div className="inputBox">
        <form className="inputForm" action="" onSubmit={onItemAdd}>
          <input
            type="text"
            name="todoTask"
            placeholder="Add a task"
            ref={inputValue}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div className="todotasks">
        <h2>Todo tasks</h2>
        <ul>
          {todoList
            .filter((item) => !item.completed)
            .map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  className="checkItem"
                  onClick={() => onItemClick(item)}
                />
                <span>{item.text}</span>
              </li>
            ))}
        </ul>
      </div>

      <div className="completedTasks">
        <h2>Completed Tasks</h2>
        <ul>
          {todoList
            .filter((item) => item.completed)
            .map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  className="checkItem"
                  onClick={() => onItemClick(item)}
                />
                <span>{item.text}</span>
              </li>
            ))}
        </ul>
      </div>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
