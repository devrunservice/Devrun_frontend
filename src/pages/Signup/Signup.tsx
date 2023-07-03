/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useValid from "hooks/useValid";
import { signup } from "api/index";
import PasswordInput from "components/Login/PasswordInput/PasswordInput";
import { FormType } from "types";
import { ErrorMessage, Input, SuccessMessage } from "style/Common";
import * as St from "./styles";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormType>({
    userId: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
    birthday: "",
    phonenumber: "",
    code: "",
  });

  const {
    validMessage,
    isValid,
    setIsValid,
    checkDuplicatedUserId,
    checkDuplicatedEmail,
    requestAuthenticationNumber,
    verifyAuthenticationNumber,
  } = useValid(form);

  const isvalid = Object.values(isValid).some((value) => value === false);

  console.log(isValid);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await signup.createUser({
      id: form.userId,
      password: form.password,
      name: form.name,
      email: form.email,
      birthday: form.birthday,
      phonenumber: form.phonenumber,
    });
    console.log(response);
    if (response.status === 200) {
      navigate(`/login`);
    }
  };

  // 아이디 중복
  const handleClickDuplicatedId = () => {
    checkDuplicatedUserId(form.userId);
  };

  // 이메일 중복 확인
  const handleClickDuplicatedEmail = () => {
    checkDuplicatedEmail(form.email);
  };

  // 휴대폰 인증번호
  const handleGetAuthenticationNumber = () => {
    requestAuthenticationNumber(form.phonenumber);
  };

  // 인증번호 확인
  const handleCheckAuthenticationNumber = () => {
    verifyAuthenticationNumber(form.phonenumber, form.code);
  };

  // 생년월일 값 가져오기
  const handleChangeBday = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = new Date(e.target.value);
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");

    setForm({ ...form, birthday: `${year}-${month}-${day}` });
    setIsValid((prev) => ({ ...prev, birthday: true }));
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
                name="userId"
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
            {isValid.userIdDuplication ? (
              <SuccessMessage>
                {validMessage.userIdDuplicationMessage}
              </SuccessMessage>
            ) : (
              <ErrorMessage>
                {validMessage.userIdDuplicationMessage}
              </ErrorMessage>
            )}
          </St.InputField>

          {/* 비밀번호 input */}
          <St.InputField>
            <St.P>비밀번호</St.P>
            <PasswordInput
              name="password"
              value={form.password}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            {form.password && isValid.password === false && (
              <ErrorMessage>{validMessage.passwordMessage}</ErrorMessage>
            )}
            <PasswordInput
              name="passwordConfirm"
              value={form.passwordConfirm}
              placeholder="비밀번호 재입력"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, passwordConfirm: e.target.value })
              }
            />
            {isValid.passwordConfirm === false && (
              <ErrorMessage>{validMessage.passwordConfirmMessage}</ErrorMessage>
            )}
          </St.InputField>

          {/* 이름 input */}
          <St.InputField>
            <St.P>이름</St.P>
            <Input
              type="text"
              name="name"
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
                name="email"
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
            {isValid.emailDuplication ? (
              <SuccessMessage>
                {validMessage.emailDuplicationMessage}
              </SuccessMessage>
            ) : (
              <ErrorMessage>
                {validMessage.emailDuplicationMessage}
              </ErrorMessage>
            )}
          </St.InputField>

          {/* 생년월일 input */}
          <St.InputField>
            <St.P>생년월일</St.P>
            <St.Birthday
              type="date"
              name="birthday"
              value={form.birthday}
              onChange={handleChangeBday}
            />
          </St.InputField>

          {/* 휴대폰 번호 input */}
          <St.InputField>
            <St.P>휴대폰 번호</St.P>
            <St.Field>
              <Input
                type="text"
                name="phonenumber"
                value={form.phonenumber}
                placeholder="휴대폰 번호 '-' 제외하고 입력"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setForm({ ...form, phonenumber: e.target.value });
                  setIsValid((prev) => ({ ...prev, phonenumber: true }));
                }}
              />
              <St.Button
                type="button"
                onClick={handleGetAuthenticationNumber}
                disabled={!isValid.phonenumber}
              >
                인증번호
              </St.Button>
            </St.Field>
            {isValid.codeBtn && isValid.phonenumber ? (
              // 인증번호가 요청되었습니다
              <SuccessMessage>{validMessage.phonenumberMessage}</SuccessMessage>
            ) : (
              // 인증번호가 실패했습니다, 인증번호를 다시 받아주세요
              <ErrorMessage>{validMessage.phonenumberMessage}</ErrorMessage>
            )}
            <St.Field>
              <Input
                type="text"
                name="code"
                value={form.code}
                placeholder="인증번호 입력"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setForm({ ...form, code: e.target.value });
                  setIsValid((prev) => ({ ...prev, code: true }));
                }}
              />
              <St.Button
                type="button"
                onClick={handleCheckAuthenticationNumber}
                disabled={!isValid.code}
              >
                확인
              </St.Button>
            </St.Field>
            {isValid.checkCodeBtn && isValid.code ? (
              <SuccessMessage>{validMessage.codeMessage}</SuccessMessage>
            ) : (
              <ErrorMessage>{validMessage.codeMessage}</ErrorMessage>
            )}
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
          <St.SignupBtn disabled={isvalid}>회원가입</St.SignupBtn>
        </form>
      </St.Container>
    </St.Section>
  );
};

export default Signup;
/* eslint-disable @typescript-eslint/no-unused-vars */
