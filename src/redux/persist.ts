import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./reducer/modalReducer";
import loginReducer from "./reducer/loginReducer";
import createVideoSlice from "./reducer/createVideoSlice";
import mypageReducer from "./reducer/mypageReducer";
import validationReducer from "./reducer/validationReducer";
import mentoCouponReducer from "./reducer/mentoCouponReducer"
import couponReducer from "./reducer/couponReducer"
import pointReducer from "./reducer/pointReducer";
import userReducer from "./reducer/userReducer";
import noticeReducer from "./reducer/noticeReducer";
import cartReducer from "./reducer/cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  modalReducer,
  loginReducer,
  userReducer,
  createVideoSlice,
  mypageReducer,
  validationReducer,
  mentoCouponReducer,
  couponReducer,
  pointReducer,
  noticeReducer,
  cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
