/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import * as I from 'types';

export interface DashboardReducerType {
  loading: boolean;
  learningData: I.LearningWrapperType;
  noteLectureData: I.NoteLectureWrapperType;
  noteListData: I.NoteListWrapperType;
  noteDetailData: I.NoteDetailType;
  questionLectureData: I.QuestionLectureWrapperType;
  questionData: I.QuestionType[];
  error: Error | null;
}

const initialState: DashboardReducerType = {
  loading: false,
  learningData: {
    dtolist: [],
    totalPages: 0,
  },
  noteLectureData: {
    dtolist: [],
    totalPages: 0,
  },
  noteListData: {
    dtolist: [],
    totalPages: 0,
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
  questionLectureData: {
    dtolist: [],
    totalPages: 0,
  },
  questionData: [],
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
    questionLectureLoading: (state, action) => {
      state.loading = true;
    },
    questionLectureSuccess: (state, action) => {
      state.loading = false;
      state.noteLectureData = action.payload.data;
    },
    questionLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    questionLoading: (state) => {
      state.loading = true;
    },
    questionSuccess: (state, action) => {
      state.loading = false;
      state.questionData = action.payload.data;
    },
    questionFail: (state, action) => {
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
  questionLectureLoading,
  questionLectureSuccess,
  questionLectureFail,
  questionLoading,
  questionSuccess,
  questionFail,
} = dashboardReducer.actions;

export default dashboardReducer.reducer;
