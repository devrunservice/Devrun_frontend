import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
  modalMessage1: '',
  modalMessage2: '',
  signupSuccess: false,
  kakaoLoginSuccess: false,
  openRecaptcha: false,
};

const modalReducer = createSlice({
  name: 'modaReducer',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalOpen = true;
      if (action.payload.includes('/')) {
        const message = action.payload.split('/');
        state.modalMessage1 = message[0];
        state.modalMessage2 = message[1];
      } else {
        state.modalMessage1 = action.payload;
        state.modalMessage2 = '';
      }
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.modalMessage1 = '';
    },
    setSignupSuccess: (state, action) => {
      state.signupSuccess = action.payload;
    },
    setKakaoLoginSuccess: (state, action) => {
      state.kakaoLoginSuccess = action.payload;
    },
    setRecaptcha: (state, action) => {
      state.openRecaptcha = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  setSignupSuccess,
  setKakaoLoginSuccess,
  setRecaptcha,
} = modalReducer.actions;

export default modalReducer.reducer;
