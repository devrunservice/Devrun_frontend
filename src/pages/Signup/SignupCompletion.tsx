import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {SignupSuccess, SignupFailure} from 'asset';
import {redirect} from 'utils/redirect';
import {crypto} from 'utils/crypto';
import {EmailVerification} from 'components';
import * as St from './styles';

const SignupCompletion = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const id = crypto.decryptedUserData(searchParams.get('id') || '');
  const email = crypto.decryptedUserData(searchParams.get('email') || '');

  console.log(status, id, email);

  return (
    <St.Section page="signupCompletion">
      {(status === 'failure' || status === 'notfound') && (
        <St.Container>
          <St.Image>
            <SignupFailure />
          </St.Image>
          <St.H1>회원가입 실패</St.H1>
          <St.TextArea>
            <h2>회원가입이 실패했습니다.</h2>
            <p>고객센터 devrun66@gmail.com로 문의 바랍니다.</p>
          </St.TextArea>
          {id && email && <EmailVerification userData={{id, email}} />}
        </St.Container>
      )}
      {status === 'expired' && (
        <St.Container>
          <St.Image>
            <SignupFailure />
          </St.Image>
          <St.H1>회원가입 실패</St.H1>
          <St.TextArea>
            <h2>회원가입이 실패했습니다.</h2>
            <p>고객센터 devrun66@gmail.com로 문의 바랍니다.</p>
          </St.TextArea>
        </St.Container>
      )}
      {status === 'success' && (
        <St.Container>
          <St.Image>
            <SignupSuccess />
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
      )}
    </St.Section>
  );
};

export default SignupCompletion;
