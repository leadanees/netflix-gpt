import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const movieList = useSelector((store) => store.gpt?.movieList);
  const movieName = useSelector((store) => store.gpt?.movieName);
  if (!movieName || !movieList || movieList.length === 0) return null;
  
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {movieName.map((item, index) => {
          const movie = movieList[index];
          if(item && movie.length > 0){
            return <MovieList key={item} title={item} movies={movie} />;
          }else{
            return null
          }
          
        })}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;



  // if (!movieName || !movieList || movieName.length === 0 || movieList.length === 0) {
  //   return (
  //     <div className="p-4 m-4 bg-black text-white bg-opacity-80">
  //       <h1 className="text-blue-700 text-center text-3xl">Please Enter Correct Spelling!</h1>
  //     </div>
  //   );
  // }