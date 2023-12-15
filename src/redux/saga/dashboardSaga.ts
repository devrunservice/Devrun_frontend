/* eslint-disable @typescript-eslint/no-unused-vars */
import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {mypage, video} from 'utils/api';
import * as I from 'types';
import {
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
  questionListLoading,
  questionListSuccess,
  questionListFail,
  questionDetailLoading,
  questionDetailSuccess,
  questionDetailFail,
  questionDeleteLoading,
  questionDeleteSuccess,
  questionDeleteFail,
  saveNoteSuccess,
  saveNoteFail,
  saveNoteLoding,
  reNoteLoding,
  reNoteSuccess,
  reNoteFail,
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
} from '../reducer/dashboardReducer';

function* learning(
  action: PayloadAction<I.NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.learning, action.payload);
    yield put(learningSuccess(response));
  } catch (error: any) {
    yield put(learningFail(error));
  }
}

function* noteLecture(
  action: PayloadAction<I.NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.noteLecture, action.payload);
    yield put(noteLectureSuccess(response));
  } catch (error: any) {
    yield put(noteLectureFail(error));
  }
}

function* noteList(
  action: PayloadAction<I.NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.noteList, action.payload);
    const {page} = action.payload;
    yield put(noteListSuccess({response, page}));
  } catch (error: any) {
    yield put(noteListFail(error));
  }
}

function* noteDetail(
  action: PayloadAction<I.NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.noteDetail, action.payload);
    yield put(noteDetailSuccess(response));
  } catch (error: any) {
    yield put(noteDetailFail(error));
  }
}

function* noteDelete(action: PayloadAction<number>): Generator<any, void, any> {
  try {
    yield call(mypage.noteDelete, action.payload);
    yield put(noteDeleteSuccess(action.payload));
  } catch (error: any) {
    yield put(noteDeleteFail(error));
  }
}

function* saveNotes(action: PayloadAction<I.Note>): Generator<any, void, any> {
  try {
    const response = yield call(video.saveNote, action.payload);
    const {noteContent, noteTitle} = action.payload;
    yield put(saveNoteSuccess({noteContent, noteTitle, response}));
  } catch (error) {
    yield put(saveNoteFail(error));
  }
}

function* reNotes(action: PayloadAction<I.ReNote>): Generator<any, void, any> {
  try {
    const response = yield call(video.reNote, action.payload);
    yield put(reNoteSuccess(response));
  } catch (error) {
    yield put(reNoteFail(error));
  }
}

function* questionList(
  action: PayloadAction<I.NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.questionList, action.payload);
    yield put(questionListSuccess(response));
  } catch (error: any) {
    yield put(questionListFail(error));
  }
}

function* questionDetail(
  action: PayloadAction<I.NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.questionDetail, action.payload);
    yield put(questionDetailSuccess(response));
  } catch (error: any) {
    yield put(questionDetailFail(error));
  }
}

function* questionDelete(
  action: PayloadAction<I.NotePropsType>
): Generator<any, void, any> {
  try {
    yield call(mypage.questionDelete, action.payload);
    yield put(questionDeleteSuccess(true));
  } catch (error: any) {
    yield put(questionDeleteFail(error));
  }
}

function* answerForQuestion(
  action: PayloadAction<I.NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.answerForQuestion, action.payload);
    yield put(answerForQuestionSuccess(response));
  } catch (error: any) {
    yield put(answerForQuestionFail(error));
  }
}

function* replyForAnswer(
  action: PayloadAction<I.QuestionReplyType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.replyForAnswer, action.payload);
    yield put(replyAnswerSuccess(response));
  } catch (error: any) {
    yield put(replyAnswerFail(error));
  }
}

function* deleteAnswer(
  action: PayloadAction<I.NotePropsType>
): Generator<any, void, any> {
  try {
    yield call(mypage.deleteAnswer, action.payload);
    yield put(deleteAnswerSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteAnswerFail(error));
  }
}

function* editAnswer(
  action: PayloadAction<I.NotePropsType>
): Generator<any, void, any> {
  try {
    console.log('댓글 수정 사가 실행');
    const response = yield call(mypage.editAnswer, action.payload);
    console.log(response);
    yield put(editAnswerSuccess(response));
  } catch (error: any) {
    yield put(editAnswerFail(error));
  }
}

export function* watchLearningSaga() {
  yield takeLatest(learningLoading.type, learning);
}

export function* watchNoteLectureSaga() {
  yield takeLatest(noteLectureLoading.type, noteLecture);
}

export function* watchNoteListSaga() {
  yield takeLatest(noteListLoading.type, noteList);
}

export function* watchNoteDetailSaga() {
  yield takeLatest(noteDetailLoading.type, noteDetail);
}

export function* watchNoteDeletelSaga() {
  yield takeLatest(noteDeleteLoading.type, noteDelete);
}

export function* watchQuestionListSaga() {
  yield takeLatest(questionListLoading.type, questionList);
}

export function* watchQuestionDetailSaga() {
  yield takeLatest(questionDetailLoading.type, questionDetail);
}

export function* watchQuestionDeleteSaga() {
  yield takeLatest(questionDeleteLoading.type, questionDelete);
}
function* watchSaveNote() {
  yield takeLatest(saveNoteLoding, saveNotes);
}

function* watchReNote() {
  yield takeLatest(reNoteLoding, reNotes);
}

export function* watchAnswerForQuestionSaga() {
  yield takeLatest(answerForQuestionLoading.type, answerForQuestion);
}

export function* watchReplyForAnswerSaga() {
  yield takeLatest(replyAnswerLoading.type, replyForAnswer);
}

export function* watchDeleteAnswerSaga() {
  yield takeLatest(deleteAnswerLoading.type, deleteAnswer);
}

export function* watchEditAnswerSaga() {
  yield takeLatest(editAnswerLoading.type, editAnswer);
}

export default function* dashboardSaga() {
  yield all([
    fork(watchLearningSaga),
    fork(watchNoteLectureSaga),
    fork(watchNoteListSaga),
    fork(watchNoteDetailSaga),
    fork(watchNoteDeletelSaga),
    fork(watchQuestionListSaga),
    fork(watchQuestionDetailSaga),
    fork(watchQuestionDeleteSaga),
    fork(watchSaveNote),
    fork(watchReNote),
    fork(watchAnswerForQuestionSaga),
    fork(watchReplyForAnswerSaga),
    fork(watchDeleteAnswerSaga),
    fork(watchEditAnswerSaga),
  ]);
}
