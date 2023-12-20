import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {mypage} from 'utils/api';
import {
  certificationListLoading,
  certificationListSuccess,
  certificationListFail,
  certificationDetailLoading,
  certificationDetailSuccess,
  certificationDetailFail,
} from '../reducer/certificationReducer';

function* certificationListSaga(
  action: PayloadAction<{page: number}>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.certificationList, action.payload);
    yield put(certificationListSuccess(response));
  } catch (error: any) {
    yield put(certificationListFail(error));
  }
}

function* certificationDetailSaga(
  action: PayloadAction<{lectureId: number}>
): Generator<any, void, any> {
  try {
    const response = yield call(mypage.certificationDetail, action.payload);
    yield put(certificationDetailSuccess(response));
  } catch (error: any) {
    yield put(certificationDetailFail(error));
  }
}

export function* watchCertificationListSaga() {
  yield takeLatest(certificationListLoading, certificationListSaga);
}

export function* watchCertificationDetailSaga() {
  yield takeLatest(certificationDetailLoading, certificationDetailSaga);
}

export default function* certificationSaga() {
  yield all([fork(watchCertificationListSaga)]);
  yield all([fork(watchCertificationDetailSaga)]);
}
