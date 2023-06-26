/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useValid from "hooks/useValid";
import { baseAxios } from "api/instance";
import PasswordInput from "components/Login/PasswordInput/PasswordInput";
import { ErrorMessage, Input } from "style/Common";
import { FormType } from "types";
import {
  createUser,
  getAuthenticationNumber,
  checkAuthenticationNumber,
  getDuplicatedUserId,
} from "api";
import * as St from "./styles";


const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormType>({
    userId: "",
    pwd: "",
    pwdConfirm: "",
    name: "",
    email: "",
    bday: "",
    phoneNumber: "",
    verifiedCode: "",
  });

  const { validMessage, isValid, setIsValid, checkDuplicatedUserId } = useValid(form);

  const isFormValid =
    form.userId !== "" &&
    form.userId.length >= 5 &&
    form.userId.length <= 13 &&
    form.pwd !== "" &&
    form.pwd.length >= 8 &&
    form.pwd.length <= 15 &&
    form.pwdConfirm !== "" &&
    form.pwdConfirm.length < 5 &&
    form.name !== "" &&
    form.email !== "" &&
    form.bday !== "" &&
    form.phoneNumber !== "" &&
    form.verifiedCode !== "" &&
    isValid.userId === true &&
    isValid.email === true &&
    isValid.verifiedCode === true;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createUser({
        userId: form.userId,
        password: form.pwd,
        name: form.name,
        email: form.email,
        birthday: form.bday,
        phonenumber: form.phoneNumber,
      });

      navigate(`/login`);
    } catch (error) {
      console.log(error);
    }
  };

  // 아이디 중복 확인
  const handleClickDuplicatedId = async () => {
    // const response = await getDuplicatedUserId({ id: form.userId });
    // console.log("response: ", response);
    // if (response.data === 0) {
    //   alert("사용 가능한 아이디 입니다.");
    //   setIsValid((prev) => ({ ...prev, userId: true }));
    // } else if (response.data === 1) {
    //   alert("사용중인 아이디 입니다.");
    //   setIsValid((prev) => ({ ...prev, userId: false }));
    // }
    checkDuplicatedUserId({userId:form.userId})
  };

  // 이메일 중복 확인
  const handleClickDuplicatedEmail = async () => {
    const response = await baseAxios.post(
      `${process.env.REACT_APP_SERVER_URL}/checkEmail`,
      {
        email: form.email,
      },
    );
    console.log("response: ", response);
    if (response.data === 0) {
      alert("사용 가능한 이메일 입니다.");
      setIsValid((prev) => ({ ...prev, email: true }));
    } else if (response.data === 1) {
      alert("이미 사용중인 이메일 입니다.");
      setIsValid((prev) => ({ ...prev, email: false }));
    }
  };

  // 휴대폰 인증번호
  const handleGetAuthenticationNumber = async () => {
    try {
      await getAuthenticationNumber({ phonenumber: form.phoneNumber });
      setIsValid((prev) => ({ ...prev, phone: true }));
    } catch (error) {
      console.log(error);
    }
  };

  // 인증번호 확인
  const handleCheckAuthenticationNumber = async () => {
    try {
      const response = await checkAuthenticationNumber({
        phonenumber: form.phoneNumber,
        code: form.verifiedCode,
      });
      if (response.status === 200) {
        setIsValid((prev) => ({ ...prev, verifiedCode: true }));
      } else {
        console.log("인증번호가 틀렸습니다.");
        setIsValid((prev) => ({ ...prev, verifiedCode: false }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 생년월일 값 가져오기
  const handleChangeBday = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = new Date(e.target.value);
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");

    setForm({ ...form, bday: `${year}-${month}-${day}` });
    setIsValid((prev) => ({ ...prev, bday: true }));
  };

  return (
    <St.Section>
      <St.Container>
        <St.H1>회원가입</St.H1>
        <form onSubmit={handleSubmit}>
          {/* 아이디 input */}
          <St.InputField>
            <St.P>아이디</St.P>
            <St.Field>
              <Input
                type="text"
                value={form.userId}
                placeholder="영문, 숫자 5-13자"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, userId: e.target.value })
                }
              />
              <St.Button
                type="button"
                onClick={handleClickDuplicatedId}
                disabled={isValid.userId === false}
              >
                중복확인
              </St.Button>
            </St.Field>
            {form.userId && isValid.userId === false && (
              <ErrorMessage>{validMessage.userIdMessage}</ErrorMessage>
            )}
            {form.userId && isValid.userIdDuplication === false && (
              <ErrorMessage>
                {validMessage.userIdDuplicationMessage}
              </ErrorMessage>
            )}
          </St.InputField>

          {/* 비밀번호 input */}
          <St.InputField>
            <St.P>비밀번호</St.P>
            <PasswordInput
              value={form.pwd}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, pwd: e.target.value })
              }
            />
            {form.pwd && isValid.pwd === false && (
              <ErrorMessage>{validMessage.pwdMessage}</ErrorMessage>
            )}
            <PasswordInput
              value={form.pwdConfirm}
              placeholder="비밀번호 재입력"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, pwdConfirm: e.target.value })
              }
            />
            {isValid.pwdConfirm === false && (
              <ErrorMessage>{validMessage.pwdConfirmMessage}</ErrorMessage>
            )}
          </St.InputField>

          {/* 이름 input */}
          <St.InputField>
            <St.P>이름</St.P>
            <Input
              type="text"
              value={form.name}
              placeholder="홍길동"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setForm({ ...form, name: e.target.value });
                setIsValid((prev) => ({ ...prev, name: true }));
              }}
            />
          </St.InputField>

          {/* 이메일 input */}
          <St.InputField>
            <St.P>이메일</St.P>
            <St.Field>
              <Input
                type="email"
                value={form.email}
                placeholder="이메일"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              <St.Button
                type="button"
                onClick={handleClickDuplicatedEmail}
                disabled={isValid.email === false}
              >
                중복확인
              </St.Button>
            </St.Field>
            {form.email && isValid.email === false && (
              <ErrorMessage>{validMessage.emailMessage}</ErrorMessage>
            )}
          </St.InputField>

          {/* 생년월일 input */}
          <St.InputField>
            <St.P>생년월일</St.P>
            <St.Birthday
              type="date"
              value={form.bday}
              onChange={handleChangeBday}
            />
          </St.InputField>

          {/* 휴대폰 번호 input */}
          <St.InputField>
            <St.P>휴대폰 번호</St.P>
            <St.Field>
              <Input
                type="text"
                value={form.phoneNumber}
                placeholder="휴대폰 번호 '-' 제외하고 입력"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, phoneNumber: e.target.value })
                }
              />
              <St.Button type="button" onClick={handleGetAuthenticationNumber}>
                인증번호
              </St.Button>
            </St.Field>
            <St.Field>
              <Input
                type="text"
                value={form.verifiedCode}
                placeholder="인증번호 입력"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, verifiedCode: e.target.value })
                }
              />
              <St.Button
                type="button"
                onClick={handleCheckAuthenticationNumber}
              >
                확인
              </St.Button>
            </St.Field>
            <ErrorMessage>
              {validMessage.authenticationNumberMessage}
            </ErrorMessage>
          </St.InputField>

          {/* 약관 동의 */}
          <St.Ul>
            <St.Li>
              <St.Checkbox type="checkbox" id="all-agree" />
              <label htmlFor="all-agree">전체동의</label>
            </St.Li>
            <hr />
            <St.Li>
              <St.Checkbox type="checkbox" id="terms-of-service" />
              <label htmlFor="terms-of-service">
                서비스 이용약관 동의 (필수)
              </label>
            </St.Li>
            <St.Li>
              <St.Checkbox type="checkbox" id="privacy-consent" />
              <label htmlFor="privacy-consente">
                개인정보 수집 및 이용 동의 (필수)
              </label>
            </St.Li>
          </St.Ul>

          {/* 회원가입 버튼 */}
          <St.SignupBtn disabled={!isFormValid}>회원가입</St.SignupBtn>
        </form>
      </St.Container>
    </St.Section>
  );
};

export default Signup;
/* eslint-disable @typescript-eslint/no-unused-vars */
