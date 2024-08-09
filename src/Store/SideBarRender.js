import { createSlice } from "@reduxjs/toolkit";

const SideBarHamBurger=createSlice({
 name:'Hamburger',
 initialState:false,
 reducers:{
    hamburgerClick:(state)=>{
        return !state;
    }
 }
})

export default SideBarHamBurger;
export const SideBarHamBurgerAction = SideBarHamBurger.actions;