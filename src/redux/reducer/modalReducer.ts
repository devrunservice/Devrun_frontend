import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
  modalMessage1: '',
  modalMessage2: '',
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
      state.modalMessage2 = '';
    },
  },
});

export const {openModal, closeModal} = modalReducer.actions;

export default modalReducer.reducer;
