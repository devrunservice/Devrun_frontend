/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { login } from "api";
import { getCookie, removeCookie } from "api/cookies";
import { LoginFormType, TokenType } from "types";
import { openModal } from "../reducer/modalReducer";
import {
  loginFail,
  loginLoading,
  loginSuccess,
  logoutFail,
  logoutLoading,
  logoutSuccess,
} from "../reducer/loginReducer";

function* loginSaga(
  action: PayloadAction<LoginFormType>,
): Generator<any, void, any> {
  try {
    const response = yield call(login.checkLoginUser, action.payload);
    yield put(loginSuccess(response));
  } catch (error: any) {
    yield put(loginFail(error));
    yield put(openModal(error.message));
  }
}

function* logoutSaga(): Generator<any, void, any> {
  try {
    const refreshCookie = getCookie("refreshToken");
    const response = yield call(login.checkLogout, refreshCookie);
    yield put(logoutSuccess(response));
    removeCookie("accessToken");
    removeCookie("refreshToken");
    localStorage.clear();
  } catch (error) {
    yield put(logoutFail(error));
  }
}

export function* watchLoginSaga() {
  yield takeLatest(loginLoading.type, loginSaga);
}

export function* watchLogoutSaga() {
  yield takeLatest(logoutLoading.type, logoutSaga);
}
