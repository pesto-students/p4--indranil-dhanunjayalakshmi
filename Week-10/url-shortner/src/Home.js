import "./Home.css";
import { useRef } from "react";

function Home({ urls, shortUrl, error }) {
  const inputValue = useRef(null);

  return (
    <div className="Home-section">
      <div className="Home-heading">
        <h1>More than just shorter Links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
      </div>
      <div className="Home-input-box">
        <form
          className="Home-input-form"
          action=""
          onSubmit={(e) => shortUrl(e, inputValue)}
        >
          <input
            type="text"
            name="shortUrl"
            placeholder="Shorten a link here"
            ref={inputValue}
          />
          <button type="submit">Shorten it</button>
        </form>
        <div className="Error-mesg">{error && <p>{error}</p>}</div>
      </div>
      <div className="Home-short-url">
        {urls?.length ? (
          <table className="Short-url-list">
            <tr>
              <th>Original URL</th>
              <th>Shortened URL</th>
              <th></th>
            </tr>
            {urls?.map((el) => (
              <tr>
                <td>{el.longUrl}</td>
                <td>{el.shortenUrl}</td>
                <td className="Copy-button">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(el.shortenUrl);
                    }}
                  >
                    Copy
                  </button>
                </td>
              </tr>
            ))}
          </table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home;
