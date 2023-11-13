import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from '@reduxjs/toolkit';
import modalReducer from './reducer/modalReducer';
import loginReducer from './reducer/loginReducer';
import createVideoSlice from './reducer/createVideoReducer';
import mypageReducer from './reducer/mypageReducer';
import dashboardReducer from './reducer/dashboardReducer';
import validationReducer from './reducer/validationReducer';
import mentoCouponReducer from './reducer/mentoCouponReducer';
import couponReducer from './reducer/couponReducer';
import userReducer from './reducer/userReducer';
import noticeReducer from './reducer/noticeReducer';
import cartReducer from './reducer/cartReducer';
import googleLoginSlice from './reducer/googleLoginReducer';
import videoViewReducer from "./reducer/videoViewReducer";
import learningReducer from "./reducer/learningReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  modalReducer,
  loginReducer,
  userReducer,
  createVideoSlice,
  mypageReducer,
  dashboardReducer,
  validationReducer,
  mentoCouponReducer,
  couponReducer,
  noticeReducer,
  cartReducer,
  googleLoginSlice,
  videoViewReducer,
  learningReducer,
});

export default persistReducer(persistConfig, rootReducer);
