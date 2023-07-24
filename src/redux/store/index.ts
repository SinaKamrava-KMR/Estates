import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../reducers/user/userSlice'
import filesReducer from '../reducers/files/fileSlice'


const store = configureStore({
  reducer: {
    user: userReducer,
    files:filesReducer
  }
});


export default store
