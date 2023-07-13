/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginReducerDataType {
  name: string;
}

export interface LoginReducerType {
  loading: boolean;
  isLogin: boolean;
  data: LoginReducerDataType;
  error: Error | null;
  redirectTo: string;
}

const initialState: LoginReducerType = {
  loading: false,
  isLogin: false,
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
      state.isLogin = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLogin = true;
      console.log(action.payload);
      state.data.name = action.payload.data.username;
      state.redirectTo = "/";
      return state;
    },
    loginFail: (state, action) => {
      console.log(action);
      state.loading = false;
      state.isLogin = false;
      state.error = action.payload;
    },
    logoutLoading: (state) => {
      state.loading = true;
      state.isLogin = true;
    },
    logoutSuccess: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.isLogin = false;
      state.data.name = "";
      state.redirectTo = "";
      console.log(state);
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isLogin = true;
      state.error = action.payload;
    },
    kakaoLoading: (state, action) => {
      state.loading = true;
      state.isLogin = false;
    },
    kakaoSuccess: (state, action) => {
      state.loading = false;
      state.isLogin = true;
      state.redirectTo = "/login";
    },
    kakaoFail: (state, action) => {
      state.loading = false;
      state.isLogin = false;
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
