import {configureStore} from  '@reduxjs/toolkit';
import AuthSliceReducer from './Slices/AuthSlice';
const store=configureStore({
      auth:AuthSliceReducer
})
export default store