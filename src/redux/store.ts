import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { watchCheckValidationSaga } from "./saga/checkValidationSaga";
import {
  watchKakaoLoginSaga,
  watchLoginSaga,
  watchLogoutSaga,
} from "./saga/loginSaga";
import rootReducer from "./persist";
import { watchFetchDataSaga } from "./saga/userSaga";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    watchCheckValidationSaga(),
    watchLoginSaga(),
    watchLogoutSaga(),
    watchKakaoLoginSaga(),
    watchFetchDataSaga(),
  ]);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

export default store;

export const persistor = persistStore(store);
