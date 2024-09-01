// import axios from "axios";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addMovies } from "../utils/moviesSlice";
// import { useEffect } from "react";

// const useNowPlayingMovie = () => {
//   const dispatch = useDispatch();


//   useEffect(() => {
//     getNowPlayingMovies();
//   },[])

//   const getNowPlayingMovies = () => {
//     axios.get("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS).then((response) => {
//         let result = response.data.results;
//         dispatch(addMovies(result));
//       }).catch(err => console.log(err));
//   };
// };

// export default useNowPlayingMovie;
