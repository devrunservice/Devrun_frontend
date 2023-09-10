import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import {
  watchKakaoLoginSaga,
  watchLoginSaga,
  watchLogoutSaga,
} from "./saga/loginSaga";
import rootReducer from "./persist";
import { watchFetchDataSaga } from "./saga/userSaga";
import {
  watchgetUserDataSaga,
  watchUpdateEmailSaga,
  watchUpdatePhonenumberSaga,
  watchUpdateProfileImageSaga,
  
} from "./saga/mypageSaga";
import mentoCouponSaga from "./saga/mentoCouponSaga";
import couponSaga from "./saga/couponSaga";
import pointSaga from "./saga/pointSaga";


const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    watchLoginSaga(),
    watchLogoutSaga(),
    watchKakaoLoginSaga(),
    watchFetchDataSaga(),
    watchgetUserDataSaga(),
    watchUpdateEmailSaga(),
    watchUpdatePhonenumberSaga(),
    watchUpdateProfileImageSaga(),
    mentoCouponSaga(),
    couponSaga(),
    pointSaga()
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
