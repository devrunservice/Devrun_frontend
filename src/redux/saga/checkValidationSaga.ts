/* eslint-disable @typescript-eslint/no-unused-vars */
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { signup } from "utils";
import { PayloadAction } from "@reduxjs/toolkit";
import { CreateUser } from "types";
import { setDuplicatedId, setUser } from "../reducer/checkValidationReducer";

function* createUserSaga(
  action: PayloadAction<CreateUser>,
): Generator<any, void, any> {
  try {
    const response = yield call(signup.createUser, action.payload);
    console.log(response);
    yield put(setUser(response.data));
  } catch (error) {
    // 에러 처리
  }
}

function* checkDuplicatedIdSaga(
  action: PayloadAction<string>,
): Generator<any, void, any> {
  try {
    const response = yield call(signup.getDuplicatedId, {
      id: action.payload,
    });
    if (response.data === 0) {
      yield put(
        setDuplicatedId({
          idDuplication: true,
          idMessage: "사용 가능한 아이디입니다.",
        }),
      );
    } else if (response.data === 1) {
      yield put(
        setDuplicatedId({
          idDuplication: false,
          idMessage: "이미 사용중인 아이디입니다.",
        }),
      );
    }
  } catch (error) {
    throw new Error("중복 확인에 실패했습니다.");
  }
}

export function* watchCheckValidationSaga() {
  yield takeLatest(setUser, createUserSaga);
  yield takeLatest(setDuplicatedId, checkDuplicatedIdSaga);
}
