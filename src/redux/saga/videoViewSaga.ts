import { PayloadAction } from "@reduxjs/toolkit";
import { fork, takeLatest, all, put, call } from "redux-saga/effects";
import { video } from "utils/api";
import { Videos, Progress, GetQuest } from "types";
import {
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
} from "../reducer/videoViewReducer";

function* curriculum(action: PayloadAction<Videos>): Generator<any, void, any> {
  try {
    const response = yield call(video.getCurriculum, action.payload);
    yield put(curriculumSuccess(response));
  } catch (error) {
    yield put(curriculumFail(error));
  }
}
function* saveProgress(
  action: PayloadAction<Progress>
): Generator<any, void, any> {
  try {
    const response = yield call(video.progress, action.payload);
    yield put(progressSuccess(response));
  } catch (error) {
    yield put(progressFail(error));
  }
}

function* getQuest(action: PayloadAction<GetQuest>): Generator<any, void, any> {
  try {
    const response = yield call(video.getQuest, action.payload);
    const {page} = action.payload
    yield put(getQuestSuccess({ response, page }));
  } catch (error) {
    yield put(getQuestFail(error));
  }
}
function* getQuestDetail(
  action: PayloadAction<number>
): Generator<any, void, any> {
  try {
    const response = yield call(video.getQuestDetail, action.payload);
    yield put(getQuestDetailSuccess(response));
  } catch (error) {
    yield put(getQuestDetailFail(error));
  }
}

function* watchGetQuest() {
  yield takeLatest(getQuestLoding, getQuest);
}
function* watchGetQuestDetail() {
  yield takeLatest(getQuestDetailLoding, getQuestDetail);
}


function* watchCurriculum() {
  yield takeLatest(curriculumLoding, curriculum);
}
function* watchProgress() {
  yield takeLatest(progressLoding, saveProgress);
}



export default function* viewSaga() {
  yield all([
    fork(watchCurriculum),
    fork(watchProgress),
    fork(watchGetQuest),
    fork(watchGetQuestDetail),
  ]);
}
