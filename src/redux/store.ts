import { configureStore } from "@reduxjs/toolkit";
// import { dataSlice } from "api/dataSlice"; // eslint-disable-line @typescript-eslint/no-unused-vars

const store = configureStore({
  reducer: { 
    // dataSlice: dataSlice.reducer // eslint-disable-line @typescript-eslint/no-unused-vars
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
