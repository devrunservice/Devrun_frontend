/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import {LearningType} from 'types';

export interface LearningReducerType {
  loading: boolean;
  data: LearningType[];
  error: Error | null;
  lecture: {
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
  };
}

const initialState: LearningReducerType = {
  loading: false,
  data: [],
  error: null,
  lecture: {
    dtolist: [],
    totalelements: 0,
    totalpages: 0,
  },

};

const learningReducer = createSlice({
  name: "learningReducer",
  initialState,
  reducers: {
    learningLoading: (state, action) => {
      state.loading = true;
    },
    learningSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    learningFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    mainLectureLoading: (state, action) => {
      state.loading = true;
    },
    mainLectureSuccess: (state, action) => {
      state.loading = false;
      state.lecture = action.payload.data;
    },
    mainLectureFail: (state, action) => {
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
  learningLoading,
  learningSuccess,
  learningFail,
  mainLectureSuccess,
  mainLectureFail,
  mainLectureLoading,
  categorySearchSuccess,
  categorySearchFail,
  categorySearchLoading,
} = learningReducer.actions;

export default learningReducer.reducer;
