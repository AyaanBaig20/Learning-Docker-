import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../redux/authSlices"

export const store = configureStore({
  reducer: {
    auth:authReducer
  },
})