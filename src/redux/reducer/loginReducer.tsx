import { createSlice } from "@reduxjs/toolkit";

export interface LoginReducerType {
  id: string;
  password: string;
}

const initialState: LoginReducerType = {
  id: "",
  password: "",
};

const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      console.log(action);
      state.id = action.payload.id;
      state.password = action.payload.password;
    },
  },
});

export const { setLogin } = loginReducer.actions;

export default loginReducer.reducer;
