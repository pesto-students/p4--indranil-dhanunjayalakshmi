import "./App.css";
import { useState } from "react";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="Container">
      <header className="App-header">
        <nav className="App-navigation">
          <button
            onClick={() => {
              setPage("Home");
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              setPage("Contact");
            }}
          >
            Contact
          </button>
        </nav>
      </header>
      <div className="App">{page === "Home" ? <Home /> : <Contact />}</div>
    </div>
  );
}

export default App;
