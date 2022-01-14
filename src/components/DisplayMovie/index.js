import React from "react";

function DisplayMovie({ Title, Poster, Year, imdbID, getMovieInfo }) {
  return (
    <div className="movie" onClick={() => getMovieInfo(imdbID)}>
      <h3>{Title}</h3>
      <img alt={Title} src={Poster}></img>
      <p>Release Date: {Year}</p>

      <div>
        <></>
      </div>
    </div>
  );
}

export default DisplayMovie;
