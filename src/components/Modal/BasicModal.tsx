/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {Recaptcha} from 'components';
import * as St from './style';
import {closeModal} from '../../redux/reducer/modalReducer';

const BasicModal = ({onConfirm}: {onConfirm?: () => void}) => {
  const dispatch = useDispatch();

  const {modalOpen, modalMessage1, modalMessage2} = useSelector(
    (state: RootState) => state.modalReducer
  );
  const {isRecaptcha} = useSelector((state: RootState) => state.loginReducer);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      dispatch(closeModal());
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(closeModal());
    if (typeof onConfirm === 'function') {
      onConfirm();
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
      {isRecaptcha ? (
        <St.Modal>
          <p>{modalMessage1}</p>
          <Recaptcha />
        </St.Modal>
      ) : (
        <St.Modal>
          <p>{modalMessage1}</p>
          <p>{modalMessage2}</p>
          <St.Button name="cancel" onClick={handleClick}>
            확인
          </St.Button>
        </St.Modal>
      )}
    </St.Section>
  );
};

export default BasicModal;
/* eslint-disable @typescript-eslint/no-unused-vars */
