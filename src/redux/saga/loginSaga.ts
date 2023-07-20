/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { login } from "utils";
import { getCookie, removeCookie, setCookie } from "utils/cookies";
import { LoginFormType } from "types";
import { openModal } from "../reducer/modalReducer";
import {
  kakaoFail,
  kakaoLoading,
  kakaoSuccess,
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
    console.log(response);
    const accessToken = response.data.Access_token.substr(7);
    const refreshToken = response.data.Refresh_token.substr(7);
    const offset = 1000 * 60 * 60 * 9;
    const expirationDate = new Date(new Date().getTime() + offset);
    expirationDate.setMinutes(expirationDate.getMinutes() + 1);
    // setCookie("accessToken", accessToken, {
    //   // 모든페이지에서 쿠키 엑세스 가능
    //   path: "/",
    //   // https 일때만 통신할 수 있는 것 https일때 true로 바꿔줄것!
    //   secure: false,
    //   // 쿠키 훔쳐가는거 막음 로컬에서는 사용이 안된다함
    //   // httpOnly: true,
    //   // 쿠키 만료 날짜
    //   expires: expirationDate,
    // });
    setCookie("accessToken", accessToken);
    setCookie("refreshToken", refreshToken);
    // setCookie("refreshToken", refreshToken, {
    //   path: "/",
    //   secure: false,
    //   expires: expirationDate,
    // });
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
    console.log(response);
    yield put(logoutSuccess(response));
    removeCookie("accessToken");
    removeCookie("refreshToken");
    localStorage.clear();
  } catch (error) {
    yield put(logoutFail(error));
  }
}

function* kakaoLoginSaga(
  action: PayloadAction<string>,
): Generator<any, void, any> {
  try {
    const response = yield call(login.checkKakaoLogin, action.payload);
    console.log(response);
    const easyLoginToken = response.data.Easylogin_token;
    if (easyLoginToken) {
      console.log(easyLoginToken);
      localStorage.setItem("easyLoginToken", easyLoginToken.substr(7));
      setCookie("easyLoginToken", easyLoginToken, {
        path: "/login",
      });
      yield put(kakaoSuccess(response));
    } else {
      setCookie("accessToken", response.data.Access_token.substr(7), {
        path: "/",
      });
      setCookie("refreshToken", response.data.Refresh_token.substr(7), {
        path: "/",
      });
      yield put(loginSuccess(response));
    }
  } catch (error) {
    console.log(error);
    yield put(kakaoFail(error));
  }
}

export function* watchLoginSaga() {
  yield takeLatest(loginLoading.type, loginSaga);
}

export function* watchLogoutSaga() {
  yield takeLatest(logoutLoading.type, logoutSaga);
}

export function* watchKakaoLoginSaga() {
  yield takeLatest(kakaoLoading.type, kakaoLoginSaga);
}
