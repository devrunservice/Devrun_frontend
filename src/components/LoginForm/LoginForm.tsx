/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { BrandLogo, Kakao, Naver, Google } from "asset";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Input } from "style/Common";
import PasswordInput from "components/Login/PasswordInput/PasswordInput"; // eslint-disable-line @typescript-eslint/no-unused-vars
import * as St from "./styles";

interface LoginFormType {
  userId: string;
  pwd: string;
}

const LoginForm = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState<LoginFormType>({
    userId: "",
    pwd: "",
  });

  const isFormValid = login.userId !== "" && login.pwd !== "";

  const [userIdMessage, setUserIdMessage] = useState("");
  const [pwdMessage, setPwdMessage] = useState("");

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
      console.log("response: ", response);

      // const code = response.data.code;
      // if (code === 400) {
      //   alert("내용이 비어있습니다.");
      // } else if (code === 401) {
      //   alert("존재하지 않는 id 입니다.");
      // } else if (code === 402) {
      //   alert("비밀번호가 일치하지 않습니다.");
      // }

      if (response.status === 200) {
        navigate(`/home`);
      }
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
          <St.LoginBtn disabled={!isFormValid}>로그인</St.LoginBtn>
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
