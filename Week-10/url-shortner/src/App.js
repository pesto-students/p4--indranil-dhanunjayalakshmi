import "./App.css";
import { useState } from "react";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  const [page, setPage] = useState("Home");
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");

  function shortUrl(e, inputValue) {
    e.preventDefault();
    if (error) setError("");
    const url = `https://api.shrtco.de/v2/shorten?url=${inputValue.current.value}`;

    async function handler() {
      const res = await fetch(url);
      const data = await res.json();
      if (data.ok) {
        const urlsCopy = [...urls];
        urlsCopy.push({
          longUrl: inputValue.current.value,
          shortenUrl: data.result.short_link,
        });
        setUrls(urlsCopy);
        inputValue.current.value = "";
      } else {
        if (data.error_code === 1) {
          setError("URL shouldn't be empty. Please enter an URL");
        } else {
          setError("Please enter valid URL");
        }
      }
    }

    handler();
  }

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
      <div className="App">
        {page === "Home" ? (
          <Home urls={urls} shortUrl={shortUrl} error={error} />
        ) : (
          <Contact />
        )}
      </div>
      <footer className="App-footer">
        <div className="Footer-div">
          <h3>Features</h3>
          <ul>
            <li>Link Shortening</li>
            <li>Branded links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="Footer-div">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="Footer-div">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Our team</li>
            <li>Careers</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
