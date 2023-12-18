/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Email} from 'asset';
import {redirect} from 'utils/redirect';
import {BasicModal, EmailVerification} from 'components';
import * as St from './style';

const SignupConfirm = () => {
  const [searchParams] = useSearchParams();
  const data = searchParams.get('data');

  // const decryptedUserData = crypto.decryptedUserData(
  //   data || '',
  //   process.env.REACT_APP_CRYPTO_SECRET_KEY || ''
  // );
  // console.log(decryptedUserData);

  return (
    <St.Section $page="signupconfirm">
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
        {/* {decryptedUserData && (
          <EmailVerification userData={decryptedUserData} />
        )} */}
        <St.ButtonWrapper>
          {data && <EmailVerification status="confirm" userData={data} />}
          <St.HomeBtn onClick={() => redirect('/home')}>메인화면</St.HomeBtn>
        </St.ButtonWrapper>
      </St.Container>
      <BasicModal />
    </St.Section>
  );
};

export default SignupConfirm;
