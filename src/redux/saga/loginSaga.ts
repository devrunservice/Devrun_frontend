/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { login } from "api";
import { LoginFormType } from "types";
import { openModal } from "../reducer/modalReducer";
import {
  loginAction,
  loginFail,
  loginLoading,
  loginSuccess,
} from "../reducer/loginReducer";

function* loginSaga(
  action: PayloadAction<LoginFormType>,
): Generator<any, void, any> {
  try {
    yield put(loginLoading());
    const response = yield call(login.checkLoginUser, action.payload);
    yield put(loginSuccess(response));
  } catch (error: any) {
    yield put(loginFail(error));
    yield put(openModal(error.message));
  }
}
export function* watchLoginSaga() {
  yield takeLatest(loginAction.type, loginSaga);
}
