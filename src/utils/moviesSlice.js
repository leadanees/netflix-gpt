import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingmovie:null
        },
        reducers:{
            addMovies : (state,action) => {
                state.nowPlayingmovie = action.payload;
            }
        }
    }
);

export const {addMovies} = movieSlice.actions;

export default movieSlice.reducer;