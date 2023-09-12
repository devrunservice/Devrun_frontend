/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {signup} from 'utils/api';
import {SignupFormType} from 'types';
import {
  updateValidState,
  updateMessageState,
} from '../redux/reducer/validationReducer';

const useValid = (form: SignupFormType) => {
  console.log(form);
  const dispatch = useDispatch();
  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState
  );

  const updateValid = (name: string, state: boolean) => {
    console.log(name, status);
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

    if (validState.idDuplication || !validState.idDuplication) {
      updateMessage('idDuplicationMessage', '중복확인을 해주세요');
      updateValid('idDuplication', false);
    }
  }, [form.id]);
  // console.log(isValid)

  // 아이디, 이메일 중복확인
  const checkDuplicated = async (
    option: string,
    korean: string,
    value: string
  ) => {
    const response =
      option === 'id'
        ? await signup.getDuplicatedId({id: value})
        : await signup.getDuplicatedEmail({email: value});
    console.log(response);
    if (response.data === 0) {
      updateMessage(
        `${option}DuplicationMessage`,
        `사용 가능한 ${korean}입니다.`
      );
      updateValid(`${option}Duplication`, true);
    } else if (response.data === 1) {
      updateMessage(
        `${option}DuplicationMessage`,
        `이미 사용중인 ${korean}입니다.`
      );
      updateValid(`${option}Duplication`, false);
    }
  };

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
    console.log(form.email);

    if (!regex.test(form.email || '')) {
      updateMessage('emailMessage', '올바른 이메일 형식이 아닙니다.');
      updateValid('email', false);
    } else {
      updateValid('email', true);
    }

    if (validState.emailDuplication || !validState.emailDuplication) {
      updateMessage('emailDuplicationMessage', '중복확인을 해주세요.');
      updateValid('emailDuplication', false);
    }

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

    if (
      (!validState.phonenumber && validState.codeBtn) ||
      (validState.phonenumber && validState.codeBtn)
    ) {
      updateMessage('phonenumberMessage', '인증번호를 다시 받아주세요.');
      updateValid('codeBtn', false);
    }
  }, [form.phonenumber]);

  return {
    checkDuplicated,
    updateValid,
    updateMessage,
  };
};

export default useValid;
/* eslint-disable @typescript-eslint/no-unused-vars */
