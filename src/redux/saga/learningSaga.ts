/* eslint-disable @typescript-eslint/no-unused-vars */
import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {mypage, search} from 'utils/api';
import { LearningType, Search } from "types";
import {
  learningLoading,
  learningSuccess,
  learningFail,
  mainLectureSuccess,
  mainLectureFail,
  mainLectureLoading,
  categorySearchSuccess,
  categorySearchFail,
  categorySearchLoading,
} from "../reducer/learningReducer";

function* learning(action: PayloadAction<string>): Generator<any, void, any> {
  try {
    const response = yield call(mypage.learning, action.payload);
    yield put(learningSuccess(response));
  } catch (error: any) {
    yield put(learningFail(error));
  }
}

function* mainLecture(): Generator<any, void, any> {
  try {
    const response = yield call(search.search);
    yield put(mainLectureSuccess(response));
  } catch (error: any) {
    yield put(mainLectureFail(error));
  }
}

function* cateSearch(action: PayloadAction<Search>): Generator<any, void, any> {
  try {
    const response = yield call(search.categorySearch, action.payload);
    yield put(categorySearchSuccess(response));
  } catch (error: any) {
    yield put(categorySearchFail(error));
  }
}

export function* watchLearningSaga() {
  yield takeLatest(learningLoading.type, learning);
}
export function* watchCategorySearchSaga() {
  yield takeLatest(categorySearchLoading, cateSearch);
}
export function* watchMainLectureSaga() {
  yield takeLatest(mainLectureLoading, mainLecture);
}
export default function* learningSaga() {
  yield all([
    fork(watchLearningSaga),
    fork(watchMainLectureSaga),
    fork(watchCategorySearchSaga),
  ]);
}
