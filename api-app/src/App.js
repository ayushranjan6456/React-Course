import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState([]);


  //Without async function using then


  // const fetchMovieHandler = () => {
  //   fetch("https://swapi.dev/api/films/", { method: "GET" })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const formattedMoviesList = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           releaseDate: movieData.release_date,
  //           openingText: movieData.opening_crawl,
  //         };
  //       });
  //       console.log(formattedMoviesList);
  //       setMoviesList(formattedMoviesList);
  //     })
  //     .catch((error) => console.log(error));
  // };


  //Using Async function
  async function fetchMovieHandler() {
    const response = await fetch("https://swapi.dev/api/films/", { method: "GET" });
    const data = await response.json();
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
