/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import useValid from "hooks/useValid";
import { signup } from "api/index";
import PasswordInput from "components/Login/PasswordInput/PasswordInput";
import Modal from "components/Login/Modal/Modal";
import { SignupFormType } from "types";
import { ErrorMessage, Input, SuccessMessage } from "style/Common";
import * as St from "./styles";
import { setUser } from "../../redux/reducer/checkValidationReducer";
import { openModal } from "../../redux/reducer/modalReducer";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector(
    (state: RootState) => state.checkValidationReducer.message,
  );
  const valid = useSelector(
    (state: RootState) => state.checkValidationReducer.valid,
  );
  const [signupForm, setSignupForm] = useState<SignupFormType>({
    id: "",
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
    checkDuplicatedId,
    checkDuplicatedEmail,
    requestAuthenticationNumber,
    verifyAuthenticationNumber,
  } = useValid(signupForm);

  const isvalid = Object.values(isValid).some((value) => value === false);
  // console.log(isValid);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (signupForm.id === "") {
    //   return dispatch(openModal("아이디를 입력해주세요."));
    // }
    // if (signupForm.password === "") {
    //   return dispatch(openModal("비밀번호를 입력해주세요."));
    // }
    // if (signupForm.passwordConfirm === "") {
    //   return dispatch(openModal("비밀번호 확인을 입력해주세요."));
    // }
    // if (signupForm.name === "") {
    //   return dispatch(openModal("이름을 입력해주세요."));
    // }
    // if (signupForm.email === "") {
    //   return dispatch(openModal("이메일을 입력해주세요."));
    // }
    // if (signupForm.birthday === "") {
    //   return dispatch(openModal("생일을 입력해주세요."));
    // }
    // if (signupForm.phonenumber === "") {
    //   return dispatch(openModal("휴대폰 번호를 입력해주세요."));
    // }
    // if (signupForm.code === "") {
    //   return dispatch(openModal("인증번호를 입력해주세요."));
    // }
    const response = await signup.createUser({
      id: signupForm.id,
      password: signupForm.password,
      name: signupForm.name,
      email: signupForm.email,
      birthday: signupForm.birthday,
      phonenumber: signupForm.phonenumber,
    });
    console.log(response);
    if (response.status === 200) {
      dispatch(dispatch(openModal("회원가입이 완료되었습니다.")));
      navigate("/login");
    }

    // try {
    //   dispatch(
    //     setUser({
    //       id: signupForm.id,
    //       password: signupForm.password,
    //       name: signupForm.name,
    //       email: signupForm.email,
    //       birthday: signupForm.birthday,
    //       phonenumber: signupForm.phonenumber,
    //     }),
    //   );
    //   dispatch(dispatch(openModal("회원가입이 완료되었습니다.")));
    // } catch (error: any) {
    //   return error.response;
    // }
  };

  // 아이디 중복
  const handleClickDuplicatedId = () => {
    checkDuplicatedId(signupForm.id);
  };

  // 이메일 중복 확인
  const handleClickDuplicatedEmail = () => {
    checkDuplicatedEmail(signupForm.email);
  };

  // 휴대폰 인증번호
  const handleGetAuthenticationNumber = () => {
    requestAuthenticationNumber(signupForm.phonenumber);
  };

  // 인증번호 확인
  const handleCheckAuthenticationNumber = () => {
    verifyAuthenticationNumber(signupForm.phonenumber, signupForm.code);
  };

  // 생년월일 값 가져오기
  const handleChangeBday = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = new Date(e.target.value);
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");

    setSignupForm({ ...signupForm, birthday: `${year}-${month}-${day}` });
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
                name="id"
                value={signupForm.id}
                placeholder="영문, 숫자 5-13자"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSignupForm({ ...signupForm, id: e.target.value })
                }
              />
              <St.Button
                type="button"
                onClick={handleClickDuplicatedId}
                disabled={!isValid.id}
              >
                중복확인
              </St.Button>
            </St.Field>
            {signupForm.id && isValid.id === false && (
              <ErrorMessage>{validMessage.idMessage}</ErrorMessage>
            )}
            {signupForm.id !== "" && isValid.idDuplication ? (
              <SuccessMessage>
                {validMessage.idDuplicationMessage}
              </SuccessMessage>
            ) : (
              <ErrorMessage>{validMessage.idDuplicationMessage}</ErrorMessage>
            )}
            {/* 리덕스 */}
            {/* {signupForm.id && !valid.id && (
              <ErrorMessage>{message.idMessage}</ErrorMessage>
            )} */}
            {/* {signupForm.id !== "" && isValid.idDuplication ? (
              <SuccessMessage>
                {validMessage.idDuplicationMessage}
              </SuccessMessage>
            ) : (
              <ErrorMessage>{validMessage.idDuplicationMessage}</ErrorMessage>
            )} */}
          </St.InputField>

          {/* 비밀번호 input */}
          <St.InputField>
            <St.P>비밀번호</St.P>
            <PasswordInput
              name="password"
              value={signupForm.password}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSignupForm({ ...signupForm, password: e.target.value })
              }
            />
            {signupForm.password && !isValid.password && (
              <ErrorMessage>{validMessage.passwordMessage}</ErrorMessage>
            )}
            <PasswordInput
              name="passwordConfirm"
              value={signupForm.passwordConfirm}
              placeholder="비밀번호 재입력"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSignupForm({
                  ...signupForm,
                  passwordConfirm: e.target.value,
                })
              }
            />
            {!isValid.passwordConfirm && (
              <ErrorMessage>{validMessage.passwordConfirmMessage}</ErrorMessage>
            )}
          </St.InputField>

          {/* 이름 input */}
          <St.InputField>
            <St.P>이름</St.P>
            <Input
              type="text"
              name="name"
              value={signupForm.name}
              placeholder="홍길동"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSignupForm({ ...signupForm, name: e.target.value });
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
                value={signupForm.email}
                placeholder="이메일"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSignupForm({ ...signupForm, email: e.target.value })
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
            {signupForm.email && isValid.email === false && (
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
              value={signupForm.birthday}
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
                value={signupForm.phonenumber}
                placeholder="휴대폰 번호 '-' 제외하고 입력"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSignupForm({ ...signupForm, phonenumber: e.target.value });
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
                value={signupForm.code}
                placeholder="인증번호 입력"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSignupForm({ ...signupForm, code: e.target.value });
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
          <St.SignupBtn disabled={!isValid}>회원가입</St.SignupBtn>
        </form>
        <Modal />
      </St.Container>
    </St.Section>
  );
};

export default Signup;
/* eslint-disable @typescript-eslint/no-unused-vars */
