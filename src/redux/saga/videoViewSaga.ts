import { PayloadAction } from "@reduxjs/toolkit";
import { fork, takeLatest, all, put, call } from "redux-saga/effects";
import { video } from "utils/api";
import { Videos, Progress, Note, Curriculum, ReNote } from "types";
import {
  curriculumLoding,
  curriculumSuccess,
  curriculumFail,
  progressSuccess,
  progressFail,
  progressLoding,
  saveNoteSuccess,
  saveNoteFail,
  saveNoteLoding,
  getNoteSuccess,
  getNoteFail,
  getNoteLoding,
  reNoteLoding,
  reNoteSuccess,
  reNoteFail,
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

function* saveNotes(action: PayloadAction<Note>): Generator<any, void, any> {
  try {
    const response = yield call(video.saveNote, action.payload);
    yield put(saveNoteSuccess(response));
  } catch (error) {
    yield put(saveNoteFail(error));
  }
}
function* getNotes(
  action: PayloadAction<Curriculum>
): Generator<any, void, any> {
  try {
    const response = yield call(video.getNote, action.payload);
    yield put(getNoteSuccess(response));
  } catch (error) {
    yield put(getNoteFail(error));
  }
}
function* reNotes(action: PayloadAction<ReNote>): Generator<any, void, any> {
  try {
    const response = yield call(video.reNote, action.payload);
    const {noteNo} = action.payload
    yield put(reNoteSuccess({ noteNo, response }));
  } catch (error) {
    yield put(reNoteFail(error));
  }
}



function* watchCurriculum() {
  yield takeLatest(curriculumLoding, curriculum);
}
function* watchProgress() {
  yield takeLatest(progressLoding, saveProgress);
}
function* watchSaveNote() {
  yield takeLatest(saveNoteLoding, saveNotes);
}
function* watchGetNote() {
  yield takeLatest(getNoteLoding, getNotes);
}
function* watchReNote() {
  yield takeLatest(reNoteLoding, reNotes);
}


export default function* viewSaga() {
  yield all([
    fork(watchCurriculum),
    fork(watchProgress),
    fork(watchSaveNote),
    fork(watchGetNote),
    fork(watchReNote),
  ]);
}
