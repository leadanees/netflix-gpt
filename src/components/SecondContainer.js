import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingmovie);
  const popularmovies = useSelector((store) => store.movies?.popularMovie);
  const topRatedmovies = useSelector((store) => store.movies?.topRatedMovie);
  const upComingmovies = useSelector((store) => store.movies?.upComingMovie);
  return (
    <div className="bg-black">
      <div className="-mt-64 pl-12 relative z-50">
        <MovieList title={"Now Palying"} movies={movies} />
        <MovieList title={"Popular"} movies={popularmovies} />
        <MovieList title={"Top Rated"} movies={topRatedmovies} />
        <MovieList title={"Upcoming"} movies={upComingmovies} />
      </div>
    </div>
  );
};

export default SecondContainer;
