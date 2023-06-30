/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "redux/store";
import { login } from "api";
import { setCookie } from "api/cookies";
import { BrandLogo, Kakao, Naver, Google } from "asset";
import { useNavigate } from "react-router-dom";
import { LoginFormType } from "types";
import { Input } from "style/Common";
import Modal from "components/Login/Modal/Modal";
import PasswordInput from "components/Login/PasswordInput/PasswordInput"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { openModal } from "../../redux/reducer/modalReducer";
import { loginSuccess } from "../../redux/reducer/loginReducer";

import * as St from "./styles";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState<LoginFormType>({
    id: "",
    password: "",
  });

  const isFormValid = loginForm.id !== "" && loginForm.password !== "";

  const handleClickLogo = () => navigate("/");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login.checkLoginUser({
        id: loginForm.id,
        password: loginForm.password,
      });
      console.log(response);
      if (response.status === 200) navigate(`/`);
    } catch (error: any) {
      dispatch(openModal(error.message));
    }
    // dispatch(
    //   loginSuccess({
    //     id: loginForm.id,
    //     password: loginForm.password,
    //   }),
    // );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <St.Section>
      <St.Container>
        <St.LogoBtn onClick={handleClickLogo}>
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
        <Modal />

        {/* 아이디, 비밀번호 찾기 및 회원가입 */}
        <St.Finder>
          <St.Button
            type="button"
            onClick={() => {
              navigate("/findid");
            }}
          >
            아이디 찾기
          </St.Button>
          <p>|</p>
          <St.Button
            type="button"
            onClick={() => {
              navigate("/findpassword");
            }}
          >
            비밀번호 찾기
          </St.Button>
          <p>|</p>
          <St.Button
            type="button"
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
/* eslint-disable @typescript-eslint/no-unused-vars */
