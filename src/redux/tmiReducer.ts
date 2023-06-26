import { createSlice } from "@reduxjs/toolkit";
import { takeLatest, put, call } from "redux-saga/effects";
import { userData } from "api";
import { ITmi } from "types";


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



const initialState: ITmi = {
  loading: false,
  data: null,
  error: null,
};

const tmiSlice = createSlice({
  name: "tmi",
  initialState,
  reducers: {
    tmiDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    tmiDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    tmiDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { tmiDataStart, tmiDataSuccess, tmiDataFailure } = tmiSlice.actions;

export default tmiSlice.reducer;
