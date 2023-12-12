/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";
import { VideoCurriculum } from "types";

interface QuestList {
  answer: number;
  questionContentPreview: string;
  questionDate: string;
  questionId: number;
  questionLectureTitle: string;
  questionTitle: string;
  studentId: string;
  
}

interface Video {
  data: VideoCurriculum;
  progress: string;
  loading: boolean;
  error: null;
  saveQuest: {
    questionId: number;
    lectureId: number;
    videoId: string;
    lectureTitle: string;
    studentId: string;
    questionTitle: string;
    content: string;
    date: string;
  };
  quest: {
    dtolist: QuestList[];
    questionCount: number;
    totalPages: number;
    message: string;
  };
  questList: {
    dtolist: QuestList[];
    questionCount: number;
    totalPages: number;
    message: string;
  };
  questPage: number;
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
  saveQuest: {
    content: "",
    date: "",
    lectureId: 0,
    lectureTitle: "",
    questionId: 0,
    questionTitle: "",
    studentId: "",
    videoId: "",
  },
  quest: {
    dtolist: [],
    questionCount: 0,
    totalPages: 0,
    message: "",
  },
  questList: {
    dtolist: [],
    questionCount: 0,
    totalPages: 0,
    message: "",
  },
  questPage: 0,
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
      const { response, page } = action.payload;
      state.questList = response.data;
      state.questPage = page;
      const newData = response.data.dtolist.filter(
        (v: QuestList) =>
          !state.questList.dtolist.some((c) => c.questionId === v.questionId)
      );
      if (page === 1) {
        state.quest = {
          dtolist: [...state.questList.dtolist, ...newData],
          questionCount: response.data.questionCount,
          totalPages: response.data.totalPages,
          message: "",
        };
      } else {
        state.quest = {
          dtolist: [...state.quest.dtolist, ...response.data.dtolist],
          questionCount: response.data.questionCount,
          totalPages: response.data.totalPages,
          message: "",
        };
      }
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
      state.saveQuest = action.payload.data;
    },
    getQuestDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    saveQuestLoding: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    saveQuestSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.saveQuest = action.payload.data;
    },
    saveQuestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    reQuestLoding: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    reQuestSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.saveQuest = action.payload.data;
    },
    reQuestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    questionDeleteLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    questionDeleteSuccess: (state, action) => {
      state.loading = false;
      console.log(action.payload.id);
      state.quest.dtolist = state.quest.dtolist.filter(
        (v) => v.questionId !== action.payload.id
      );
    },
    questionDeleteFail: (state, action) => {
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
  saveQuestLoding,
  saveQuestSuccess,
  saveQuestFail,
  reQuestLoding,
  reQuestSuccess,
  reQuestFail,
  questionDeleteLoading,
  questionDeleteSuccess,
  questionDeleteFail,
} = VideoViewReducer.actions;

export default VideoViewReducer.reducer;
