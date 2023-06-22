import { configureStore } from "@reduxjs/toolkit";
import { postAuthSlice } from "api/signupSlice";
const store = configureStore({
  reducer: { postAuthSlice: postAuthSlice.reducer },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


