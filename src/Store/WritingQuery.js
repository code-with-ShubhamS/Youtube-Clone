import { createSlice } from "@reduxjs/toolkit";

const WritingQuery = createSlice({
        name:"queryInData",
        initialState:"New",
        reducers:{
            addNewQuery:(state,action)=>{
                return action.payload;
            }
        }
})

export default WritingQuery;
export const WritingQueryAction= WritingQuery.actions;