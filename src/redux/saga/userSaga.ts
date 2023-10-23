import {call, delay, fork, put, takeLatest, all} from 'redux-saga/effects';
import {login, userData} from 'utils/api';
import {setCookie} from 'utils/cookies';
import {
  userInfoLoading,
  userInfoSuccess,
  userInfofail,
} from '../reducer/userReducer';
import {openModal} from '../reducer/modalReducer';

function* userInfo(): Generator<any, void, any> {
  try {
    // 데이터를 옴
    const response = yield call(userData.userInfo);
    yield put(userInfoSuccess(response));
  } catch (error: any) {
    yield put(userInfofail(error));
    yield put(openModal(error.message));
  }
}

function* loginTimerSaga(): Generator<any, void, any> {
  while (true) {
    yield delay(15 * 60 * 1000);
    try {
      const response = yield call(login.refreshAccessToken);
      console.log(response);
      const accessToken = response.data.Access_token.substr(7);
      setCookie('accessToken', accessToken, {
        path: '/',
        secure: true,
      });
      console.log('토큰 요청 성공');
    } catch (error) {
      console.log(error);
      yield put(openModal('알 수 없는 오류가 발생했습니다.'));
    }
  }
}

function* watchUserInfo() {
  yield takeLatest(userInfoLoading, userInfo);
}

export function* watchLoginTimerSaga() {
  yield takeLatest(userInfoSuccess.type, loginTimerSaga);
}

export default function* userInfoSaga() {
  yield all([fork(watchUserInfo), fork(watchLoginTimerSaga)]);
}
