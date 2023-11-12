/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { Carts } from "types";



const initialState: Carts = {
  data: {
    buyerInfo: {
      userEmail: "",
      userName: "",
      userPhonumber: "",
      userPoint: 0,
      userNo: 0,
    },
    couponListInCart: [],
    lectureInfoList: [],
  },
  couponPrice: {
    discountprice: [],
    prices: [],
  },
  deletes: "",
  loading: false,
  error: null,
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    cartInfoLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    cartInfoSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload.data
    },
    cartInfoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    cartDeleteLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    cartDeleteSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.deletes = action.payload;
    },
    cartDeleteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    cartCouponLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    cartCouponSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.couponPrice = action.payload.data;
    },
    cartCouponFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  cartInfoLoading,
  cartInfoSuccess,
  cartInfoFail,
  cartDeleteLoading,
  cartDeleteSuccess,
  cartDeleteFail,
  cartCouponLoading,
  cartCouponSuccess,
  cartCouponFail,
} = cartReducer.actions;

export default cartReducer.reducer;