import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();

  useEffect((response) => {
    getUpcomingMovie();
  }, []);

  const getUpcomingMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming`, API_OPTIONS)
      .then((response) => {
        let result = response.data.results;
        dispatch(addUpComingMovies(result));
      });
  };
};

export default useUpcomingMovie;
