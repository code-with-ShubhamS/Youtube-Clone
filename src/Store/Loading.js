import { createSlice } from "@reduxjs/toolkit";

const Loading=createSlice({
    name:"Loading",
    initialState: {fetchStatus:false,oneTimeFetchDone:false},
    reducers:{
        FechingStart:(state)=>{
              state.fetchStatus=true;
        },
        FechingDone:(state)=>{
           state.fetchStatus=false;
        },
        OneTimeFetchDone:(state)=>{
            state.oneTimeFetchDone=true;
        }
    }
})

export default Loading;
export const LoadingAction= Loading.actions;