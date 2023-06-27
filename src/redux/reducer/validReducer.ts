import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ValidReducerState {
  validMessage: {
    userIdMessage: string;
    passwordMessage: string;
    passwordConfirmMessage: string;
    emailMessage: string;
    phonenumberMessage: string;
    codeMessage: string;
    userIdDuplicationMessage: string;
    emailDuplicationMessage: string;
  };
  isValid: {
    userId: boolean;
    password: boolean;
    passwordConfirm: boolean;
    email: boolean;
    name: boolean;
    birthday: boolean;
    phonenumber: boolean;
    code: boolean;
    codeBtn: boolean;
    userIdDuplication: boolean;
    emailDuplication: boolean;
  };
}

const initialState: ValidReducerState = {
  validMessage: {
    userIdMessage: "",
    passwordMessage: "",
    passwordConfirmMessage: "",
    emailMessage: "",
    phonenumberMessage: "",
    codeMessage: "",
    userIdDuplicationMessage: "",
    emailDuplicationMessage: "",
  },
  isValid: {
    userId: false,
    password: false,
    passwordConfirm: false,
    email: false,
    name: false,
    birthday: false,
    phonenumber: false,
    code: false,
    codeBtn: false,
    userIdDuplication: false,
    emailDuplication: false,
  },
};

const validReducer = createSlice({
  name: "validReducer",
  initialState,
  reducers: {},
});

export const {} = validReducer.actions;

export default validReducer.reducer;
