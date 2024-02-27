import {configureStore } from '@reduxjs/toolkit';

import commendReducer from "./commandSlice"



const store=configureStore({
  reducer:{
    commend:commendReducer,
  }
})



export default store;
  

  

