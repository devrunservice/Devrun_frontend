/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import {LearningType} from 'types';

interface Data {
  dtolist: {
    lectureBigCategory: string;
    lectureIntro: string;
    lectureMidCategory: string;
    lectureName: string;
    lectureThumbnail: string;
    lectureprice: number;
    mentoId: string;
    buycount: number;
    rating: number;
  }[];
  totalelements: number;
  totalpages: number;
}

interface LearningReducerType {
  loading: boolean;
  error: Error | null;
  data: Data;
  lecture: Data;
}

const initialState: LearningReducerType = {
  loading: false,
  data: {
    dtolist: [],
    totalelements: 0,
    totalpages: 0,
  },
  lecture: {
    dtolist: [],
    totalelements: 0,
    totalpages: 0,
  },
  error: null,
};

const learningReducer = createSlice({
  name: "learningReducer",
  initialState,
  reducers: {
    ratingLectureLoading: (state, action) => {
      state.loading = true;
    },
    ratingLectureFail: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    ratingLectureSuccess: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    buyLectureLoading: (state, action) => {
      state.loading = true;
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
    },
    categorySearchSuccess: (state, action) => {
      state.loading = false;
      state.lecture = action.payload.data;
    },
    categorySearchFail: (state, action) => {
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
} = learningReducer.actions;

export default learningReducer.reducer;
