import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); //React Hooks
  const [trailerUrl, setTrailerUrl] = useState("");
  //A snippet code which runs based on a specific condition/variable

  useEffect(() => {
    //Run once the row loads and dont run again if its []  //Runs every single time when the [movies] changes
    //If we have/want a async function in useEffect then

    async function fetchData() {
      // await waits from the comeback of response
      const request = await axios.get(fetchUrl); // request url is https://api.themoviedb.org/3/discover/tv?api_key=8e6e2786bed9189394cd0821f8ed6142&with_network=213
      //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // If there is any variable dependent in useeffect declare here.
  //   console.table(movies);

  //check in react-youtube website
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "") //promise
        .then((url) => {
          // https://www.youtube.com/watch?v=aFIIBugm4Hc  in this we need only params  aFIIBugm4Hc
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2> {/** Title  */}
      <div className="row__posters">
        {/**Row posters... */}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`} //By this Netflix originals and others are differentiated by css class
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path //Netflix originals take poster_path and others take backdrop_path
              }`}
              onClick={() => handleClick(movie)} //Image is clicked then trailer is visisble to us.
              alt={movie.original_name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
