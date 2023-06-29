/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { BrandLogo, Kakao, Naver, Google } from "asset";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Input } from "style/Common";
import { LoginFormType } from "types";
import { PasswordInput } from "components";
import { useDispatch } from "react-redux";
import { fetchUserTmi } from "../../redux/saga/userSaga";
import * as St from "./styles";

const LoginForm = () => {
  const navigate = useNavigate();
  
  const [login, setLogin] = useState<LoginFormType>({
    userId: "",
    pwd: "",
  });

  const isFormValid = login.userId !== "" && login.pwd !== "";

  const [userIdMessage, setUserIdMessage] = useState("");
  const [pwdMessage, setPwdMessage] = useState("");
  const dispatch= useDispatch();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/login`,
        {
          id: login.userId,
          password: login.pwd,
        },
      );
      await dispatch(fetchUserTmi({ id: login.userId })); 
      navigate(`/home`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
              name="userId"
              value={login.userId}
              placeholder="아이디"
              onChange={handleChange}
            />
            {!(isFormValid && <ErrorMessage>{userIdMessage}</ErrorMessage>)}
            <PasswordInput
              name="pwd"
              value={login.pwd}
              placeholder="비밀번호"
              onChange={handleChange}
            />
            {!(isFormValid && <ErrorMessage>{pwdMessage}</ErrorMessage>)}
          </St.InputField>
          <St.LoginBtn>로그인</St.LoginBtn>
        </form>
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
              navigate("/findpwd");
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