import { PayloadAction } from "@reduxjs/toolkit";
import { all, fork, put, takeLatest } from "redux-saga/effects";
import { notice } from "utils/api";

// function* noticeGet(action: PayloadAction): Generator<any, void, any> {
//   try {
//     const response = put(notice.list,action.payload);
//      yield put(noticeSuccess(response));
//   } catch (error) {
//     yield put(noticeFail(error));
//   }
// }


// function* watchNotice(){
//     yield takeLatest(noticeLoding, noticeGet);
// }


// export default function* noticeSaga(){
//     yield all([fork(watchNotice)]);
// }