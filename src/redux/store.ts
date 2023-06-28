import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import checkValidationReducer from "./reducer/checkValidationReducer";
import modalReducer from "./reducer/modalReducer";
import { watchCheckValidationSaga } from "./saga/checkValidationSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  checkValidationReducer,
  modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([watchCheckValidationSaga()]);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
