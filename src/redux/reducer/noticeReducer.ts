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
  content: {
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
  datas: {
    data: [
      {
        commentNo: 0,
        content: "",
        createdDate: "",
        modifiedDate: "",
        noticeNo: 0,
        parentCommentNo: 0,
      },
    ],
  },
  comments: {
    commentNo: 0,
    content: "",
    createdDate: "",
    modifiedDate: "",
    noticeNo: 0,
    parentCommentNo: 0,
  },
  commentRe: {
    commentNo: 0,
    content: "",
    createdDate: "",
    modifiedDate: "",
    noticeNo: 0,
    parentCommentNo: 0,
  },
  write: "",
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
    noticeDetailLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    noticeDetailSuccuss: (state, action) => {
      state.loading = false;

      state.content = action.payload.data;
      return state;
    },
    noticeDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    noticeWriteLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    noticeWriteSuccess: (state, action) => {
      state.loading = false;
      state.write = action.payload.data;
      return state;
    },
    noticeWriteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    noticeRetouchLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    noticeRetouchSuccess: (state, action) => {
      state.loading = false;
      state.write = action.payload.data;
      return state;
    },
    noticeRetouchFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    commentPostLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    commentPostSuccess: (state, action) => {
      state.loading = false;
      state.comments = action.payload;
      return state;
    },
    commentPostFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    commentGetLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    commentGetSuccess: (state, action) => {
      state.loading = false;
      state.datas = action.payload;
      return state;
    },
    commentGetFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    commentRetouchLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    commentRetouchSuccess: (state, action) => {
      state.loading = false;
      state.commentRe = action.payload;
      return state;
    },
    commentRetouchFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  noticeListLoading,
  noticeListSuccuss,
  noticeListFail,
  noticeDetailLoading,
  noticeDetailSuccuss,
  noticeDetailFail,
  noticeWriteLoading,
  noticeWriteSuccess,
  noticeWriteFail,
  noticeRetouchLoading,
  noticeRetouchSuccess,
  noticeRetouchFail,
  commentPostFail,
  commentPostLoading,
  commentPostSuccess,
  commentGetLoading,
  commentGetSuccess,
  commentGetFail,
  commentRetouchLoading,
  commentRetouchSuccess,
  commentRetouchFail,
} = noticeReducer.actions;

export default noticeReducer.reducer;
