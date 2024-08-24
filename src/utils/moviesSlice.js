import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingmovie:null,
            trailerVideo:null,
            popularMovie:null,
            topRatedMovie:null,
            upComingMovie:null,
        },
        reducers:{
            addMovies : (state,action) => {
                state.nowPlayingmovie = action.payload;
            },
            addTailerVideo : (state,action) => {
                state.trailerVideo = action.payload;
            },
            addPopularMovies:(state,action) => {
                state.popularMovie = action.payload;
            },
            addTopRatedMovies:(state,action) => {
                state.topRatedMovie = action.payload;
            },
            addUpComingMovies:(state,action) => {
                state.upComingMovie = action.payload;
            },
        }
    }
);

export const {addMovies,addTailerVideo ,addPopularMovies,addTopRatedMovies,addUpComingMovies} = movieSlice.actions;

export default movieSlice.reducer;