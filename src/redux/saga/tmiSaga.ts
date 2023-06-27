import { call, put, takeLatest } from "redux-saga/effects";
import { userData } from "api";
import {
  tmiDataSuccess,
  tmiDataStart,
  tmiDataFailure,
} from "../slices/tmiSlice";


// call-데이터 부름  put - 데이터 내보냄  
// takeEvery - 여러번 반복작업을 해야할때 순서 상관없이 모두 추가해야할떄
// takeLatest - 여러번 반복작업하는데 최종작업만 반영됨.
// fork - 비동기 작업을 해야할때
function* fetchTmiSaga(
  action:any
): Generator<any, void, any> {
  try {
    // 데이터를 가져오는중
    yield put(tmiDataStart());
    // 데이터를 옴
    const response = yield call(userData.data, action.payload);
    // 성공적으로 데이터를 가져왓다면 성공 action에 내보냄.
    console.log(response);
    yield put(tmiDataSuccess(response.data));
  } catch (error) {
    // 데이터가져오는게 실패했다면 실패 action에 내보냄.
    yield put(tmiDataFailure(Response));
  }
}
function* watchTmi() {
  // tmiDataStart의 데이터가 최신화 됫다면 fetchTmiSaga 재실행한다.
  yield takeLatest("tmi/fetchTmi", fetchTmiSaga);
}

export default watchTmi