import { createSlice } from "@reduxjs/toolkit";

const languaugeSlice = createSlice(
    {
        name:'lang',
        initialState:{
            lang:"en"
        },
        reducers:{
            changeLanguage:(state,action) => {
                state.lang = action.payload;
            }
        }
    }
);

export const {changeLanguage} = languaugeSlice.actions;
export default languaugeSlice.reducer;