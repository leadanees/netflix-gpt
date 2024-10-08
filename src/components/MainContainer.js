import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingmovie);

    if(!movies || movies.length === 0 ) return;
    const mainMovie = movies[0];
    
    const {original_title,overview,id} = mainMovie;

  return (
    <>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground id={id}/>
    </>
  )
}

export default MainContainer
