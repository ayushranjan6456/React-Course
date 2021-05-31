import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from './components/AddMovie';
import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
  const fetchMovieHandler = useCallback(async () => {
    //Can be done w/o useCallback also, but we use this so that the function is saved an reevaluated whenever the dependencies change
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://react-http-9a06a-default-rtdb.firebaseio.com/movies.json", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Something Went Wrong. Error Code ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      const loadedMovies = [];
      
      for (const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText
        })
      }
      // const formattedMoviesList = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     releaseDate: movieData.release_date,
      //     openingText: movieData.opening_crawl,
      //   };
      // });
      // console.log(formattedMoviesList);
      setMoviesList(loadedMovies);
      // setIsLoading(false);
    } catch (error) {
      setError(error.message);
      // setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => fetchMovieHandler(), [fetchMovieHandler]); //Using fetchMovieHandler as a dependency

  const addMovieHandler = async (movie) => {
    const response = await fetch('https://react-http-9a06a-default-rtdb.firebaseio.com/movies.json', {
      method:'POST',
      body: JSON.stringify(movie), //Turns javascript object into an  JSON
      headers: {      //Not required for firebase but might be required for other APIs
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }
  let content = <p>Found no movies</p>;
  if (moviesList.length > 0) content = <MoviesList movies={moviesList} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
