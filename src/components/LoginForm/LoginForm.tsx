import React, { useEffect, useState } from "react";
import { BrandLogo, Kakao, Naver, Google } from "asset";
import { useNavigate } from "react-router-dom";
import { Input } from "style/Common";
import PasswordInput from "components/Login/PasswordInput/PasswordInput"; // eslint-disable-line @typescript-eslint/no-unused-vars
import * as St from "./styles";

interface LoginFormType {
  id: string;
  pwd: string;
}

const LoginForm = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState<LoginFormType>({
    id: "",
    pwd: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    console.log(event.target);

    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <St.Section>
      <St.Container>
        <St.LogoWrapper>
          <BrandLogo />
        </St.LogoWrapper>
        {/* 로그인 */}
        <form onSubmit={handleSubmit}>
          <St.InputField>
            <Input
              type="text"
              value={login.id}
              placeholder="아이디"
              onChange={handleChange}
            />
            <PasswordInput
              value={login.pwd}
              placeholder="비밀번호"
              onChange={handleChange}
            />
          </St.InputField>
          <St.LoginBtn>로그인</St.LoginBtn>
        </form>
        {/* 아이디, 비밀번호 찾기 및 회원가입 */}
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
        {/* 간편 로그인 */}
        <St.SocialLogin>
          <St.SocialLoginTitle>간편 로그인</St.SocialLoginTitle>
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
};

export default LoginForm;
