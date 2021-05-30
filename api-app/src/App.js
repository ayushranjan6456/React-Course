import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  const fetchMovieHandler = () => {
    fetch("https://swapi.dev/api/films/", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const formattedMoviesList = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            releaseDate: movieData.release_date,
            openingText: movieData.opening_crawl,
          };
        });
        console.log(formattedMoviesList);
        setMoviesList(formattedMoviesList);
      })
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviesList} />
      </section>
    </React.Fragment>
  );
}

export default App;
