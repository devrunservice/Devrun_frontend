/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {Recaptcha} from 'components';
import * as St from './styles';
import {closeModal} from '../../../redux/reducer/modalReducer';
import {logoutLoading} from '../../../redux/reducer/loginReducer';

const Modal = ({page}: {page?: string}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const modalOpen = useSelector(
    (state: RootState) => state.modalReducer.modalOpen
  );
  const modalMessage1 = useSelector(
    (state: RootState) => state.modalReducer.modalMessage1
  );
  const modalMessage2 = useSelector(
    (state: RootState) => state.modalReducer.modalMessage2
  );
  const modalMessage3 = useSelector(
    (state: RootState) => state.modalReducer.modalMessage3
  );
  const signupSuccess = useSelector(
    (state: RootState) => state.modalReducer.signupSuccess
  );
  const kakaoLoginSuccess = useSelector(
    (state: RootState) => state.modalReducer.kakaoLoginSuccess
  );
  const openRecaptcha = useSelector(
    (state: RootState) => state.modalReducer.openRecaptcha
  );

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      dispatch(closeModal());
    }
  };

  const handleClick = () => {
    // 기본적으로 모달에서 확인을 누를 경우 모달이 닫힘
    dispatch(closeModal());

    // 회원가입 성공 시
    if (signupSuccess === true) {
      navigate('/login');
    }

    // 토큰 조작 및 Refresh Token 만료 및 알 수 없는 에러가 발생했을 시
    if (page === 'home') {
      dispatch(logoutLoading());
    }

    // 카카오 로그인 성공 시
    if (kakaoLoginSuccess === true) {
      navigate('/login');
    }
  };

  useEffect(() => {
    // 모달이 열릴 때 스크롤 비활성화
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      // 모달이 닫힐 때 스크롤 비활성화 스타일 제거
      document.body.style.overflow = 'unset';
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [modalOpen]);

  if (!modalOpen) return null;

  return (
    <St.Section>
      {openRecaptcha ? (
        <St.Modal>
          <p>{modalMessage1}</p>
          <Recaptcha />
        </St.Modal>
      ) : (
        <St.Modal>
          <p>{modalMessage1}</p>
          <p>{modalMessage2}</p>
          <p>{modalMessage3}</p>
          <St.Button onClick={handleClick}>확인</St.Button>
        </St.Modal>
      )}
    </St.Section>
  );
};

export default Modal;
/* eslint-disable @typescript-eslint/no-unused-vars */
