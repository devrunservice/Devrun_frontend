import { takeLatest, all, fork, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { PageNo, ActiveCoupon } from "types";
import { create } from "utils/api";
import {
  couponLoading,
  couponSuccess,
  couponFail,
  couponActiveLoading,
  couponActiveSuccess,
  couponActiveFail,

} from "../reducer/mentoCouponReducer";



function* coupon(action: PayloadAction<PageNo>): Generator<any, void, any> {
  try {
    const response = yield call(create.couponGet, action.payload);
    yield put(couponSuccess(response));
  } catch (error) {
    yield put(couponFail(error));
  }
}
function* couponActive(
  action: PayloadAction<ActiveCoupon>
): Generator<any, void, any> {
  try {
    const response = yield call(create.couponActive, action.payload);
    const {index} = action.payload;
    yield put(couponActiveSuccess({ index, response }));

  } catch (error) {
    yield put(couponActiveFail(error));
  }
}


function* watchCouponActive(){
    yield takeLatest(couponActiveLoading, couponActive);
}
function* watchCoupon() {
  yield takeLatest(couponLoading, coupon);
}
export default function* mentoCouponSaga(){
    yield all([fork(watchCoupon), fork(watchCouponActive)]);
}