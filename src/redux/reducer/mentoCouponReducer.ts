/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";




interface MentoCoupons {
  data: {
    content: {
      couponcode: string;
      discountrate: number;
      expirydate: string;
      issueddate: string;
      issuedno: number;
      quantity: number;
      state: string;
      lecturename: string;
    }[];
    totalElements: number;
    totalPages: number;
  };
  loading?: boolean;
  error?: Error | null;
  activate?: null;
}

const initialState: MentoCoupons = {
  data: {
    content: [],
    totalElements: 0,
    totalPages: 0,
  },
  activate: null,
  loading: false,
  error: null,
};

const mentoCouponReducer = createSlice({
  name: "mentoCouponReducer",
  initialState,
  reducers: {
    couponLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    couponSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      return state;
    },
    couponFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    couponActiveLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    couponActiveSuccess: (state, action) => {
      state.loading = false;
      state.activate = action.payload;
      if (action.payload.response.data === "복구 처리 되었습니다.") {
        state.data.content[action.payload.index].state = "ACTIVE";
      } else {
        state.data.content[action.payload.index].state = "REMOVED";
      }
    },
    couponActiveFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createCouponLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    createCouponSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      return state;
    },
    createCouponFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  couponLoading,
  couponSuccess,
  couponFail,
  couponActiveLoading,
  couponActiveSuccess,
  couponActiveFail,
  createCouponSuccess,
  createCouponFail,
  createCouponLoading,
} = mentoCouponReducer.actions;

export default mentoCouponReducer.reducer;
