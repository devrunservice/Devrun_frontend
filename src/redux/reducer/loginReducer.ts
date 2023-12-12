/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

export interface LoginReducerType {
  loading: boolean;
  isLogin: boolean;
  iskakaoLogin: boolean;
  isRecaptcha: boolean;
  error: Error | null;
}

const initialState: LoginReducerType = {
  loading: false,
  isLogin: false,
  iskakaoLogin: false,
  isRecaptcha: false,
  error: null,
};

const loginReducer = createSlice({
  name: 'loginReducer',
  initialState,
  reducers: {
    loginLoading: (state, action) => {
      state.loading = true;
      state.isLogin = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLogin = true;
      return state;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isLogin = false;
      state.error = action.payload;
    },
    logoutLoading: (state) => {
      state.loading = true;
      state.isLogin = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isLogin = false;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isLogin = true;
      state.error = action.payload;
    },
    kakaoLoading: (state, action) => {
      state.loading = true;
      state.iskakaoLogin = false;
    },
    kakaoSuccess: (state, action) => {
      state.loading = false;
      state.iskakaoLogin = action.payload;
    },
    kakaoFail: (state, action) => {
      state.loading = false;
      state.iskakaoLogin = false;
      state.error = action.payload;
    },
    openRecaptcha: (state, action) => {
      state.isRecaptcha = action.payload;
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
  openRecaptcha,
} = loginReducer.actions;

export default loginReducer.reducer;
/* eslint-disable @typescript-eslint/no-unused-vars */
