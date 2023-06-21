import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "api/dataSlice";
const store = configureStore({
  reducer: { dataSlice: dataSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
