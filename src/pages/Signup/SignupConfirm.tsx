/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Email} from 'asset';
import {crypto} from 'utils/crypto';
import {Modal, EmailVerification} from 'components';
import * as St from './styles';

const SignupConfirm = () => {
  const {user} = useParams();
  console.log(user);

  const [userData, setUserData] = useState();

  useEffect(() => {
    const decryptedUserData = user ? crypto.decryptedUserData(user) : null;
    setUserData(decryptedUserData);
    console.log(userData);
  }, []);

  return (
    <St.Section page="signupConfirm">
      <St.Container>
        <St.Image>
          <Email />
        </St.Image>
        <St.H1>이메일 인증</St.H1>

        <St.TextArea>
          <h2>DEVRUN에 오신 걸 환영합니다 👏</h2>
          <p>이메일 인증을 위한 메일이 발송되었습니다.</p>
          <p>1시간 이내 회원가입 완료를 위한 이메일 인증을 진행 해 주세요.</p>
          <p>문의 사항은 devrun66@gmail.com 으로 보내주시기 바랍니다.</p>
        </St.TextArea>
        {userData && <EmailVerification userData={userData} />}
      </St.Container>
      <Modal page="signupconfirm" />
    </St.Section>
  );
};

export default SignupConfirm;
