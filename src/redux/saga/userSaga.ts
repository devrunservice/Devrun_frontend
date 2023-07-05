import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { tmi } from "types";
import { userData } from "api";
import {
  fetchUserTmi,
  userTmiPending,
  userTmiFulfilled,
  userTmiRejected,
} from "../reducer/userReducer";


// call-데이터 부름  put - 데이터 내보냄
// takeEvery - 여러번 반복작업을 해야할때 순서 상관없이 모두 추가해야할떄
// takeLatest - 여러번 반복작업하는데 최종작업만 반영됨.
// fork - 비동기 작업을 해야할때
function* fetchDataSaga(action: PayloadAction<tmi>): Generator<any, void, any> {
  try {
    // 데이터를 가져오는중
    yield put(userTmiPending());
    // 데이터를 옴
    const response = yield call(userData.createUser, action.payload);
    console.log(response);
    // 성공적으로 데이터를 가져왓다면 성공 action에 내보냄.
    yield put(userTmiFulfilled(response));
  } catch (err: any) {
    // 데이터가져오는게 실패했다면 실패 action에 내보냄.
    yield put(userTmiRejected(err));
  }
}

export function* watchFetchDataSaga() {
  yield takeLatest(fetchUserTmi.type, fetchDataSaga);
}
