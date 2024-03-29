/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import * as I from 'types';

export interface DashboardReducerType {
  loading: boolean;
  learningData: I.LearningWrapperType;
  noteLectureData: I.NoteLectureWrapperType;
  noteListData: I.NoteListWrapperType;
  noteList: I.NoteListWrapperType;
  noteDetailData: I.NoteDetailType;
  noteDeleteData: boolean;
  questionListData: I.QuestionListWrapperType;
  questionDetailData: I.QuestionDetailType;
  questionDeleteData: boolean;
  answerData: {
    data: I.CommentsList[];
  };
  replyAnswerData: I.CommentsList;
  deleteAnswerData: boolean;
  editAnswerData: I.CommentsList;
  note: I.INote;
  reNote: I.IReNote;
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
  noteList: {
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
  noteDeleteData: false,
  note: {
    noteTitle: '',
    noteContent: '',
  },
  reNote: {
    chapter: 0,
    content: '',
    date: '',
    noteId: 0,
    noteTitle: '',
    subHeading: '',
    videoId: '',
  },
  questionListData: {
    dtolist: [],
    questionCount: 0,
    totalPages: 1,
  },
  questionDetailData: {
    questionId: 0,
    lectureId: 0,
    videoId: '',
    date: '',
    questionTitle: '',
    content: '',
    answer: '',
    studentId: '',
  },
  questionDeleteData: false,
  answerData: {
    data: [],
  },
  replyAnswerData: {
    commentNo: 0,
    content: '',
    createdDate: '',
    id: '',
    modifiedDate: '',
    noticeNo: 0,
    parentCommentNo: 0,
    profileimgsrc: '',
    userNo: 0,
  },
  deleteAnswerData: false,
  editAnswerData: {
    commentNo: 0,
    content: '',
    createdDate: '',
    id: '',
    modifiedDate: '',
    noticeNo: 0,
    parentCommentNo: 0,
    profileimgsrc: '',
    userNo: 0,
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
      const {response, page} = action.payload;
      state.noteListData = response.data;

      if (page === 1) {
        const newData = response.data.dtolist.filter(
          (v: I.NoteListType) =>
            !state.noteListData.dtolist.some((c) => c.noteId === v.noteId)
        );
        state.noteList = {
          dtolist: [...state.noteListData.dtolist, ...newData],
          totalPages: page,
        };
      } else {
        state.noteList = {
          dtolist: [...state.noteList.dtolist, ...response.data.dtolist],
          totalPages: page,
        };
      }
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
    noteDeleteLoading: (state, action) => {
      state.loading = true;
    },
    noteDeleteSuccess: (state, action) => {
      state.loading = false;
      state.noteListData.dtolist = state.noteListData.dtolist.filter(
        (v) => v.noteId !== action.payload
      );
      state.noteList.dtolist = state.noteListData.dtolist.filter(
        (v) => v.noteId !== action.payload
      );
    },
    noteDeleteFail: (state, action) => {
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
      const {noteContent, noteTitle} = action.payload;
      state.note = {
        noteTitle: noteTitle,
        noteContent: noteContent,
      };
    },
    saveNoteFail: (state, action) => {
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
      state.reNote = action.payload.data;
    },
    reNoteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // 강의 질문
    questionListLoading: (state, action) => {
      state.loading = true;
    },
    questionListSuccess: (state, action) => {
      state.loading = false;
      state.questionListData = action.payload.data;
    },
    questionListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    questionDetailLoading: (state, action) => {
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
    questionDeleteLoading: (state, action) => {
      state.loading = true;
      state.questionDeleteData = false;
    },
    questionDeleteSuccess: (state, action) => {
      state.loading = false;
      state.questionDeleteData = action.payload;
    },
    questionDeleteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    answerForQuestionLoading: (state, action) => {
      state.loading = true;
    },
    answerForQuestionSuccess: (state, action) => {
      state.loading = false;
      state.answerData = action.payload;
    },
    answerForQuestionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    replyAnswerLoading: (state, action) => {
      state.loading = true;
    },
    replyAnswerSuccess: (state, action) => {
      state.loading = false;
      state.replyAnswerData = action.payload;
    },
    replyAnswerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteAnswerLoading: (state, action) => {
      state.loading = true;
      state.deleteAnswerData = false;
    },
    deleteAnswerSuccess: (state, action) => {
      state.loading = false;
      state.deleteAnswerData = true;
      state.answerData.data = state.answerData?.data.filter(
        (answer) => answer.commentNo !== action.payload.id
      );
    },
    deleteAnswerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    editAnswerLoading: (state, action) => {
      state.loading = true;
    },
    editAnswerSuccess: (state, action) => {
      state.loading = false;
      state.editAnswerData = action.payload;
    },
    editAnswerFail: (state, action) => {
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
  noteDeleteLoading,
  noteDeleteSuccess,
  noteDeleteFail,
  saveNoteSuccess,
  saveNoteFail,
  saveNoteLoding,
  reNoteLoding,
  reNoteSuccess,
  reNoteFail,

  questionListLoading,
  questionListSuccess,
  questionListFail,
  questionDetailLoading,
  questionDetailSuccess,
  questionDetailFail,
  questionDeleteLoading,
  questionDeleteSuccess,
  questionDeleteFail,
  answerForQuestionLoading,
  answerForQuestionSuccess,
  answerForQuestionFail,
  replyAnswerLoading,
  replyAnswerSuccess,
  replyAnswerFail,
  deleteAnswerLoading,
  deleteAnswerSuccess,
  deleteAnswerFail,
  editAnswerLoading,
  editAnswerSuccess,
  editAnswerFail,
} = dashboardReducer.actions;

export default dashboardReducer.reducer;
