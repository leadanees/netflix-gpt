import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice(
    {
        name:'gpt',
        initialState:{
            showGptSearch:false
        },
        reducers:{
            toggleShowGPTSearchView:(state)=>{
                state.showGptSearch = !state.showGptSearch;
            },
        }
    }
);

export const {toggleShowGPTSearchView} = gptSlice.actions;
export default gptSlice.reducer;