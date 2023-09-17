import { all, call, fork, takeLatest,put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "utils/api";
import { LectureInfoList } from "types";
import {
  cartInfoSuccess,
  cartInfoFail,
  cartInfoLoading,
  cartDeleteLoading,
  cartDeleteSuccess,
  cartDeleteFail,
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
  action: PayloadAction<LectureInfoList[]>
): Generator<any, void, any> {
  try {
    const response = yield call(Cart.delete, action.payload);
    yield put(cartDeleteSuccess(response));
  } catch (error) {
    yield put(cartDeleteFail(error));
  }
}


function* watchCartInfo(){
    yield takeLatest(cartInfoLoading, cartInfo);
}
function* watchCartDelete() {
  yield takeLatest(cartDeleteLoading, cartDelete);
}
export default function* cartSaga(){
    yield all([fork(watchCartInfo), fork(watchCartDelete)]);
}
