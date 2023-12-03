/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";
import { VideoCurriculum } from "types";

interface Video {
  data: VideoCurriculum;
  progress: string;
  loading: boolean;
  error: null;
  quest: {
    dtolist: {
      answer: number;
      questionContentPreview: string;
      questionDate: string;
      questionId: number;
      questionLectureTitle: string;
      questionTitle: string;
      studentId: string;
    }[];
    message:string
    questionCount: number;
    totalPages: number;
  };
  qusetDetail: {
    content: string;
    date: string;
    lectureId: number;
    lectureTitle: string;
    questionId: number;
    questionTitle: string;
    studentId: string;
    videoId: string;
  };
}

const initialState: Video = {
  data: {
    lectureExpiryDate: "",
    lectureId: 0,
    lectureName: "",
    lectureRating: 0,
    lectureWholeProgess: 0,
    wholeRemainingTime: 0,
    wholeStudyTime: 0,
    sectionInfo: [],
  },
  loading: false,
  error: null,
  progress: "",
  quest: {
    dtolist: [],
    message: "",
    questionCount: 0,
    totalPages: 0,
  },
  qusetDetail: {
    content: "",
    date: "",
    lectureId: 0,
    lectureTitle: "",
    questionId: 0,
    questionTitle: "",
    studentId: "",
    videoId: "",
  },
};

const VideoViewReducer = createSlice({
  name: "VideoViewReducer",
  initialState,
  reducers: {
    curriculumLoding: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    curriculumSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload.data;
    },
    curriculumFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    progressLoding: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    progressSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.progress = action.payload.data;
    },
    progressFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getQuestLoding: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    getQuestSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.quest = action.payload.response.data;
    },
    getQuestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getQuestDetailLoding: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    getQuestDetailSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.qusetDetail = action.payload.data;
    },
    getQuestDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  curriculumLoding,
  curriculumSuccess,
  curriculumFail,
  progressSuccess,
  progressFail,
  progressLoding,
  getQuestSuccess,
  getQuestFail,
  getQuestLoding,
  getQuestDetailSuccess,
  getQuestDetailFail,
  getQuestDetailLoding,
} = VideoViewReducer.actions;

export default VideoViewReducer.reducer;
