/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";
import { VideoCurriculum } from "types";

interface Video {
  data: VideoCurriculum;
  progress:string;
  loading: boolean;
  error: null;
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
  progress:"",
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
  },
});

export const {
  curriculumLoding,
  curriculumSuccess,
  curriculumFail,
  progressSuccess,
  progressFail,
  progressLoding,
} = VideoViewReducer.actions;

export default VideoViewReducer.reducer;
