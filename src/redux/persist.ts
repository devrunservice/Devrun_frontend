import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./reducer/modalReducer";
import userReducer from "./reducer/userReducer";
import loginReducer from "./reducer/loginReducer";
import createVideoSlice from "./reducer/createVideoReducer";
import mypageReducer from "./reducer/mypageReducer";
import validationReducer from "./reducer/validationReducer";
import googleLoginSlice from './reducer/googleLoginReducer'

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
  googleLoginSlice,
});

export default persistReducer(persistConfig, rootReducer);
