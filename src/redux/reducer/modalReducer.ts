import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  modalMessage: "",
  currentPage: "",
  signupSuccess: false,
};

const modalReducer = createSlice({
  name: "modaReducer",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalOpen = true;
      state.modalMessage = action.payload;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.modalMessage = "";
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSignupSuccess: (state, action) => {
      state.signupSuccess = action.payload;
    },
  },
});

export const { openModal, closeModal, setCurrentPage, setSignupSuccess } =
  modalReducer.actions;

export default modalReducer.reducer;
