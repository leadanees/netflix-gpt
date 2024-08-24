import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovie();
  }, []);

  const getPopularMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, API_OPTIONS)
      .then((response) => {
        let result = response.data.results;
        dispatch(addPopularMovies(result));
      });
  };
};

export default usePopularMovie;
