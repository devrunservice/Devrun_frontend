/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { Points } from "types";

const initialState: Points = {
  data: {
    content: [
      {
        updatetime: "",
        pointupdown: 0,
        pointno: 0,
        explanation: "",
      },
    ],
    totalElements: 0,
    totalPages: 0,
  },
  loading: false,
  error: null,
};

const pointReducer = createSlice({
  name: "pointReducer",
  initialState,
  reducers: {
    pointLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    pointSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      return state;
    },
    pointFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { pointLoading, pointSuccess, pointFail } = pointReducer.actions;

export default pointReducer.reducer;
