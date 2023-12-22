import { takeLatest, all, fork, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { PageNo, ActiveCoupon, CreateCoupon } from "types";
import { create } from "utils/api";
import {
  couponLoading,
  couponSuccess,
  couponFail,
  couponActiveLoading,
  couponActiveSuccess,
  couponActiveFail,
  createCouponSuccess,
  createCouponFail,
  createCouponLoading,
  createlectureLoading,
  createlectureSuccess,
  createlectureFail,
} from "../reducer/mentoCouponReducer";



function* coupon(action: PayloadAction<PageNo>): Generator<any, void, any> {
  try {
    const response = yield call(create.couponGet, action.payload);
    console.log(response);
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
function* createCoupon(
  action: PayloadAction<CreateCoupon>
): Generator<any, void, any> {
  try {
    const response = yield call(create.coupon, action.payload);
    yield put(createCouponSuccess(response));
  } catch (error) {
    yield put(createCouponFail(error));
  }
}
function* lecture(): Generator<any, void, any> {
  try {
    const response = yield call(create.lecture);
    yield put(createlectureSuccess(response));
  } catch (error) {
    yield put(createlectureFail(error));
  }
}
function* watchCouponActive(){
    yield takeLatest(couponActiveLoading, couponActive);
}
function* watchCoupon() {
  yield takeLatest(couponLoading, coupon);
}
function* watchLecture() {
  yield takeLatest(createlectureLoading, lecture);
}
function* watchCreateCoupon() {
  yield takeLatest(createCouponLoading, createCoupon);
}
export default function* mentoCouponSaga(){
    yield all([
      fork(watchCoupon),
      fork(watchCreateCoupon),
      fork(watchCouponActive),
      fork(watchLecture),
    ]);
}