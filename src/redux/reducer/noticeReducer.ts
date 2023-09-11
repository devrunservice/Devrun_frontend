/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { Notices } from "types";

const initialState: Notices = {
  data: {
    content: [
      {
        content: "",
        createdDate: "",
        id: "",
        modifiedDate: "",
        noticeNo: 0,
        status: "",
        title: "",
        userNo: 0,
        viewCount: 0,
      },
    ],
    totalElements: 0,
    totalPages: 0,
  },
  loading: false,
  error: null,
};

const noticeReducer = createSlice({
  name: "noticeReducer",
  initialState,
  reducers: {
    noticeListLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    noticeListSuccuss: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      return state;
    },
    noticeListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { noticeListLoading, noticeListSuccuss, noticeListFail } =
  noticeReducer.actions;

export default noticeReducer.reducer;
