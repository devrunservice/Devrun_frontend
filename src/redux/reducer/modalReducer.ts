import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  modalMessage: "",
  currentPage: "",
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
  },
});

export const { openModal, closeModal, setCurrentPage } = modalReducer.actions;

export default modalReducer.reducer;
