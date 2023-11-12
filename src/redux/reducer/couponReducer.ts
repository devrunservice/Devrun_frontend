/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import * as I from "types"

interface UserCoupons {
  data: I.UserCoupon;
  loading: boolean;
  error: null;
}

const initialState: UserCoupons = {
  data: {
    content: [],
  },
  loading: false,
  error: null,
};

const couponReducer = createSlice({
  name: "couponReducer",
  initialState,
  reducers: {
    couponListLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    couponListSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload.data;
    },
    couponListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    couponGetLoading: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },
    couponGetSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    couponGetFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      
    },
  },
});

export const {
  couponListLoading,
  couponListSuccess,
  couponListFail,
  couponGetSuccess,
  couponGetFail,
  couponGetLoading,
} = couponReducer.actions;

  export default couponReducer.reducer