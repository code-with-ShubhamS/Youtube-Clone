import { createSlice } from "@reduxjs/toolkit";

const MobileSideBar= createSlice({
  name:"MobileSideBar",
  initialState:false,
  reducers:{
    isInMobile:(state)=>{
        return state=true;
    },
    isInLap:(state)=>{
        return state=false;
    }
  }
})

export default MobileSideBar;
export const MobileSideBarAction=MobileSideBar.actions;