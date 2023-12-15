/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { CommentsList, DetailAPI } from 'types';

interface Data {
  dtolist: {
    lectureBigCategory: string;
    lectureIntro: string;
    lectureMidCategory: string;
    lectureName: string;
    lectureThumbnail: string;
    lecturePrice: number;
    mentoId: string;
    buyCount: number;
    rating: number;
    lectureId: number;
  }[];
  totalelements: number;
  totalpages: number;
  code: string;
  message: string;
  
}

interface LearningReducerType {
  loading: boolean;
  error: Error | null;
  data: Data;
  lecture: Data;
  lectureDetail: DetailAPI;
  content: string;
  comment: string;
  getCommtent: {
    data: CommentsList[];
  };
}

const initialState: LearningReducerType = {
  loading: false,
  data: {
    dtolist: [],
    totalelements: 0,
    totalpages: 0,
    code: "",
    message: "",
  },
  lecture: {
    dtolist: [],
    totalelements: 0,
    totalpages: 0,
    code: "",
    message: "",
  },
  error: null,
  lectureDetail: {
    lectureid: 0,
    lectureName: "",
    lectureIntro: "",
    lecturePrice: 0,
    lectureStart: "",
    lectureEdit: "",
    lectureDiscount: "",
    lectureDiscountrate: "",
    lectureDiscountstart: "",
    lectureDiscountend: "",
    lectureStatus: "",
    lectureThumbnail: "",
    lectureRating: 0,
    lectureTag: [],
    buyCount: 0,
    lectureCategory: {
      categoryNo: 0,
      lectureBigCategory: "",
      lectureMidCategory: "",
    },
    lectureSections: [],
    id: "",
    mentoId: {
      birthday: "",
      id: "",
      name: "",
      kakaoEmailId: "",
      export: "",
      profileimgsrc: "",
      role: "",
      signupDate: "",
      status: "",
      userNo: 0,
    },
  },
  content: "",
  comment: "",
  getCommtent:{data:[]}
};

const learningReducer = createSlice({
  name: "learningReducer",
  initialState,
  reducers: {
    ratingLectureLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    ratingLectureSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    ratingLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    buyLectureLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    buyLectureSuccess: (state, action) => {
      state.loading = false;
      state.lecture = action.payload.data;
    },
    buyLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    categorySearchLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    categorySearchSuccess: (state, action) => {
      state.loading = false;
      state.lecture = action.payload.data;
    },
    categorySearchFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    categorySearchLoadingTwo: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    categorySearchSuccessTwo: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    categorySearchFailTwo: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    LectureDetailLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    LectureDetailSuccess: (state, action) => {
      state.loading = false;
      state.lectureDetail = action.payload.data;
    },
    LectureDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    LectureDetailTextLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    LectureDetailTextSuccess: (state, action) => {
      state.loading = false;
      state.content = action.payload.data.content;
    },
    LectureDetailTextFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    LectureDetailCommentLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    LectureDetailCommentSuccess: (state, action) => {
      state.loading = false;
      state.comment = action.payload.data;
    },
    LectureDetailCommentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    LectureDetailCommentGetLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    LectureDetailCommentGetSuccess: (state, action) => {
      state.loading = false;
      state.getCommtent = action.payload;
    },
    LectureDetailCommentGetFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  ratingLectureSuccess,
  ratingLectureFail,
  ratingLectureLoading,
  buyLectureSuccess,
  buyLectureFail,
  buyLectureLoading,
  categorySearchSuccess,
  categorySearchFail,
  categorySearchLoading,
  LectureDetailSuccess,
  LectureDetailFail,
  LectureDetailLoading,
  LectureDetailTextSuccess,
  LectureDetailTextFail,
  LectureDetailTextLoading,
  categorySearchSuccessTwo,
  categorySearchFailTwo,
  categorySearchLoadingTwo,
  LectureDetailCommentSuccess,
  LectureDetailCommentFail,
  LectureDetailCommentLoading,
  LectureDetailCommentGetSuccess,
  LectureDetailCommentGetFail,
  LectureDetailCommentGetLoading,
} = learningReducer.actions;

export default learningReducer.reducer;


