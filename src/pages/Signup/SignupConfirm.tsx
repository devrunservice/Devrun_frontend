/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Email} from 'asset';
import {crypto} from 'utils/crypto';
import {Modal, EmailVerification} from 'components';
import {SignupFormType} from 'types';
import * as St from './styles';

const SignupConfirm = () => {
  const [searchParams] = useSearchParams();
  // const id = crypto.decryptedUserData(
  //   searchParams.get('id') || '',
  //   process.env.REACT_APP_CRYPTO_SECRET_KEY || ''
  // );
  // const email = crypto.decryptedUserData(
  //   searchParams.get('email') || '',
  //   process.env.REACT_APP_CRYPTO_SECRET_KEY || ''
  // );
  // console.log(id, email);
  // const data = searchParams.get('data');
  const data =
    '3szRWBM3hEelXaQGu6C3vcthxwtYehVx4vCwYo_sHPaQs_SIkTJvITbfsNCHcSWmryD2HcvfueyElDEb98KnaOO7jfim3jyuizJLua21cXjPLrVkeMBTAsuOQmlB-eqd';

  const decryptedUserData = crypto.decryptedUserData(
    searchParams.get('data') || '',
    process.env.REACT_APP_CRYPTO_SECRET_KEY || ''
  );
  console.log(decryptedUserData);

  return (
    <St.Section page="signupconfirm">
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
        {decryptedUserData && (
          <EmailVerification userData={decryptedUserData} />
        )}
        {data && <EmailVerification userData={data} />}
      </St.Container>
      <Modal page="signupconfirm" />
    </St.Section>
  );
};

export default SignupConfirm;
