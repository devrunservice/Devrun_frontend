import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { createUser } from "api";
import { signupReducerActions } from "./signupReducer";

function* SignupSaga(action: any): Generator<any, void, any> {
  try {
    const response = yield call(createUser, action.payload);
    console.log(response);
    yield put(signupReducerActions.success(response));
  } catch (error) {
    yield put(signupReducerActions.fail(error));
  }
}

// action.type이 loading인 객체가 올 때 signupSaga 실행
function* watchSignup() {
  yield takeEvery(signupReducerActions.loading, SignupSaga);
}

export default function* signupSaga() {
  yield all([fork(watchSignup)]);
}
