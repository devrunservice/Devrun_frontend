/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";
import { VideoCurriculum } from "types";

interface Video {
  data: VideoCurriculum;
  note: string;
  getNote: {
    chapter: number;
    content: string;
    date: string;
    noteId: number;
    noteTitle: string;
    subHeading: string;
  }[];
  progress: string;
  loading: boolean;
  error: null;
  reNote: number;
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
  note: "",
  getNote: [],
  reNote: 0,
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
    saveNoteLoding: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    saveNoteSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.note = action.payload.data;
    },
    saveNoteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getNoteLoding: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    getNoteSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.getNote = action.payload.data;
    },
    getNoteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    reNoteLoding: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    reNoteSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.reNote = action.payload.noteNo;
    },
    reNoteFail: (state, action) => {
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
  saveNoteSuccess,
  saveNoteFail,
  saveNoteLoding,
  getNoteSuccess,
  getNoteFail,
  getNoteLoding,
  reNoteLoding,
  reNoteSuccess,
  reNoteFail,
} = VideoViewReducer.actions;

export default VideoViewReducer.reducer;
