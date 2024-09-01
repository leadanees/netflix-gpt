import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstant";
import { movieTypeData, genreKeywords } from "../utils/movietypedata";
import client from "../utils/openAi";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { addMovieList, addMovieName } from "../utils/gptSlice";

const getGenreFromQuery = (query) => {
  query = query.toLowerCase();
  for (const [genre, keywords] of Object.entries(genreKeywords)) {
    if (keywords.some((keyword) => query.includes(keyword))) {
      return genre;
    }
  }
  return null;
};

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.lang?.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getMoviesByMovieName = (movieName) => {
    try {
      return axios
        .get(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movieName +
            "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        )
        .then((response) => {
          let result = response.data.results;
          return result;
        });
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleGetMovieFromOpenAi = async (e) => {
    e.preventDefault();
    const genre = getGenreFromQuery(searchText.current.value);
    const moviesList = genre ? movieTypeData[genre].split(", ") : [];
    if (moviesList.length > 0) {
      setErrorMessage("");
      dispatch(addMovieName(moviesList));
      //This will return in promises
      const promiseArray = moviesList.map((movieName) =>
        getMoviesByMovieName(movieName)
      );

      //This will wait of every promises finish
      const tmdbResult = await Promise.all(promiseArray);
      if (tmdbResult) {
        dispatch(addMovieList(tmdbResult));
      }
    } else {
      setErrorMessage("Please Enter Correct Spelling! Or It Should not be Empty");
      dispatch(addMovieList([]))
      dispatch(addMovieName([]))
    }
  };

  return (
    <>    <div className="pt-[10%] flex justify-center ">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 px-2 py-1 float-start grid grid-cols-12 rounded-lg bg-black"
      >
        <input
          ref={searchText}
          className="col-span-9 p-4 m-4 rounded-md"
          type="text"
          name="searchbar"
          placeholder={language[languageKey].placeHolder}
        />
        <button
          type="submit"
          onClick={(e) => handleGetMovieFromOpenAi(e)}
          className="col-span-3 bg-red-700 py-2 m-4 px-2 text-white rounded-lg"
        >
          {language[languageKey].buttonValue}
        </button>
      </form>
      
    </div>
    <div>
    {errorMessage && (
      <div className="flex justify-center items-center pt-40">
      <div className="p-8 m-8 bg-black bg-opacity-70 w-[50%]">
        <h1 className="text-white text-center text-3xl">
          {errorMessage}
        </h1>
      </div>
    </div>
    )}
  </div>
  </>

  );
};

export default GptSearchBar;

// try {
//   let query = "Act as a movie Recommandation system and suggestion some movie for you the query : "+searchText.current.value + ". Only give me name of 5 movies. comma seperated liek the example result given ahead. Example Result : Gadar, Golmaal, Houseful , dhol , hera pheri";
//   const chatCompletion = await client.chat.completions.create({
//     messages: [{ role: 'user', content:query ,
//     }],
//     model: 'gpt-3.5-turbo',
//   });
//   console.log(chatCompletion)
// } catch (error) {
//   console.log(error);
// }
