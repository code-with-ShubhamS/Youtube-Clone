import { createSlice } from "@reduxjs/toolkit";


const StoreAllData= createSlice({
    name:"Data",
    initialState: [],
    reducers:{
        addData:(state,action)=>{
            return action.payload;
        }
    }
})

export default StoreAllData;
export const StoreAllDataActions = StoreAllData.actions;