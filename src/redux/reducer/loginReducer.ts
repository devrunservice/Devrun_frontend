/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import {LoginFormType} from 'types';

export interface LoginReducerType {
  loading: boolean;
  isLogin: boolean;
  data: LoginFormType;
  error: Error | null;
}

const initialState: LoginReducerType = {
  loading: false,
  isLogin: false,
  data: {
    id: '',
    loginTime: 0,
  },
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
      state.data = action.payload;
      state.data.loginTime = new Date();
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
      state.data.id = '';
      state.data.loginTime = 0;
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
      state.isLogin = false;
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
  kakaoLoading,
  kakaoSuccess,
  kakaoFail,
} = loginReducer.actions;

export default loginReducer.reducer;
/* eslint-disable @typescript-eslint/no-unused-vars */
