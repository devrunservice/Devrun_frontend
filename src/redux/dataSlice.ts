import { baseAxios } from "api/instance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IReactSlice } from "types";


export const __getReact = createAsyncThunk("getReact", async () => {
  try {
    const response = await baseAxios.get("/react5");
    const data = await response.data;
    return data;
  } catch (error: any) {
    return new Error(error.response.data.message);
  }
});

const initialState: IReactSlice = {
  data: [],
  error: null,
  loading: false,
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getReact.pending, (state) => {
        state.loading = true;
      })
      .addCase(__getReact.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(__getReact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default dataSlice.reducer;