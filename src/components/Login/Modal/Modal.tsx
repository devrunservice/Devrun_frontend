/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { PasswordInput } from "components";
import * as St from "./styles";
import { closeModal } from "../../../redux/reducer/modalReducer";
import { logoutLoading } from "../../../redux/reducer/loginReducer";

const Modal = ({ page }: { page?: string }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputForm, setInputForm] = useState({
    password: "",
  });

  const modalOpen = useSelector(
    (state: RootState) => state.modalReducer.modalOpen,
  );
  const modalMessage1 = useSelector(
    (state: RootState) => state.modalReducer.modalMessage1,
  );
  const modalMessage2 = useSelector(
    (state: RootState) => state.modalReducer.modalMessage2,
  );
  const signupSuccess = useSelector(
    (state: RootState) => state.modalReducer.signupSuccess,
  );
  const kakaoLoginSuccess = useSelector(
    (state: RootState) => state.modalReducer.kakaoLoginSuccess,
  );

  const handleClick = () => {
    dispatch(closeModal());

    // 회원가입 성공 시
    if (signupSuccess === true) {
      navigate("/login");
    }

    // 토큰 조작 및 Refresh Token 만료 시
    if (page === "home") {
      dispatch(logoutLoading());
      navigate("/");
    } else {
      navigate("/profileupdate");
    }

    // 카카오 로그인 성공 시
    if (kakaoLoginSuccess === true) {
      navigate("/login");
    }
  };

  useEffect(() => {
    // 모달이 열릴 때 스크롤 비활성화
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      // 모달이 닫힐 때 스크롤 비활성화 스타일 제거
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  if (!modalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputForm({ ...inputForm, [name]: value });
  };

  return (
    <St.Section>
      {page !== "profileUpdate" && (
        <St.Modal>
          <p>{modalMessage1}</p>
          <p>{modalMessage2}</p>
          <St.Button onClick={handleClick}>확인</St.Button>
        </St.Modal>
      )}
      {page === "profileUpdate" && (
        <St.Modal>
          <St.P>비밀번호</St.P>
          <PasswordInput
            name="password"
            value={inputForm.password}
            placeholder="숫자, 영문, 특수문자 조합 최소 8자"
            onChange={handleChange}
          />
          <St.Button onClick={handleClick}>확인</St.Button>
        </St.Modal>
      )}
    </St.Section>
  );
};

export default Modal;
/* eslint-disable @typescript-eslint/no-unused-vars */
