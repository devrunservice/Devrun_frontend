import { PayloadAction } from "@reduxjs/toolkit";
import { signup } from "api";
import { call, put, takeLatest } from "redux-saga/effects";

function* checkDuplicatedUserIdSaga(
  action: PayloadAction<string>,
): Generator<any, void, any> {
  // try {
  //   const response = yield call(signup.getDuplicatedUserId, {
  //     userId: action.payload,
  //   });
  //   if (response.data === 0) {
  //     yield put(setUserIdDuplicationMessage("사용 가능한 아이디입니다."));
  //   } else if (response.data === 1) {
  //     yield put(setUserIdDuplicationMessage("이미 사용중인 아이디입니다."));
  //   }
  // } catch (error) {
  //   console.log("Error:", error);
  // }
}

// export function* validSaga() {
//   yield takeLatest(setUserId.type, checkDuplicatedUserIdSaga);
// }
