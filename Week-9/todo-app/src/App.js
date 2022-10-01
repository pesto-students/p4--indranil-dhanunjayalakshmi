import "./App.css";

function App() {
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
          <li>
            <input type="checkbox" className="checkItem" />
            <span>List item 1</span>
          </li>
        </ul>
      </div>

      <div className="completedTasks">
        <h2>Completed Tasks</h2>
        <ul>
          <li>
            <input type="checkbox" className="checkItem" />
            <span>List item 1</span>
          </li>
        </ul>
      </div>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
