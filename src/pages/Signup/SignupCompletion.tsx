/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {SignupSuccess, SignupFailure} from 'asset';
import {redirect} from 'utils/redirect';
import {EmailVerification} from 'components';
import * as St from './styles';
import {setSignupSuccess} from '../../redux/reducer/modalReducer';

const SignupCompletion = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const status = searchParams.get('status');
  const data = searchParams.get('data');

  console.log(status);

  // const decryptedUserData = crypto.decryptedUserData(
  //   data || '',
  //   process.env.REACT_APP_CRYPTO_SECRET_KEY || ''
  // );
  // console.log(decryptedUserData);

  if (status === 'success') {
    dispatch(setSignupSuccess(true));
  }

  return (
    <St.Section $page="signupCompletion">
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
          {/* {decryptedUserData && (
            <EmailVerification userData={decryptedUserData} />
          )} */}
          <St.ButtonWrapper>
            <St.HomeBtn onClick={() => redirect('/home')}>메인화면</St.HomeBtn>
            {data && <EmailVerification status="failure" userData={data} />}
          </St.ButtonWrapper>
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
          <St.HomeBtn $status="expired" onClick={() => redirect('/home')}>
            메인화면
          </St.HomeBtn>
        </St.Container>
      )}
      {(status === 'success' || status === 'activated') && (
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
            <St.LoginBtn onClick={() => redirect('/login')}>로그인</St.LoginBtn>
            <St.HomeBtn onClick={() => redirect('/home')}>메인화면</St.HomeBtn>
          </St.ButtonWrapper>
        </St.Container>
      )}
    </St.Section>
  );
};

export default SignupCompletion;
