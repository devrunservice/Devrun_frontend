import { all } from "redux-saga/effects";
import signupReducer from "./signupReducer";
import signupSaga from "./signupSaga";
import watchTmi from "./saga/tmiSaga";
import tmiSlice from "./slices/tmiSlice";

const rootReducer = {
  signupReducer,
  tmiSlice,
};

export function* rootSaga() {
  yield all([signupSaga, watchTmi]);
}

export default rootReducer;
