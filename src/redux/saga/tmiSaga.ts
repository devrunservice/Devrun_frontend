import { takeLatest, put, call } from "redux-saga/effects";
import { userData } from "api";
import tmiSlice from "redux/slices/tmiSlice";

// function* tmiSaga(action:any):Generator<any,void,any>{
//     try {
//         const response = yield call(userData.data);
//         console.log(response)
//         yield put(tmiSlice.success(response));
//     } catch (error) {
//         yield put(tmiSlice.fail(error));
//     }
// }

// function* SignupSaga(action: any): Generator<any, void, any> {
//   try {
//     const response = yield call(createUser, action.payload);
//     console.log(response);
//     yield put(signupReducerActions.success(response));
//   } catch (error) {
//     yield put(signupReducerActions.fail(error));
//   }
// }

// // action.type이 loading인 객체가 올 때 signupSaga 실행
// function* watchSignup() {
//   yield takeEvery(signupReducerActions.loading, SignupSaga);
// }

// export default function* signupSaga() {
//   yield all([fork(watchSignup)]);
// }

// function TmiDataSaga(action:any):Generator<any,void,any> {
//   try {
//     const response = yield call(userData.data, action.payload);
//     yield put(signupReducerActions.success(response));
//   } catch (error) {
//     yield put(tmiDataFailure(error.message));
//   }
// }

// export const dataSaga = () =>{
//   yield takeLatest("data/fetchData", fetchDataSaga);
// }

export {};
