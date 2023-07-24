import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  modalMessage1: "",
  modalMessage2: "",
  currentPage: "",
  signupSuccess: false,
};

const modalReducer = createSlice({
  name: "modaReducer",
  initialState,
  reducers: {
    openModal: (state, action) => {
      console.log(action.payload);
      state.modalOpen = true;
      if (action.payload.includes("/")) {
        const message = action.payload.split("/");
        state.modalMessage1 = message[0];
        state.modalMessage2 = message[1];
      } else {
        state.modalMessage1 = action.payload;
      }
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.modalMessage1 = "";
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSignupSuccess: (state, action) => {
      console.log(action.payload);
      state.signupSuccess = action.payload;
    },
  },
});

export const { openModal, closeModal, setCurrentPage, setSignupSuccess } =
  modalReducer.actions;

export default modalReducer.reducer;
