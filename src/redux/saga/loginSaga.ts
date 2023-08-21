/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { login } from "utils/api";
import { getCookie, removeCookie, setCookie } from "utils/cookies";
import { redirect } from "utils/redirect";
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
    // const refreshToken = response.data.Refresh_token.substr(7);
    const offset = 1000 * 60 * 60 * 9;
    const expirationDate = new Date(new Date().getTime() + offset);
    expirationDate.setMinutes(expirationDate.getMinutes() + 1);
    // setCookie("accessToken", accessToken, {
    //   // 모든페이지에서 쿠키 엑세스 가능
    //   path: "/",
    //   // https 일때만 통신할 수 있는 것 https일때 true로 바꿔줄것!
    //   secure: false,
    //   // 쿠키 훔쳐가는거 막음 로컬에서는 사용이 안된다함
    //   httpOnly: true,
    //   // 쿠키 만료 날짜
    //   expires: expirationDate,
    // });
    // setCookie("refreshToken", refreshToken, {
    //   path: "/",
    //   secure: false,
    //   httpOnly: true,
    //   expires: expirationDate,
    // });
    // 만료된 토큰
    // const accessToken =
    //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYmIyMjIiLCJpYXQiOjE2OTAzNzcwODAsImV4cCI6MTY5MDQ2MzQ4MH0.RbkMntKliTUQK5mSjBcfjY9-X46n1tiXklFJddBnImgc3ctpEiv95tHivqMeDj6xbqZW9NMC_wD1TNFbwtIIpw";
    // const refreshToken =
    //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYmIyMjIiLCJuYW1lIjoi7ZmN6ri464-ZIiwianRpIjoiMjk4MTVhYTYtOTlhNS00NmJkLWE0YTktNTgyNmQ0YzQwMzA4IiwiZXhwIjoxNjkwMzc3OTgwfQ.qgpP8Oa79AkKggbb3jQ-IkKuN-Lp_jrHN-S6XNnKtQSPcy2lspxPH5cgyhHrWsIfPqunOSCqV9-k-DAv8Qp8AA";
    setCookie("accessToken", accessToken, { path: "/" });
    // setCookie("refreshToken", refreshToken, { path: "/" });
    removeCookie("easyLoginToken", { path: "/" });
    yield put(loginSuccess(response));
    yield call(redirect, "/home");
  } catch (error: any) {
    yield put(loginFail(error));
    yield put(openModal(error.message));
  }
}

function* logoutSaga(): Generator<any, void, any> {
  try {
    // const refreshCookie = getCookie("refreshToken");
    // const response = yield call(login.checkLogout, refreshCookie);
    // yield put(logoutSuccess(response));
    removeCookie("accessToken");
    // removeCookie("refreshToken");
    yield call(redirect, "/");
  } catch (error) {
    yield put(logoutFail(error));
    yield call(redirect, "/home");
  }
}

function* kakaoLoginSaga(
  action: PayloadAction<string>,
): Generator<any, void, any> {
  try {
    // 인가 코드 pass
    console.log("카카오 로그인 사가 작동");
    const response = yield call(login.checkKakaoLogin, action.payload);
    console.log(response);
    const easyLoginToken = response.data.Easylogin_token;
    if (easyLoginToken) {
      setCookie("easyLoginToken", easyLoginToken.substr(7), { path: "/" });
      yield put(
        openModal(
          "간편 로그인이 완료되었습니다./로그인을 진행하여 기존 계정과 연동해주세요.",
        ),
      );
      yield put(kakaoSuccess(response));
    } else {
      setCookie("accessToken", response.data.Access_token.substr(7), {
        path: "/",
      });
      // setCookie("refreshToken", response.data.Refresh_token.substr(7), {
      //   path: "/",
      // });
      yield put(loginSuccess(response));
      yield call(redirect, "/home");
    }
  } catch (error) {
    console.log(error);
    yield put(kakaoFail(error));
    yield put(openModal(error));
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
