import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, takeLatest,put } from "redux-saga/effects";
import { PageNo } from "types";
import { mypage } from "utils/api";
import { pointLoading, pointSuccess, pointFail } from "../reducer/pointReducer";


function* point(action: PayloadAction<PageNo>):Generator<any,void,any> {
    try {
        console.log(action);
        const response = yield call(mypage.point, action.payload);
         yield put(pointSuccess(response));
    } catch (error) {
        yield put(pointFail(error));
    }
}


function* watchPoint(){
    yield takeLatest(pointLoading,point);
}


export default function* pointSaga(){
    yield all([fork(watchPoint)]);
}