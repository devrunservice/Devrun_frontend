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
  addCart:"",
  saveCart:"",
  freeCart:""
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
      state.data = action.payload.data;
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
      state.couponPrice = action.payload.data;
    },
    cartCouponFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addCartLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    addCartSuccess: (state, action) => {
      state.loading = false;
      state.addCart = action.payload.data;
    },
    addCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    saveCartLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    saveCartSuccess: (state, action) => {
      state.loading = false;
      state.addCart = action.payload.data;
    },
    saveCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    freeCartLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    freeCartSuccess: (state, action) => {
      state.loading = false;
      state.freeCart = action.payload.data;
    },
    freeCartFail: (state, action) => {
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
  addCartSuccess,
  addCartFail,
  addCartLoading,
  saveCartSuccess,
  saveCartFail,
  saveCartLoading,
  freeCartLoading,
  freeCartSuccess,
  freeCartFail,
} = cartReducer.actions;

export default cartReducer.reducer;