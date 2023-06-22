import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "/auth/auth";
// import { dataSlice } from "api/dataSlice"; // eslint-disable-line @typescript-eslint/no-unused-vars

const store = configureStore({
  reducer: {
    // authReducer,
    // dataSlice: dataSlice.reducer // eslint-disable-line @typescript-eslint/no-unused-vars
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
