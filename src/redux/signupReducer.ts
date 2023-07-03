import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface SignupReducerType {
  loading: boolean;
  data: string[] | null;
  error: AxiosError | null;
}

const initialState: SignupReducerType = {
  loading: false,
  data: null,
  error: null,
};

const signupReducer = createSlice({
  name: "signupReducer",
  initialState,
  reducers: {
    loading: (state) => ({ ...state, loading: true }),
    success: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    fail: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
  },
});

export const signupReducerActions = signupReducer.actions;

export default signupReducer.reducer;
