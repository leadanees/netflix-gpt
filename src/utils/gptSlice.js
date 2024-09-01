import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieName: [],
    movieList: [],
  },
  reducers: {
    toggleShowGPTSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieName: (state, action) => {
      state.movieName = action.payload;
    },
    addMovieList: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { toggleShowGPTSearchView, addMovieName, addMovieList } =  gptSlice.actions;
export default gptSlice.reducer;
