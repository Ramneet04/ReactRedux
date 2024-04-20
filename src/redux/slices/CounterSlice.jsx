import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increament : (state)=>{
            state.value+=1;
        },
        decrement : (state)=>{
            state.value-=1;
        },
        reset: (state)=>{
            state.value=0;
        }
    }
})
 //ike we do from a file like dbconnect n all. and here we are extracting from the slice
export const {increament, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;