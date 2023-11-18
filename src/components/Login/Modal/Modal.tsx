/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {Recaptcha} from 'components';
import {getCookie} from 'utils/cookies';
import * as St from './styles';
import {closeModal} from '../../../redux/reducer/modalReducer';
import {logoutLoading} from '../../../redux/reducer/loginReducer';
import {
  noteDeleteLoading,
  questionDeleteLoading,
} from '../../../redux/reducer/dashboardReducer';

const Modal = ({page}: {page?: string}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {questionId, noteId} = useParams();

  const {
    modalOpen,
    modalMessage1,
    modalMessage2,
    signupSuccess,
    kakaoLoginSuccess,
    openRecaptcha,
  } = useSelector((state: RootState) => state.modalReducer);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      dispatch(closeModal());
    }
  };

  const handleClick = () => {
    // 기본적으로 모달에서 확인을 누를 경우 모달이 닫힘
    dispatch(closeModal());

    // 회원가입, 카카오 로그인 성공 시
    if (kakaoLoginSuccess === true || signupSuccess === true) {
      navigate('/login');
    }

    if (
      modalMessage1 === '알 수 없는 오류가 발생했습니다.' ||
      modalMessage1 === '이미 로그인 된 다른 기기가 있습니다.' ||
      modalMessage1 === '오류가 감지되었습니다.'
    ) {
      dispatch(logoutLoading());
    } else if (modalMessage1 === '해당 질문을 삭제하시겠습니까?') {
      dispatch(questionDeleteLoading({id: Number(questionId)}));
    } else if (modalMessage1 === '해당 노트를 삭제하시겠습니까?') {
      dispatch(noteDeleteLoading(Number(noteId)));
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
          <St.Button onClick={handleClick}>확인</St.Button>
        </St.Modal>
      )}
    </St.Section>
  );
};

export default Modal;
/* eslint-disable @typescript-eslint/no-unused-vars */
