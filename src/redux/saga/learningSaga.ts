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
  ratingLectureTwoSuccess,
  ratingLectureTwoFail,
  ratingLectureTwoLoading,
  buyLectureTwoSuccess,
  buyLectureTwoFail,
  buyLectureTwoLoading,
  categorySearchSuccess,
  categorySearchFail,
  categorySearchLoading,
  categorySearchSuccessTwo,
  categorySearchFailTwo,
  categorySearchLoadingTwo,
  LectureDetailSuccess,
  LectureDetailFail,
  LectureDetailLoading,

  LectureDetailCommentSuccess,
  LectureDetailCommentFail,
  LectureDetailCommentLoading,
  LectureDetailCommentGetSuccess,
  LectureDetailCommentGetFail,
  LectureDetailCommentGetLoading,
  categorySearchLoadingThr,
  categorySearchSuccessThr,
  categorySearchFailThr,
  categorySearchLoadingFour,
  categorySearchSuccessFour,
  categorySearchFailFour
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

function* ratingLectureTwo(
  action: PayloadAction<MainList>
): Generator<any, void, any> {
  try {
    const response = yield call(search.searchTwo, action.payload);
    yield put(ratingLectureTwoSuccess(response));
  } catch (error: any) {
    yield put(ratingLectureTwoFail(error));
  }
}
function* buyLectureTwo(
  action: PayloadAction<MainList>
): Generator<any, void, any> {
  try {
    const response = yield call(search.searchTwo, action.payload);
    yield put(buyLectureTwoSuccess(response));
  } catch (error: any) {
    yield put(buyLectureTwoFail(error));
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
function* cateSearchThr(
  action: PayloadAction<Search>
): Generator<any, void, any> {
  try {
    const response = yield call(search.categorySearchTwo, action.payload);
    yield put(categorySearchSuccessThr(response));
  } catch (error: any) {
    yield put(categorySearchFailThr(error.message));
  }
}
function* cateSearchFour(
  action: PayloadAction<Search>
): Generator<any, void, any> {
  try {
    const response = yield call(search.categorySearchTwo, action.payload);
    yield put(categorySearchSuccessFour(response));
  } catch (error: any) {
    yield put(categorySearchFailFour(error.message));
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
export function* watchCategorySearchSagaThr() {
  yield takeLatest(categorySearchLoadingThr, cateSearchThr);
}
export function* watchCategorySearchSagaFour() {
  yield takeLatest(categorySearchLoadingFour, cateSearchFour);
}
export function* watchRatingLectureSaga() {
  yield takeLatest(ratingLectureLoading, ratingLecture);
}
export function* watchRatingLectureTwoSaga() {
  yield takeLatest(ratingLectureTwoLoading, ratingLectureTwo);
}
export function* watchBuyLectureTwoSaga() {
  yield takeLatest(buyLectureTwoLoading, buyLectureTwo);
}

export function* watchBuyLectureSaga() {
  yield takeLatest(buyLectureLoading, buyLecture);
}
export function* watchLectureDetailSaga() {
  yield takeLatest(LectureDetailLoading, detail);
}

export function* watchLectureDetailCommentlSaga() {
  yield takeLatest(LectureDetailCommentLoading, lectureDetailComment);
}
export function* watchLectureDetailGetCommentlSaga() {
  yield takeLatest(LectureDetailCommentGetLoading, lectureDetailGetComment);
}

export default function* learningSaga() {
  yield all([
    fork(watchBuyLectureTwoSaga),
    fork(watchRatingLectureTwoSaga),
    fork(watchBuyLectureSaga),
    fork(watchRatingLectureSaga),
    fork(watchCategorySearchSagaThr),
    fork(watchCategorySearchSagaFour),
    fork(watchCategorySearchSagaTwo),
    fork(watchCategorySearchSaga),
    fork(watchLectureDetailSaga),
    fork(watchLectureDetailCommentlSaga),
    fork(watchLectureDetailGetCommentlSaga),
  ]);
}
