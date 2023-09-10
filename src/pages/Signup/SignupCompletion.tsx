import React from 'react';
import {Signup} from 'asset';
import {redirect} from 'utils/redirect';
import * as St from './styles';

const SignupCompletion = () => {
  return (
    <St.Section page="signupCompletion">
      <St.Container>
        <St.Image>
          <Signup />
        </St.Image>
        <St.H1>회원가입 완료</St.H1>
        <St.TextArea>
          <h2>DEVRUN의 회원으로 가입해 주셔서 감사합니다 🙌</h2>
          <p>회원가입 절차가 모두 완료되었습니다.</p>
          <p>로그인 후 서비스를 이용해주세요.</p>
        </St.TextArea>
        <St.ButtonWrapper>
          <St.HomeBtn onClick={() => redirect('/home')}>메인화면</St.HomeBtn>
          <St.LoginBtn onClick={() => redirect('/login')}>로그인</St.LoginBtn>
        </St.ButtonWrapper>
      </St.Container>
    </St.Section>
  );
};

export default SignupCompletion;
