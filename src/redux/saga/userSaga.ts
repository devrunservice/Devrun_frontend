import { AxiosResponse } from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { LoginFormType } from "types";
import { userData } from "api";
import {
  userTmiPending,
  userTmiFulfilled,
  userTmiRejected,
} from "../reducer/userReducer";


export const fetchUserTmi = createAction<LoginFormType>("fetchUserTmi");


// call-데이터 부름  put - 데이터 내보냄
// takeEvery - 여러번 반복작업을 해야할때 순서 상관없이 모두 추가해야할떄
// takeLatest - 여러번 반복작업하는데 최종작업만 반영됨.
// fork - 비동기 작업을 해야할때
function* fetchDataSaga(
  params: PayloadAction<LoginFormType>,
): Generator<any, void, AxiosResponse<any, any>> {
  try {
    // 데이터를 가져오는중
    yield put(userTmiPending());
    // 데이터를 옴
    const data = yield call(userData.data, params.payload);
    // 성공적으로 데이터를 가져왓다면 성공 action에 내보냄.
    yield put(userTmiFulfilled(data.data));
  } catch (err) {
    // 데이터가져오는게 실패했다면 실패 action에 내보냄.
    yield put(userTmiRejected(err));
  }
}

function* watchFetchDataSaga() {
  yield takeEvery(fetchUserTmi.type, fetchDataSaga);
}
// export default function* userSaga() {
//   // tmiDataStart의 데이터가 최신화 됫다면 fetchDataSaga 재실행한다.
//   yield takeLatest(userTmiPending.type, fetchDataSaga);
// }



export default function* userSaga() {
  yield all([ watchFetchDataSaga() ]);
}

