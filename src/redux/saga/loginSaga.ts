/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from "redux-saga/effects";
import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { login } from "api";
import { LoginFormType } from "types";
import { loginLoading, loginSuccess, loginFail } from "../reducer/loginReducer";
import { openModal } from "../reducer/modalReducer";

export const loginData = createAction<LoginFormType>("loginData");

function* loginSaga(
  action: PayloadAction<LoginFormType>,
): Generator<any, void, any> {
  try {
    yield put(loginLoading());
    const response = yield call(login.checkLoginUser, action.payload);
    yield put(loginSuccess(response.data));
  } catch (error:any) {
    // 에러 처리
    yield put(loginFail(error));
    yield put(openModal(error.message));
  }
}
export function* watchLoginSaga() {
  yield takeLatest(loginData.type, loginSaga);
}
