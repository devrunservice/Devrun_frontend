import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import rootReducer from './persist';
import authSaga from './saga/loginSaga';
import profileSaga from './saga/profileSaga';
import mentoCouponSaga from './saga/mentoCouponSaga';
import couponSaga from './saga/couponSaga';
import userInfoSaga from './saga/userSaga';
import noticeSaga from './saga/noticeSaga';
import cartSaga from './saga/cartSaga';
import videoViewSaga from './saga/videoViewSaga';
import learningSaga from './saga/learningSaga';
import dashboardSaga from './saga/dashboardSaga';
import certificationSaga from './saga/certificationSaga';

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    authSaga(),
    profileSaga(),
    dashboardSaga(),
    userInfoSaga(),
    certificationSaga(),
    mentoCouponSaga(),
    couponSaga(),
    noticeSaga(),
    cartSaga(),
    videoViewSaga(),
    learningSaga(),
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
