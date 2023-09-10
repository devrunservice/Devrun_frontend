/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { ITmi } from "types";

const initialState: ITmi = {
  data: {
    id: "",
    email: "",
    name: "",
    birthday: "",
    phonenumber: "",
    role: "",
    userNo:0,
  },
  error: null,
  loading: false,
};

const userTmiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    userTmiPending: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    userTmiFulfilled: (state, action) => {
      state.loading = false;
      state.data.id = action.payload.data.id;
      state.data.email = action.payload.data.email;
      state.data.name = action.payload.data.name;
      state.data.birthday = action.payload.data.birthday.split("T")[0];
      state.data.phonenumber = action.payload.data.phonenumber;
      state.data.role = action.payload.data.role;
      state.data.userNo = action.payload.data.userNo;
    },
    userTmiRejected: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userTmiPending, userTmiFulfilled, userTmiRejected } =
  userTmiSlice.actions;
export default userTmiSlice.reducer;
