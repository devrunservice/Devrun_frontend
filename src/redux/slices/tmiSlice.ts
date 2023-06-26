import { createSlice } from "@reduxjs/toolkit";
import { ITmi } from "types";


const initialState: ITmi = {
  loading: false,
  data: null,
  error: null,
};

const tmiSlice = createSlice({
  name: "tmi",
  initialState,
  reducers: {
    tmiDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    tmiDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    tmiDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { tmiDataStart, tmiDataSuccess, tmiDataFailure } = tmiSlice.actions;

export default tmiSlice.reducer;
