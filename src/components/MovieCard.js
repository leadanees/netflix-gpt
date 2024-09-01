import React from "react";
import { IMG_CDL_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if(!poster_path) return null;
  return (
    <div className="w-44 pr-3 pt-2">
        <img
          alt="movie_image"
          src={IMG_CDL_URL + poster_path}
        />
    </div>
  );
};

export default MovieCard;
