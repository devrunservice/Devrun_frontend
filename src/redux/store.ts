import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import rootReducer from './persist';
import authSaga from './saga/loginSaga';
import mypageSaga from './saga/mypageSaga';
import learningSaga from './saga/learningSaga';
import mentoCouponSaga from './saga/mentoCouponSaga';
import couponSaga from './saga/couponSaga';
import userInfoSaga from './saga/userSaga';
import noticeSaga from './saga/noticeSaga';
import cartSaga from './saga/cartSaga';
import videoViewSaga from "./saga/videoViewSaga";


const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    authSaga(),
    mypageSaga(),
    learningSaga(),
    userInfoSaga(),
    mentoCouponSaga(),
    couponSaga(),
    noticeSaga(),
    cartSaga(),
    videoViewSaga(),
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
