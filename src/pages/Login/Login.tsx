/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {RootState} from 'redux/store';
import {getCookie} from 'utils/cookies';
import {redirect} from 'utils/redirect';
import {BrandLogo, Kakao, Naver, Google} from 'asset';
import {LoginFormType} from 'types';
import {PasswordInput, BasicModal} from 'components';
import {Input} from 'style/Common';
import * as St from './style';
import {loginLoading} from '../../redux/reducer/loginReducer';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState<LoginFormType>({
    id: '',
    password: '',
    recaptcha: '',
  });

  const loginErrorMessage = useSelector(
    (state: RootState) => state.userReducer.error
  );

  const easyLoginToken = getCookie('easyLoginToken');

  const isFormValid = loginForm.id !== '' && loginForm.password !== '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      loginLoading({
        id: loginForm.id,
        password: loginForm.password,
      })
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getRecaptcha = async (value: string) => {
    console.log(value);
    // const response = await login.checkRecaptcha(value);
    // console.log(response);
  };

  const handleSocialLogin = (social: string) => {
    if (social === 'kakao') {
      const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
      window.location.href = kakaoURL;
    } else if (social === 'naver') {
      console.log('naver 로그인');
    } else if (social === 'google') {
      console.log('naver 로그인');
    }
  };

  return (
    <St.Section>
      <St.Container>
        <St.LogoBtn onClick={() => redirect('/')}>
          <BrandLogo />
        </St.LogoBtn>
        {/* 로그인 */}
        <form onSubmit={handleSubmit}>
          <St.InputField>
            <Input
              type="text"
              name="id"
              value={loginForm.id}
              placeholder="아이디"
              onChange={handleChange}
            />
            <PasswordInput
              name="password"
              value={loginForm.password}
              placeholder="비밀번호"
              onChange={handleChange}
            />
          </St.InputField>
          <St.LoginBtn disabled={!isFormValid}>로그인</St.LoginBtn>
        </form>
        {loginErrorMessage !== '로그인 횟수를 초과했습니다.' && <BasicModal />}

        {/* 아이디, 비밀번호 찾기 및 회원가입 */}
        <St.Finder>
          <St.Button
            type="button"
            onClick={() => {
              navigate('/findaccount/id');
            }}
          >
            아이디 찾기
          </St.Button>
          <p>|</p>
          <St.Button
            type="button"
            onClick={() => {
              navigate('/findaccount/password');
            }}
          >
            비밀번호 찾기
          </St.Button>
          <p>|</p>
          <St.Button
            type="button"
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </St.Button>
        </St.Finder>
        {/* 간편 로그인 */}
        {!easyLoginToken && (
          <St.SocialLogin>
            <St.SocialLoginTitle>간편 로그인</St.SocialLoginTitle>
            <St.SocialLoginBtn>
              <St.Button>
                <Kakao onClick={() => handleSocialLogin('kakao')} />
              </St.Button>
              {/* <St.Button>
                <Naver onClick={() => handleSocialLogin('naver')} />
              </St.Button>
              <St.Button>
                <Google onClick={() => handleSocialLogin('google')} />
              </St.Button> */}
            </St.SocialLoginBtn>
          </St.SocialLogin>
        )}
      </St.Container>
    </St.Section>
  );
};

export default Login;
/* eslint-disable @typescript-eslint/no-unused-vars */
