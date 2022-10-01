import "./App.css";

function App() {
  const todoList = [
    { id: 1, text: "React Assignment", completed: false },
    { id: 2, text: "Meeting friend", completed: true },
    { id: 3, text: "Practice DSA", completed: false },
    { id: 4, text: "Workout", completed: true },
    { id: 5, text: "Gardening", completed: false },
    { id: 6, text: "Cleaning my room", completed: false },
  ];

  return (
    <div className="App">
      <div className="heading">
        <h1>Todo App</h1>
      </div>
      <div className="inputBox">
        <form className="inputForm" action="">
          <input type="text" name="todoTask" placeholder="Add a task" />
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
                <input type="checkbox" className="checkItem" />
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
                <input type="checkbox" className="checkItem" />
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
