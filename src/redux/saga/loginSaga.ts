/* eslint-disable @typescript-eslint/no-unused-vars */
import { redirect } from "react-router-dom";
import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { login } from "api";
import { removeCookie } from "api/cookies";
import { LoginFormType, TokenType } from "types";
import { openModal } from "../reducer/modalReducer";
import {
  loginFail,
  loginLoading,
  loginSuccess,
  logoutLoading,
  logoutSuccess,
} from "../reducer/loginReducer";

function* loginSaga(
  action: PayloadAction<LoginFormType>,
): Generator<any, void, any> {
  try {
    const response = yield call(login.checkLoginUser, action.payload);
    console.log(response);
    yield put(loginSuccess(response));
  } catch (error: any) {
    yield put(loginFail(error));
    yield put(openModal(error.message));
  }
}

function* logoutSaga(
  action: PayloadAction<TokenType>,
): Generator<any, void, any> {
  try {
    const response = yield call(login.checkLogout, action.payload);
    console.log(response);
    yield put(logoutSuccess(response));
    // removeCookie("accessToken");
    // removeCookie("refreshToken");
    // localStorage.clear();
  } catch (error) {
    console.log(error);
  }
}

// function* kakaoSaga(action) {
//   try {
//     const response = yield call(login.)
//   }
// };

export function* watchLoginSaga() {
  yield takeLatest(loginLoading.type, loginSaga);
}

export function* watchLogoutSaga() {
  yield takeLatest(logoutLoading.type, logoutSaga);
}
