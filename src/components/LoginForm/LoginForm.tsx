import React from "react";
import { BrandLogo, Kakao, Naver, Google } from "asset";
import { useNavigate } from "react-router-dom";
import { Input } from "style/Common";
import PasswordInput from "components/Login/PasswordInput/PasswordInput"; // eslint-disable-line @typescript-eslint/no-unused-vars
import * as St from "./styles";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <St.Section>
      <St.Container>
        <St.LogoWrapper>
          <BrandLogo />
        </St.LogoWrapper>
        <St.InputField>
          <Input type="text" placeholder="아이디" />
          {/* <PasswordInput placeholder="비밀번호" /> */}
        </St.InputField>
        <St.LoginBtn>로그인</St.LoginBtn>
        <St.Finder>
          <St.Button
            onClick={() => {
              navigate("/findId");
            }}
          >
            아이디 찾기
          </St.Button>
          <p>|</p>
          <St.Button
            onClick={() => {
              navigate("/findPwd");
            }}
          >
            비밀번호 찾기
          </St.Button>
          <p>|</p>
          <St.Button
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </St.Button>
        </St.Finder>
        <St.SocialLogin>
          <St.SocialLoginTitle>간편 회원가입</St.SocialLoginTitle>
          <St.SocialLoginBtn>
            <St.Button>
              <Kakao />
            </St.Button>
            <St.Button>
              <Naver />
            </St.Button>
            <St.Button>
              <Google />
            </St.Button>
          </St.SocialLoginBtn>
        </St.SocialLogin>
      </St.Container>
    </St.Section>
  );
}

export default LoginForm;
