/* eslint-disable @typescript-eslint/no-unused-vars */
import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {search} from 'utils/api';
import {  Lectureid, MainList, Reviewrating, Search } from "types";
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
  categorySearchSuccessTwo,
  categorySearchFailTwo,
  categorySearchLoadingTwo,
  LectureDetailSuccess,
  LectureDetailFail,
  LectureDetailLoading,
  LectureDetailTextSuccess,
  LectureDetailTextFail,
  LectureDetailTextLoading,
  LectureDetailCommentSuccess,
  LectureDetailCommentFail,
  LectureDetailCommentLoading,
  LectureDetailCommentGetSuccess,
  LectureDetailCommentGetFail,
  LectureDetailCommentGetLoading,
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
function* cateSearchTwo(
  action: PayloadAction<Search>
): Generator<any, void, any> {
  try {
    const response = yield call(search.categorySearch, action.payload);
    yield put(categorySearchSuccessTwo(response));
  } catch (error: any) {
    yield put(categorySearchFailTwo(error.message));
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

function* lectureDetailComment(
  action: PayloadAction<Reviewrating>
): Generator<any, void, any> {
  try {
    const response = yield call(search.lectureDetailComment, action.payload);
    yield put(LectureDetailCommentSuccess(response));
  } catch (error: any) {
    yield put(LectureDetailCommentFail(error.message));
  }
}

function* lectureDetailGetComment(
  action: PayloadAction<Lectureid>
): Generator<any, void, any> {
  try {
    const response = yield call(search.lectureDetailGetComment, action.payload);
    console.log(response);
    yield put(LectureDetailCommentGetSuccess(response));
  } catch (error: any) {
    yield put(LectureDetailCommentGetFail(error.message));
  }
}


export function* watchCategorySearchSaga() {
  yield takeLatest(categorySearchLoading, cateSearch);
}
export function* watchCategorySearchSagaTwo() {
  yield takeLatest(categorySearchLoadingTwo, cateSearchTwo);
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
export function* watchLectureDetailCommentlSaga() {
  yield takeLatest(LectureDetailCommentLoading, lectureDetailComment);
}
export function* watchLectureDetailGetCommentlSaga() {
  yield takeLatest(LectureDetailCommentGetLoading, lectureDetailGetComment);
}

export default function* learningSaga() {
  yield all([
    fork(watchRatingLectureSaga),
    fork(watchCategorySearchSagaTwo),
    fork(watchCategorySearchSaga),
    fork(watchBuyLectureSaga),
    fork(watchLectureDetailSaga),
    fork(watchLectureDetaiTextlSaga),
    fork(watchLectureDetailCommentlSaga),
    fork(watchLectureDetailGetCommentlSaga),
  ]);
}
