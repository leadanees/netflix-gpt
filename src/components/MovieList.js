import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-auto" >
        <div className="flex">
          {movies?.map((itemM) => (
            <MovieCard key={itemM.id} poster_path={itemM.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
