import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice.js";
const store=configureStore({
    reducer:{
        auth:AuthSliceReducer
    }
})
export default store