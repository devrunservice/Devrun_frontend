import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import checkValidationReducer from "./reducer/checkValidationReducer";
import modalReducer from "./reducer/modalReducer";
import userReducer from "./reducer/userReducer";
import loginReducer from "./reducer/loginReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducer"],
};

const rootReducer = combineReducers({
  checkValidationReducer,
  modalReducer,
  loginReducer,
  userReducer,
});

export default persistReducer(persistConfig, rootReducer);
