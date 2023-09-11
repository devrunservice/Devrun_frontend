import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, takeLatest, put } from "redux-saga/effects";
import { PageNo } from "types";
import { notice } from "utils/api";
import {
  noticeListLoading,
  noticeListSuccuss,
  noticeListFail,
} from "../reducer/noticeReducer";


// function* noticeWrite(
//   action: PayloadAction<noticeWrite>
// ): Generator<any, void, any> {
//     try {
//       const response = yield call(notice.write, action.payload);
//       yield put(noticeWriteSuccess(response));
//     } catch (error) {
//       yield put(noticeWriteFail(error));
//     }
// }

function* noticeList(action: PayloadAction<PageNo>): Generator<any, void, any> {
  try {
    const response = yield call(notice.list, action.payload);
    yield put(noticeListSuccuss(response));
  } catch (error) {
    yield put(noticeListFail(error));
  }
}



function* watchNoticeList() {
  yield takeLatest(noticeListLoading, noticeList);
}


// function* watchNoticeWrite(){
//     yield takeLatest(noticeWriteSuccuss,noticeWrite)
// }


export default function* noticeSaga(){
    yield all([ fork(watchNoticeList)]);
}