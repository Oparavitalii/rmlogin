import { configureStore}  from "@reduxjs/toolkit";
import apiSlice from "./createSlice";

const store = configureStore({
    reducer: {
        store: apiSlice
    }

})


export default store;