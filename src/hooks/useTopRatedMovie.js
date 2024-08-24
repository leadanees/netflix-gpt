import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovie();
  }, []);

  const getTopRatedMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated`, API_OPTIONS)
      .then((response) => {
        let result = response.data.results;
        dispatch(addTopRatedMovies(result));
      });
  };
};

export default useTopRatedMovie;
