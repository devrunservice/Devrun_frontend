/* eslint-disable @typescript-eslint/no-unused-vars */
import {call, put, takeLatest} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {login} from 'utils/api';
import {getCookie, removeCookie, setCookie} from 'utils/cookies';
import {redirect} from 'utils/redirect';
import {decode} from 'utils/decode';
import {LoginFormType} from 'types';
import {
  openModal,
  setKakaoLoginSuccess,
  setRecaptcha,
} from '../reducer/modalReducer';
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
} from '../reducer/loginReducer';

function* loginSaga(
  action: PayloadAction<LoginFormType>
): Generator<any, void, any> {
  try {
    const response = yield call(login.checkLoginUser, action.payload);
    const accessToken = response.data.Access_token.substr(7);
  
    setCookie('accessToken', accessToken, {
      path: '/',
      // https 일때만 통신할 수 있는 것 https일때 true로 바꿔줄것!
      secure: true,
    });
    removeCookie('easyLoginToken', {path: '/', secure: true});
    yield put(loginSuccess(response));
    yield call(redirect, '/home');
  } catch (error: any) {
    yield put(loginFail(error));
    if (error.message === '로그인 횟수를 초과했습니다.') {
      yield put(openModal(error.message));
      yield put(setRecaptcha(true));
    } else {
      yield put(openModal(error.message));
    }
  }
}

function* logoutSaga(): Generator<any, void, any> {
  try {
    const refreshCookie = getCookie('refreshToken');
    // const response = yield call(login.checkLogout, refreshCookie);
    const response = yield call(login.checkLogout);
    yield put(logoutSuccess(response));
    removeCookie('accessToken', {path: '/'});
    // removeCookie('refreshToken', {path: '/'});
    yield call(redirect, '/');
  } catch (error) {
    yield put(logoutFail(error));
    // yield call(redirect, '/home');
  }
}

function* kakaoLoginSaga(
  action: PayloadAction<string>
): Generator<any, void, any> {
  try {
    // 인가 코드 pass
    const response = yield call(login.checkKakaoLogin, action.payload);
    const easyLoginToken = response.data.Easylogin_token;
    if (easyLoginToken) {
      setCookie('easyLoginToken', easyLoginToken.substr(7), {
        path: '/',
        secure: true,
      });
      yield put(kakaoSuccess(response));
      yield put(setKakaoLoginSuccess(true));
      yield put(
        openModal(
          '간편 로그인이 완료되었습니다./로그인을 진행하여 기존 계정과 연동해주세요.'
        )
      );
    } else {
      setCookie('accessToken', response.data.Access_token.substr(7), {
        path: '/',
        secure: true,
      });
      // setCookie("refreshToken", response.data.Refresh_token.substr(7), {
      //   path: "/",
      //   secure: true,
      // });
      yield put(loginSuccess(response));
      yield call(redirect, '/home');
    }
  } catch (error) {
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
