import { PayloadAction } from "@reduxjs/toolkit";
import { fork, takeLatest ,all,call,put} from "redux-saga/effects";
import { CouponGet } from "types";
import { mypage } from "utils/api";
import {
  couponListLoading,
  couponListSuccess,
  couponListFail,
  couponGetSuccess,
  couponGetFail,
  couponGetLoading,
} from "../reducer/couponReducer";

function* couponGet(
  action: PayloadAction<CouponGet>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.coupon, action.payload);
    yield put(couponGetSuccess(response));
  } catch (error) {
    yield put(couponGetFail(error));
  }
}
function* couponList(): Generator<any, void, any> {
  try {
    const response = yield call(mypage.couponGet);
    yield put(couponListSuccess(response));
  } catch (error) {
    yield put(couponListFail(error));
  }
}


function* watchCouponGet(){
    yield takeLatest(couponGetLoading,couponGet)
}
function* watchCouponList() {
  yield takeLatest(couponListLoading, couponList);
}

export default function* couponSaga(){
    yield all([fork(watchCouponList), fork(watchCouponGet)]);
}