/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {SignupFormType} from 'types';
import {
  updateValidState,
  updateMessageState,
} from '../redux/reducer/validationReducer';

const useValid = (form: SignupFormType) => {
  const dispatch = useDispatch();
  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState
  );

  const updateValid = (name: string, state: boolean) => {
    dispatch(updateValidState({name, value: state}));
  };
  const updateMessage = (name: string, message: string) => {
    dispatch(updateMessageState({name, message}));
  };

  // 아이디 유효성 검사
  useEffect(() => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{5,13}$/;

    if (!regex.test(form.id || '')) {
      updateMessage(
        'idMessage',
        '영어, 숫자를 포함한 5 ~ 13자로 입력해주세요.'
      );
      updateValid('id', false);
    } else {
      updateValid('id', true);
    }

    if (validState.id || !validState.id) {
      updateMessage('idDuplicationMessage', '중복확인을 해주세요');
      updateValid('idDuplication', false);
    }
  }, [form.id]);

  // 비밀번호
  useEffect(() => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,15}$/;

    if (!regex.test(form.password || '')) {
      updateMessage(
        'passwordMessage',
        '숫자, 영문, 특수문자 포함한 8 ~ 15자로 입력해주세요.'
      );
      updateValid('password', false);
    } else {
      updateValid('password', true);
    }

    if (form.password !== form.passwordConfirm) {
      updateMessage('passwordConfirmMessage', '비밀번호가 일치하지 않습니다.');
      updateValid('passwordConfirm', false);
    } else if (!validState.passwordConfirm) {
      updateValid('passwordConfirm', true);
    }
  }, [form.password, form.passwordConfirm]);

  // 이메일 유효성 검사
  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(form.email || '')) {
      updateMessage('emailMessage', '올바른 이메일 형식이 아닙니다.');
      updateValid('email', false);
    } else {
      updateValid('email', true);
    }

    if (validState.email || validState.email) {
      updateMessage('emailDuplicationMessage', '중복확인을 해주세요.');
      updateValid('emailDuplication', false);
    }

    // 이메일로 계정찾기 부분
    if (
      (!validState.email && validState.codeBtn) ||
      (validState.email && validState.codeBtn)
    ) {
      updateMessage('phonenumberMessage', '인증번호를 다시 받아주세요.');
      updateValid('codeBtn', false);
    }
  }, [form.email]);

  // 휴대폰 유효성 검사
  useEffect(() => {
    const regex = /^01([016789])([0-9]{8})$/;

    if (!regex.test(form.phonenumber || '')) {
      // updateMessage("phonenumberMessage", "- 제외 11자리를 입력해주세요.");
      updateValid('phonenumber', false);
    } else {
      updateValid('phonenumber', true);
    }

    if (validState.phonenumber || !validState.phonenumber) {
      updateMessage('phonenumberMessage', '인증번호를 다시 받아주세요.');
      updateMessage('codeMessage', '');
      updateValid('codeBtn', false);
      updateValid('checkCodeBtn', false);
    }
  }, [form.phonenumber]);

  return {
    updateValid,
    updateMessage,
  };
};

export default useValid;
/* eslint-disable @typescript-eslint/no-unused-vars */
