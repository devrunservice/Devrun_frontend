import { all, call, fork, takeLatest,put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "utils/api";
import { bastetCheck, Curriculum, LectureInfoList } from "types";
import {
  cartInfoSuccess,
  cartInfoFail,
  cartInfoLoading,
  cartDeleteLoading,
  cartDeleteSuccess,
  cartDeleteFail,
  cartCouponLoading,
  cartCouponSuccess,
  cartCouponFail,
  addCartSuccess,
  addCartFail,
  addCartLoading,
  saveCartSuccess,
  saveCartFail,
  saveCartLoading,
} from "../reducer/cartReducer";



function* cartInfo():Generator<any,void,any>{
    try {
        const response = yield call(Cart.list)
        yield put(cartInfoSuccess(response))
    } catch (error) {
         yield put(cartInfoFail(error))
    }

}

function* cartDelete(
  action: PayloadAction<LectureInfoList>
): Generator<any, void, any> {
  try {
    const response = yield call(Cart.delete, action.payload);
    yield put(cartDeleteSuccess(response));
  } catch (error) {
    yield put(cartDeleteFail(error));
  }
}
function* cartCoupon(
  action: PayloadAction<LectureInfoList[]>
): Generator<any, void, any> {
  try {
    const response = yield call(Cart.coupon, action.payload);
    yield put(cartCouponSuccess(response));
  } catch (error) {
    yield put(cartCouponFail(error));
  }
}

function* addCart(
  action: PayloadAction<Curriculum>
): Generator<any, void, any> {
  try {
    const response = yield call(Cart.add, action.payload);
    yield put(addCartSuccess(response));
  } catch (error) {
    yield put(addCartFail(error));
  }
}
function* saveCart(
  action: PayloadAction<bastetCheck[]>
): Generator<any, void, any> {
  try {
    const response = yield call(Cart.save, action.payload);
    yield put(saveCartSuccess(response));
  } catch (error) {
    yield put(saveCartFail(error));
  }
}



function* watchCartInfo(){
    yield takeLatest(cartInfoLoading, cartInfo);
}
function* watchCartDelete() {
  yield takeLatest(cartDeleteLoading, cartDelete);
}
function* watchCartCoupon() {
  yield takeLatest(cartCouponLoading, cartCoupon);
}
function* watchAddCart() {
  yield takeLatest(addCartLoading, addCart);
}
function* watchSaveCart() {
  yield takeLatest(saveCartLoading, saveCart);
}
export default function* cartSaga(){
    yield all([
      fork(watchCartInfo),
      fork(watchCartDelete),
      fork(watchCartCoupon),
      fork(watchAddCart),
      fork(watchSaveCart),
    ]);
}
