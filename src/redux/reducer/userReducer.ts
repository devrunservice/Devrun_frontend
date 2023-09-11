/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { Userinfo } from "types";

const initialState: Userinfo = {
  data: {
    id: "",
    role: "",
    userNo: 0,
  },
  error: null,
  loading: false,
};

const userTmiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    userInfoLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    userInfoSuccess: (state, action) => {
      state.loading = false;
      state.data.id = action.payload.data.id;
      state.data.role = action.payload.data.role;
      state.data.userNo = action.payload.data.userNo;
    },
    userInfofail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userInfoLoading, userInfoSuccess, userInfofail } = userTmiSlice.actions;
export default userTmiSlice.reducer;
