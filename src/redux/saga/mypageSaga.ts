/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { mypage } from "utils/api";
import { MypageType } from "types";
import {
  getDataLoading,
  getDataSuccess,
  getDataFail,
  updateEmailSuccess,
  updateEmailFail,
  updateEmailLoading,
  updatePhonenumberLoading,
  updatePhonenumberSuccess,
  updatePhonenumberFail,
  updateProfileImageLoading,
  updateProfileImageSuccess,
  updateProfileImageFail,
} from "../reducer/mypageReducer";
import { openModal } from "../reducer/modalReducer";

function* getUserDataSaga(
  action: PayloadAction<MypageType>,
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.profile, action.payload);
    console.log(response);
    yield put(getDataSuccess(response));
  } catch (error) {
    yield put(getDataFail(error));
  }
}

function* updateEmailSaga(
  action: PayloadAction<MypageType>,
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.updateEmail, action.payload);
    console.log(response);
    yield put(updateEmailSuccess(response));
  } catch (error: any) {
    yield put(updateEmailFail(error));
  }
}

function* updatePhonenumberSaga(
  action: PayloadAction<MypageType>,
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.updatePhonenumber, action.payload);
    console.log(response);
    yield put(updatePhonenumberSuccess(response));
  } catch (error) {
    yield put(updatePhonenumberFail(error));
    yield put(openModal(error));
  }
}

function* updateProfileImageSaga(
  action: PayloadAction<FormData>,
): Generator<any, void, any> {
  try {
    console.log("이미지 수정 사가 시작");
    const response = yield call(mypage.updateProfileImage, action.payload);
    console.log(response);
    yield put(updateProfileImageSuccess(response));
  } catch (error) {
    yield put(updateProfileImageFail(error));
    yield put(openModal(error));
  }
}

export function* watchgetUserDataSaga() {
  yield takeLatest(getDataLoading.type, getUserDataSaga);
}

export function* watchUpdateEmailSaga() {
  yield takeLatest(updateEmailLoading.type, updateEmailSaga);
}

export function* watchUpdatePhonenumberSaga() {
  yield takeLatest(updatePhonenumberLoading.type, updatePhonenumberSaga);
}

export function* watchUpdateProfileImageSaga() {
  yield takeLatest(updateProfileImageLoading.type, updateProfileImageSaga);
}