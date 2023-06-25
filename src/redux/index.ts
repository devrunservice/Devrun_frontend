import { all } from "redux-saga/effects";
import signupReducer from "./signupReducer";
import signupSaga from "./signupSaga";

const rootReducer = {
  signupReducer,
};

export function* rootSaga() {
  yield all([signupSaga]);
}

export default rootReducer;
