import { configureStore } from "@reduxjs/toolkit";
import StoreAllData from "./StoreAllData";
import Loading from "./Loading";
import WritingQuery from "./WritingQuery";
import SideBarHamBurger from "./SideBarRender";
import MobileSideBar from "./MobileSIdeBarRendering";

const store = configureStore({
    reducer:{
        StoreAllData:StoreAllData.reducer,
        Loading:Loading.reducer,
        WritingQuery:WritingQuery.reducer,
        SideBarHamBurger:SideBarHamBurger.reducer,
        MobileSideBar:MobileSideBar.reducer
    }
})

export default store;