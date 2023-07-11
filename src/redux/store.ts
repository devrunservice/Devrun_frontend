import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import checkValidationReducer from "./reducer/checkValidationReducer";
import modalReducer from "./reducer/modalReducer";
import { watchCheckValidationSaga } from "./saga/checkValidationSaga";
import loginReducer from "./reducer/loginReducer";
import userReducer from "./reducer/userReducer";
import { watchLoginSaga, watchLogoutSaga } from "./saga/loginSaga";
import { watchFetchDataSaga } from "./saga/userSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  checkValidationReducer,
  modalReducer,
  loginReducer,
  userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([
    watchCheckValidationSaga(),
    watchLoginSaga(),
    watchFetchDataSaga(),
    watchLogoutSaga(),
  ]);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
