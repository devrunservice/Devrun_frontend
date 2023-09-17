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
    },
    couponListInCart: [
      {
        discountrate: 0,
        expirydate: "",
        lecturename: "",
        state: "",
      },
    ],
    lectureInfoList: [
      {
        lecture_intro: "",
        lecture_name: "",
        lecture_price: 0,
        lecture_thumbnail: "",
      },
    ],
  },
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
      state.error = null;
      state.data = action.payload.data;
    },
    cartDeleteFail: (state, action) => {
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
} = cartReducer.actions;

export default cartReducer.reducer;