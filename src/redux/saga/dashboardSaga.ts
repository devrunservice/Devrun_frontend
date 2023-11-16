/* eslint-disable @typescript-eslint/no-unused-vars */
import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {mypage} from 'utils/api';
import {NotePropsType} from 'types';
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
  questionListLoading,
  questionListSuccess,
  questionListFail,
  questionDetailLoading,
  questionDetailSuccess,
  questionDetailFail,
} from '../reducer/dashboardReducer';

function* learning(
  action: PayloadAction<NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.learning, action.payload);
    yield put(learningSuccess(response));
  } catch (error: any) {
    yield put(learningFail(error));
  }
}

function* noteLecture(
  action: PayloadAction<NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.noteLecture, action.payload);
    yield put(noteLectureSuccess(response));
  } catch (error: any) {
    yield put(noteLectureFail(error));
  }
}

function* noteList(
  action: PayloadAction<NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.noteList, action.payload);
    yield put(noteListSuccess(response));
  } catch (error: any) {
    yield put(noteListFail(error));
  }
}

function* noteDetail(
  action: PayloadAction<NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.noteDetail, action.payload);
    yield put(noteDetailSuccess(response));
  } catch (error: any) {
    yield put(noteDetailFail(error));
  }
}

function* questionList(
  action: PayloadAction<NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.questionList);
    yield put(questionListSuccess(response));
  } catch (error: any) {
    yield put(questionListFail(error));
  }
}

function* questionDetail(): Generator<any, void, any> {
  try {
    const response = yield call(mypage.questionDetail);
    yield put(questionDetailSuccess(response));
  } catch (error: any) {
    yield put(questionDetailFail(error));
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

export function* watchQuestionListSaga() {
  yield takeLatest(questionListLoading.type, questionList);
}

export function* watchQuestionDetailSaga() {
  yield takeLatest(questionDetailLoading.type, questionDetail);
}

export default function* dashboardSaga() {
  yield all([
    fork(watchLearningSaga),
    fork(watchNoteLectureSaga),
    fork(watchNoteListSaga),
    fork(watchNoteDetailSaga),
    fork(watchQuestionListSaga),
    fork(watchQuestionDetailSaga),
  ]);
}
