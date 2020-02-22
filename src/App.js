import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [comic, setComic] = useState(null);

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json")
      .then(res => setComic(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log("comic", comic);

  if (!comic) {
    return <h1 className="app">Loading...</h1>;
  }

  return (
    <div className="app">
      <h1>{comic.title}</h1>
      <img src={comic.img} />
      <p>{comic.alt}</p>
    </div>
  );
}

export default App;
