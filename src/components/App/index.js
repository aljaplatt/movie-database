import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { nanoid } from "nanoid";
import "./App.css";

import DisplayMovie from "../DisplayMovie";

function App() {
  const [data, setData] = useState(false);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  // get query calls our set query fn in the state above
  function getQuery(query) {
    setQuery(query);
  }

  // when the user
  function handleSubmit(e) {
    e.preventDefault();
    getQuery(input);
  }
  // set input get user input
  function handleChange(e) {
    setInput(e.target.value);
  }

  // making th initial fetch request
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${query}&apikey=776e707`
        );
        //
        const fetchData = await response.json();
        setData(fetchData.Search);
      } catch (error) {}
    }
    // which is being conditionally called as long as the query state is not empty
    if (query !== "") getData();
  }, [query]);

  return data ? (
    <div className="movieList">
      <Nav />
      <Form getQuery={getQuery} />
      {data.map(({ Title, Poster, Year, imdbID }) => {
        return (
          <DisplayMovie
            Title={Title}
            alt={Title}
            Poster={Poster}
            Year={Year}
            imdbID={imdbID}
            key={nanoid()}
          />
        );
      })}
    </div>
  ) : (
    <></>
  );
}
export default App;
