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
  lecture: {
    lectureId: string;
    lectureName: string;
  }[];
  coupon: {
    discountrate: number;
    expirydate: string;
    lectureId: number;
    quantity: number;
  };
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
  lecture:[],
  coupon: {
    discountrate: 0,
    expirydate:"",
    lectureId: 0,
    quantity:  0,
  },
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
      state.coupon = action.payload.data;
    },
    createCouponFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createlectureLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    createlectureSuccess: (state, action) => {
      state.loading = false;
      state.lecture = action.payload.data;
    },
    createlectureFail: (state, action) => {
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
  createlectureLoading,
  createlectureSuccess,
  createlectureFail,
} = mentoCouponReducer.actions;

export default mentoCouponReducer.reducer;
