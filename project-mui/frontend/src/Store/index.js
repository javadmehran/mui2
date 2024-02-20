import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice.js";
import CartSliceReducer from "./Slices/CartSlice.js";
const store=configureStore({
    reducer:{
        auth:AuthSliceReducer,
        cart:CartSliceReducer
    }
})
export default store