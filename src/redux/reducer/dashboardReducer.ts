/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import * as I from 'types';

export interface DashboardReducerType {
  loading: boolean;
  learningData: I.LearningWrapperType;
  noteLectureData: I.NoteLectureWrapperType;
  noteListData: I.NoteListWrapperType;
  noteDetailData: I.NoteDetailType;
  questionListData: I.QuestionListWrapperType;
  questionDetailData: I.QuestionDetailType;
  error: Error | null;
}

const initialState: DashboardReducerType = {
  loading: false,
  learningData: {
    dtolist: [],
    totalPages: 1,
  },
  noteLectureData: {
    dtolist: [],
    totalPages: 1,
  },
  noteListData: {
    dtolist: [],
    totalPages: 1,
  },
  noteDetailData: {
    noteId: 0,
    noteTitle: '',
    videoId: '',
    chapter: '',
    subHeading: '',
    date: '',
    content: '',
  },
  questionListData: {
    dtolist: [],
    totalPages: 1,
  },
  questionDetailData: {
    questionId: 0,
    lectureId: 0,
    videoId: '',
    date: '',
    questionTitle: '',
    content: '',
  },
  error: null,
};

const dashboardReducer = createSlice({
  name: 'dashboardReducer',
  initialState,
  reducers: {
    // 내 학습 관리
    learningLoading: (state, action) => {
      state.loading = true;
    },
    learningSuccess: (state, action) => {
      state.loading = false;
      state.learningData = action.payload.data;
    },
    learningFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // 강의 노트
    noteLectureLoading: (state, action) => {
      state.loading = true;
    },
    noteLectureSuccess: (state, action) => {
      state.loading = false;
      state.noteLectureData = action.payload.data;
    },
    noteLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    noteListLoading: (state, action) => {
      state.loading = true;
    },
    noteListSuccess: (state, action) => {
      state.loading = false;
      state.noteListData = action.payload.data;
    },
    noteListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    noteDetailLoading: (state, action) => {
      state.loading = true;
    },
    noteDetailSuccess: (state, action) => {
      state.loading = false;
      state.noteDetailData = action.payload.data;
    },
    noteDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // 강의 질문
    questionListLoading: (state, action) => {
      state.loading = true;
    },
    questionListSuccess: (state, action) => {
      state.loading = false;
      state.noteLectureData = action.payload.data;
    },
    questionListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    questionDetailLoading: (state) => {
      state.loading = true;
    },
    questionDetailSuccess: (state, action) => {
      state.loading = false;
      state.questionDetailData = action.payload.data;
    },
    questionDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  learningLoading,
  learningSuccess,
  learningFail,
  noteLectureLoading,
  noteLectureSuccess,
  noteLectureFail,
  noteListLoading,
  noteListSuccess,
  noteListFail,
  noteDetailLoading,
  noteDetailSuccess,
  noteDetailFail,
  questionListLoading,
  questionListSuccess,
  questionListFail,
  questionDetailLoading,
  questionDetailSuccess,
  questionDetailFail,
} = dashboardReducer.actions;

export default dashboardReducer.reducer;
