import "./Home.css";
function Home() {
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
        <form className="Home-input-form" action="">
          <input
            type="text"
            name="shortUrl"
            placeholder="Shorten a link here"
          />
          <button type="submit">Shorten it</button>
        </form>
      </div>
      <div className="Home-short-url">
        <table className="Short-url-list">
          <tr>
            <th>Original URL</th>
            <th>Shortened URL</th>
            <th></th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Home;
