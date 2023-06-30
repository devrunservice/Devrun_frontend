import { createSlice } from "@reduxjs/toolkit";
import { LoginFormType } from "types";

export interface LoginReducerType {
  loading: boolean;
  data: LoginFormType;
  error: null;
}

const initialState: LoginReducerType = {
  loading: false,
  data: {
    id: "",
    password: "",
  },
  error: null,
};

const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    loginLoading: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.data.id = action.payload.id;
    },
    loginFail: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginLoading, loginSuccess, loginFail } = loginReducer.actions;

export default loginReducer.reducer;
