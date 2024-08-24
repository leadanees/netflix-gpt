import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (id) => {
  const dispatch = useDispatch();

    useEffect(() => {
        getMoviesVideos(id);
      }, []);
    
      const getMoviesVideos = (id) => {
        axios
          .get(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS)
          .then((response) => {
            let result = response.data.results;
            const trailerVideos = result.filter((data) => data.type === "Trailer");
            const trailer = trailerVideos.length > 0 ? trailerVideos[0] : trailerVideos;
            dispatch(addTailerVideo(trailer));
          });
      };
};

export default useTrailerVideo;