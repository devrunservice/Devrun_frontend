/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAction, createSlice } from "@reduxjs/toolkit";
import { LoginFormType } from "types";

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

export const loginAction = createAction<LoginFormType>("LOGIN_ACTION");
// export const loginLoading = createAction("LOGIN_Loading");
// export const loginSuccess = createAction<LoginFormType>("LOGIN_SUCCESS");
// export const loginFail = createAction<Error>("LOGIN_FAIL");

const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  // reducers: {},
  reducers: {
    loginLoading: (state) => {
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
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginLoading, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(loginSuccess, (state, action) => {
  //       console.log(action.payload);
  //       state.loading = false;
  //       state.data.id = action.payload.id;
  //       state.data.password = action.payload.password;
  //     })
  //     .addCase(loginFail, (state, action) => {
  //       console.log(action.payload);
  //       state.loading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { loginLoading, loginSuccess, loginFail } = loginReducer.actions;

export default loginReducer.reducer;
/* eslint-disable @typescript-eslint/no-unused-vars */
