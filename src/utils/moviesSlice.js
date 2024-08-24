import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingmovie:null,
            trailerVideo:null,
        },
        reducers:{
            addMovies : (state,action) => {
                state.nowPlayingmovie = action.payload;
            },
            addTailerVideo : (state,action) => {
                state.trailerVideo = action.payload;
            }
        }
    }
);

export const {addMovies,addTailerVideo} = movieSlice.actions;

export default movieSlice.reducer;