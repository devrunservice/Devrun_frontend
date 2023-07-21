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
      console.log("일반 로그인 성공");
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
      state.redirectTo = "/logout";
      console.log(state);
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isLogin = true;
      state.error = action.payload;
    },
    kakaoLoading: (state, action) => {
      console.log("카카오 로그인 로딩 중");
      state.loading = true;
      state.isLogin = false;
    },
    kakaoSuccess: (state, action) => {
      console.log("카카오 로그인 성공");
      state.loading = false;
      state.isLogin = false;
      state.redirectTo = "/auth/kakao/callback/login";
    },
    kakaoFail: (state, action) => {
      console.log("카카오 로그인 실패");
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
  kakaoLoading,
  kakaoSuccess,
  kakaoFail,
} = loginReducer.actions;

export default loginReducer.reducer;
/* eslint-disable @typescript-eslint/no-unused-vars */
