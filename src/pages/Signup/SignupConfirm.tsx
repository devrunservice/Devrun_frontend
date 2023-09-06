/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Email} from 'asset';
import * as St from './styles';

const SignupConfirm = () => {
  const handleClick = () => {
    // signup.sendVerificationEmail({
    //   id,
    //   email,
    // });
  };

  return (
    <St.Section>
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
        <St.EmailBtn onClick={handleClick}>이메일 다시 보내기</St.EmailBtn>
      </St.Container>
    </St.Section>
  );
};

export default SignupConfirm;
