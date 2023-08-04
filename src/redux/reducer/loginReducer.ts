/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export interface LoginReducerType {
  loading: boolean;
  isLogin: boolean;
  error: Error | null;
}

const initialState: LoginReducerType = {
  loading: false,
  isLogin: false,
  error: null,
};

const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    loginLoading: (state, action) => {
      console.log("일반 로그인 로딩 중");
      state.loading = true;
      state.isLogin = false;
    },
    loginSuccess: (state, action) => {
      console.log("일반 로그인 성공");
      state.loading = false;
      state.isLogin = true;
      return state;
    },
    loginFail: (state, action) => {
      console.log("일반 로그인 실패");
      state.loading = false;
      state.isLogin = false;
      state.error = action.payload;
    },
    logoutLoading: (state) => {
      console.log("로그아웃 중");
      state.loading = true;
      state.isLogin = true;
    },
    logoutSuccess: (state, action) => {
      console.log("로그아웃 성공");
      state.loading = false;
      state.isLogin = false;
    },
    logoutFail: (state, action) => {
      console.log("로그아웃 실패");
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
