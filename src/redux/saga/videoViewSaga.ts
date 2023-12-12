import { PayloadAction } from "@reduxjs/toolkit";
import { fork, takeLatest, all, put, call } from "redux-saga/effects";
import { video } from "utils/api";
import { Videos, Progress, GetQuest, SaveQuest, ReQuest } from "types";
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
  saveQuestLoding,
  saveQuestSuccess,
  saveQuestFail,
  reQuestLoding,
  reQuestSuccess,
  reQuestFail,
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
    yield put(getQuestSuccess({page, response  }));
  } catch (error) {
    yield put(getQuestFail(error));
  }
}


function* saveQuest(
  action: PayloadAction<SaveQuest>
): Generator<any, void, any> {
  try {
    const response = yield call(video.saveQuest, action.payload);
    yield put(saveQuestSuccess(response));
  } catch (error) {
    yield put(saveQuestFail(error));
  }
}
function* reQuest(action: PayloadAction<ReQuest>): Generator<any, void, any> {
  try {
    const response = yield call(video.reQuest, action.payload);
    yield put(reQuestSuccess(response));
  } catch (error) {
    yield put(reQuestFail(error));
  }
}
function* watchGetQuest() {
  yield takeLatest(getQuestLoding, getQuest);
}


function* watchCurriculum() {
  yield takeLatest(curriculumLoding, curriculum);
}
function* watchProgress() {
  yield takeLatest(progressLoding, saveProgress);
}
function* watchSaveQuest() {
  yield takeLatest(saveQuestLoding, saveQuest);
}
function* watchReQuest() {
  yield takeLatest(reQuestLoding, reQuest);
}



export default function* viewSaga() {
  yield all([
    fork(watchCurriculum),
    fork(watchProgress),
    fork(watchGetQuest),
    fork(watchSaveQuest),
    fork(watchReQuest),
  ]);
}
