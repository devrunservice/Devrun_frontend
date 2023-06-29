/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ITmi } from "types";

const initialState: ITmi = {
  data: [],
  error: null,
  loading: false,
};
const userTmiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    userTmiPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    userTmiFulfilled: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    userTmiRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userTmiPending, userTmiFulfilled, userTmiRejected } =
  userTmiSlice.actions;
export default userTmiSlice.reducer;
/* eslint-disable no-param-reassign */
