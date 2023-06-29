import { createSlice } from "@reduxjs/toolkit";

export interface CheckValidationReducerType {
  message: {
    idMessage: string;
    passwordMessage: string;
    passwordConfirmMessage: string;
    emailMessage: string;
    phonenumberMessage: string;
    codeMessage: string;
    idDuplicationMessage: string;
    emailDuplicationMessage: string;
  };
  valid: {
    id: boolean;
    password: boolean;
    passwordConfirm: boolean;
    email: boolean;
    name: boolean;
    birthday: boolean;
    phonenumber: boolean;
    code: boolean;
    codeBtn: boolean;
    checkCodeBtn: boolean;
    idDuplication: boolean;
    emailDuplication: boolean;
  };
}

const initialState: CheckValidationReducerType = {
  message: {
    idMessage: "",
    passwordMessage: "",
    passwordConfirmMessage: "",
    emailMessage: "",
    phonenumberMessage: "",
    codeMessage: "",
    idDuplicationMessage: "",
    emailDuplicationMessage: "",
  },
  valid: {
    id: false,
    password: false,
    passwordConfirm: false,
    email: false,
    name: false,
    birthday: false,
    phonenumber: false,
    code: false,
    codeBtn: false,
    checkCodeBtn: false,
    idDuplication: false,
    emailDuplication: false,
  },
};

const checkValidationReducer = createSlice({
  name: "checkValidationReducer",
  initialState,
  reducers: {
    // 회원가입
    setUser: (state, action) => {
      console.log(action);
      return { ...state, ...action };
    },
    // 아이디 유효성 검사
    setValidId: (state, action) => {
      console.log(action);
      state.valid.id = action.payload.id;
      state.message.idMessage = action.payload.idMessage;
    },
    // 아이디 중복 확인
    setDuplicatedId: (state, action) => {
      console.log(action);
      state.valid.idDuplication = action.payload.id;
      state.message.idDuplicationMessage = action.payload.idDuplicationMessage;
    },
  },
});

export const { setUser, setValidId, setDuplicatedId } =
  checkValidationReducer.actions;

export default checkValidationReducer.reducer;
