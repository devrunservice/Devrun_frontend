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
  questionLectureLoading,
  questionLectureSuccess,
  questionLectureFail,
  questionLoading,
  questionSuccess,
  questionFail,
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

function* questionLecture(
  action: PayloadAction<NotePropsType>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.questionLecture, action.payload);
    yield put(questionLectureSuccess(response));
  } catch (error: any) {
    yield put(questionLectureFail(error));
  }
}

function* question(): Generator<any, void, any> {
  try {
    const response = yield call(mypage.question);
    yield put(questionSuccess(response));
  } catch (error: any) {
    yield put(questionFail(error));
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

export function* watchQuestionLectureSaga() {
  yield takeLatest(questionLectureLoading.type, noteLecture);
}

export function* watchQuestionSaga() {
  yield takeLatest(questionLoading.type, question);
}

export default function* dashboardSaga() {
  yield all([
    fork(watchLearningSaga),
    fork(watchNoteLectureSaga),
    fork(watchNoteListSaga),
    fork(watchNoteDetailSaga),
    fork(watchQuestionLectureSaga),
    fork(watchQuestionSaga),
  ]);
}
