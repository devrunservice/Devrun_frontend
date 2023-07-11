/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginReducerDataType {
  name: string;
}

export interface LoginReducerType {
  loading: boolean;
  data: LoginReducerDataType;
  error: Error | null;
  redirectTo: string;
}

const initialState: LoginReducerType = {
  loading: false,
  data: {
    name: "",
  },
  error: null,
  redirectTo: "",
};

const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    loginLoading: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.data.name = action.payload.data.username;
      state.redirectTo = "/";
      return state;
    },
    loginFail: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },
    logoutLoading: (state, action) => {
      console.log(action);
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.redirectTo = "/";
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    kakaoLoading: (state, action) => {
      state.loading = true;
    },
    kakaoSuccess: (state, action) => {
      state.loading = false;
      state.redirectTo = "/login";
    },
    kakaoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginLoading,
  loginSuccess,
  loginFail,
  logoutLoading,
  logoutSuccess,
  logoutFail,
} = loginReducer.actions;

export default loginReducer.reducer;
/* eslint-disable @typescript-eslint/no-unused-vars */
