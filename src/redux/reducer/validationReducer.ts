/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { IsValidType, IsValidMessageType } from "types";

export interface ValidationReducerType {
  validState: IsValidType;
  messageState: IsValidMessageType;
  error: Error | null;
}

const initialState: ValidationReducerType = {
  validState: {
    id: false,
    password: false,
    passwordConfirm: false,
    email: false,
    name: false,
    // birthday: false,
    phonenumber: false,
    code: false,
    codeBtn: false,
    checkCodeBtn: false,
    idDuplication: false,
    emailDuplication: false,
    profileImage: false,
  },
  messageState: {
    idMessage: "",
    passwordMessage: "",
    passwordConfirmMessage: "",
    emailMessage: "",
    phonenumberMessage: "",
    codeMessage: "",
    idDuplicationMessage: "",
    emailDuplicationMessage: "",
  },
  error: null,
};

const validationReducer = createSlice({
  name: "validationReducer",
  initialState,
  reducers: {
    updateValidState: (state, action) => {
      const { name, value } = action.payload;
      state.validState[name] = value;
    },
    updateMessageState: (state, action) => {
      const { name, message } = action.payload;
      state.messageState[name] = message;
    },
  },
});

export const { updateValidState, updateMessageState } =
  validationReducer.actions;

export default validationReducer.reducer;
/* eslint-disable @typescript-eslint/no-unused-vars */
