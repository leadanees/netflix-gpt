import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import { useDispatch, useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
import { addMovieList, addMovieName } from "../utils/gptSlice";

const Browse = () => {
  const showget = useSelector((store) => store.gpt?.showGptSearch);
  const dispatch = useDispatch();
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  if(!showget){
    dispatch(addMovieList([]),addMovieName([]));
  }

  return (
    <div>
      <Header />
      {showget ? (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      ) : (
        <GPTSearch />
      )}
    </div>
  );
};

export default Browse;
