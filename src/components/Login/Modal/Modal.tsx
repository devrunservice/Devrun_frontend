/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import * as St from "./styles";
import { closeModal } from "../../../redux/reducer/modalReducer";

const Modal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalOpen = useSelector(
    (state: RootState) => state.modalReducer.modalOpen,
  );
  const modalMessage = useSelector(
    (state: RootState) => state.modalReducer.modalMessage,
  );
  const currentPage = useSelector(
    (state: RootState) => state.modalReducer.currentPage,
  );
  const signupSuccess = useSelector(
    (state: RootState) => state.modalReducer.signupSuccess,
  );

  const handleClick = () => {
    dispatch(closeModal());
    if (signupSuccess === true) {
      navigate("/login");
    }
  };

  if (!modalOpen) return null;

  return (
    <St.Section>
      <St.Modal>
        <p>{modalMessage}</p>
        <St.Button onClick={handleClick}>확인</St.Button>
      </St.Modal>
    </St.Section>
  );
};

export default Modal;
/* eslint-disable @typescript-eslint/no-unused-vars */
