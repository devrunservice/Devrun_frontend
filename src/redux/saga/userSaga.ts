import { call, fork, put, takeLatest, all } from "redux-saga/effects";
import { userData } from "utils/api";
import {
  userInfoLoading,
  userInfoSuccess,
  userInfofail,
} from "../reducer/userReducer";
import { openModal } from "../reducer/modalReducer";


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
function* watchUserInfo() {
  yield takeLatest(userInfoLoading, userInfo);
}
export default function* userInfoSaga(){
  yield all([fork(watchUserInfo)]);
}