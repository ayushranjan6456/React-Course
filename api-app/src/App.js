import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/", {
      method: "GET",
    });
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
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && moviesList.length > 0 && (
          <MoviesList movies={moviesList} />
        )}
        {!isLoading && moviesList.length === 0 && (
          <p>No movies Found</p>
        )}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
