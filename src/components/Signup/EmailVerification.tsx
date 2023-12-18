import React from 'react';
import {useDispatch} from 'react-redux';
import {signup} from 'utils/api';
// import {SignupFormType} from 'types';
import * as St from './style';
import {openModal} from '../../redux/reducer/modalReducer';

const EmailVerification = ({
  userData,
  status,
}: {
  userData: string;
  status: string;
}) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const response = await signup.sendVerificationEmail(userData);
    if (response.status === 200) {
      dispatch(openModal('인증 이메일이 다시 전송되었습니다.'));
    }
  };
  return (
    <St.EmailBtn $status={status} onClick={handleClick}>
      이메일 다시 보내기
    </St.EmailBtn>
  );
};

export default EmailVerification;
