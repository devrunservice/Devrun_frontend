/* eslint-disable @typescript-eslint/no-unused-vars */
import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {mypage} from 'utils/api';
import {LearningType} from 'types';
import {
  learningLoading,
  learningSuccess,
  learningFail,
} from '../reducer/learningReducer';

function* learning(action: PayloadAction<string>): Generator<any, void, any> {
  try {
    const response = yield call(mypage.learning, action.payload);
    yield put(learningSuccess(response));
  } catch (error: any) {
    yield put(learningFail(error));
  }
}

export function* watchLearningSaga() {
  yield takeLatest(learningLoading.type, learning);
}

export default function* learningSaga() {
  yield all([fork(watchLearningSaga)]);
}
