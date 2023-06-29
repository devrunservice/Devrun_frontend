import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./signupReducer";
import signupSaga from "./signupSaga";
import userTmiSlice from "./reducer/userReducer";
import userSaga from "./saga/userSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  signupReducer,
  userTmiSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([signupSaga(), userSaga()]);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;


