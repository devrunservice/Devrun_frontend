/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from "redux-saga/effects";
import { login } from "api";
import { PayloadAction } from "@reduxjs/toolkit";
import { LoginFormType } from "types";
import { loginFail, loginSuccess } from "../reducer/loginReducer";

function* loginSaga(
  action: PayloadAction<LoginFormType>,
): Generator<any, void, any> {
  try {
    console.log(action.payload);
    const response = yield call(login.checkLoginUser, action.payload);
    console.log(response);
    yield put(loginSuccess(response));
  } catch (error: any) {
    yield put(loginFail(error.response));
  }
}
export function* watchLoginSaga() {
  yield takeLatest(loginSuccess.type, loginSaga);
}
