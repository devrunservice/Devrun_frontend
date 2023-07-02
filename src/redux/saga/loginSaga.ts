/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from "redux-saga/effects";
import { login } from "api";
import { PayloadAction } from "@reduxjs/toolkit";
import { LoginFormType } from "types";
import { useNavigate } from "react-router-dom";
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
    console.log(action.payload);
    const response = yield call(login.checkLoginUser, action.payload);
    console.log(response);
    yield put(loginSuccess(response));
  } catch (error: any) {
    console.log(error);
    yield put(loginFail(error));
    yield put(openModal(error.message));
  }
}
export function* watchLoginSaga() {
  yield takeLatest(loginAction.type, loginSaga);
}
