/* eslint-disable @typescript-eslint/no-unused-vars */
import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {search} from 'utils/api';
import {  Lectureid, MainList, Search } from "types";
import {
  ratingLectureSuccess,
  ratingLectureFail,
  ratingLectureLoading,
  buyLectureSuccess,
  buyLectureFail,
  buyLectureLoading,
  categorySearchSuccess,
  categorySearchFail,
  categorySearchLoading,
  LectureDetailSuccess,
  LectureDetailFail,
  LectureDetailLoading,
  LectureDetailTextSuccess,
  LectureDetailTextFail,
  LectureDetailTextLoading,
} from "../reducer/learningReducer";


function* ratingLecture(
  action: PayloadAction<MainList>
): Generator<any, void, any> {
  try {
    const response = yield call(search.search, action.payload);
    yield put(ratingLectureSuccess(response));
  } catch (error: any) {
    yield put(ratingLectureFail(error));
  }
}
function* buyLecture(
  action: PayloadAction<MainList>
): Generator<any, void, any> {
  try {
    
    const response = yield call(search.search, action.payload);
    yield put(buyLectureSuccess(response));
  } catch (error: any) {
    yield put(buyLectureFail(error));
  }
}

function* cateSearch(action: PayloadAction<Search>): Generator<any, void, any> {
  try {
    const response = yield call(search.categorySearch, action.payload);
    yield put(categorySearchSuccess(response));
  } catch (error: any) {
    yield put(categorySearchFail(error.message));
  }
}

function* detail(action: PayloadAction<Lectureid>): Generator<any, void, any> {
  try {
    const response = yield call(search.lectureDetail, action.payload);
    yield put(LectureDetailSuccess(response));
  } catch (error: any) {
    yield put(LectureDetailFail(error.message));
  }
}

function* detailtext(action: PayloadAction<Lectureid>): Generator<any, void, any> {
  try {
    const response = yield call(search.lectureDetailtext, action.payload);
    yield put(LectureDetailTextSuccess(response));
  } catch (error: any) {
    yield put(LectureDetailTextFail(error.message));
  }
}


export function* watchCategorySearchSaga() {
  yield takeLatest(categorySearchLoading, cateSearch);
}
export function* watchRatingLectureSaga() {
  yield takeLatest(ratingLectureLoading, ratingLecture);
}
export function* watchBuyLectureSaga() {
  yield takeLatest(buyLectureLoading, buyLecture);
}
export function* watchLectureDetailSaga() {
  yield takeLatest(LectureDetailLoading, detail);
}
export function* watchLectureDetaiTextlSaga() {
  yield takeLatest(LectureDetailTextLoading, detailtext);
}
export default function* learningSaga() {
  yield all([
    fork(watchRatingLectureSaga),
    fork(watchCategorySearchSaga),
    fork(watchBuyLectureSaga),
    fork(watchLectureDetailSaga),
    fork(watchLectureDetaiTextlSaga),
  ]);
}
