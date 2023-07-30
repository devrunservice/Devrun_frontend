/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import * as St from "./styles";
import { closeModal } from "../../../redux/reducer/modalReducer";
import { logoutLoading } from "../../../redux/reducer/loginReducer";

const Modal = ({ page }: { page?: string }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalOpen = useSelector(
    (state: RootState) => state.modalReducer.modalOpen,
  );
  const modalMessage1 = useSelector(
    (state: RootState) => state.modalReducer.modalMessage1,
  );
  const modalMessage2 = useSelector(
    (state: RootState) => state.modalReducer.modalMessage2,
  );
  const currentPage = useSelector(
    (state: RootState) => state.modalReducer.currentPage,
  );
  const signupSuccess = useSelector(
    (state: RootState) => state.modalReducer.signupSuccess,
  );

  const handleClick = () => {
    // 회원가입 성공 시
    dispatch(closeModal());
    if (signupSuccess === true) {
      navigate("/login");
    }

    // 토큰 조작 및 Refresh Token 만료 시
    if (page === "home") {
      dispatch(logoutLoading());
      navigate("/home");
    }
  };

  if (!modalOpen) return null;

  return (
    <St.Section>
      <St.Modal>
        <p>{modalMessage1}</p>
        <p>{modalMessage2}</p>
        <St.Button onClick={handleClick}>확인</St.Button>
      </St.Modal>
    </St.Section>
  );
};

export default Modal;
/* eslint-disable @typescript-eslint/no-unused-vars */
