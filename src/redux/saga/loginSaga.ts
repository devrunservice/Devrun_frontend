/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from "redux-saga/effects";
import { login } from "api";
import { PayloadAction } from "@reduxjs/toolkit";
import { LoginFormType } from "types";
import { setLogin } from "../reducer/loginReducer";

function* loginSaga(
  action: PayloadAction<LoginFormType>,
): Generator<any, void, any> {
  try {
    const response = yield call(login.checkLoginUser, action.payload);
    console.log(response);
    yield put(setLogin(response.data));
  } catch (error) {
    // 에러 처리
  }
}
export function* watchLoginSaga() {
  yield takeLatest(setLogin, loginSaga);
}
