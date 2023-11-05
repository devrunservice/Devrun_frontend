import { PayloadAction } from "@reduxjs/toolkit";
import { fork, takeLatest, all, put, call } from "redux-saga/effects";
import { video } from "utils/api";
import { Videos, Progress } from "types";
import {
  curriculumLoding,
  curriculumSuccess,
  curriculumFail,
  progressSuccess,
  progressFail,
  progressLoding,
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

function* watchCurriculum() {
  yield takeLatest(curriculumLoding, curriculum);
}
function* watchProgress() {
  yield takeLatest(progressLoding, saveProgress);
}



export default function* viewSaga() {
  yield all([fork(watchCurriculum), fork(watchProgress)]);
}
