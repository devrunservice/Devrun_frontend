import { call, put, takeLatest } from "redux-saga/effects";
import { userData } from "utils/api";
import {
  userTmiPending,
  userTmiFulfilled,
  userTmiRejected,
} from "../reducer/userReducer";
import { openModal } from "../reducer/modalReducer";


function* fetchDataSaga(): Generator<any, void, any> {
  try {
    // 데이터를 옴
    const response = yield call(userData.createUser);
    console.log(response);
    yield put(userTmiFulfilled(response));
  } catch (error: any) {
    yield put(userTmiRejected(error));
    yield put(openModal(error.message));
  }
}

export function* watchFetchDataSaga() {
  yield takeLatest(userTmiPending.type, fetchDataSaga);
}
