/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useValid from "hooks/useValid";
import { signup } from "utils/api";
import { PasswordInput, AuthenticationNumber, Modal } from "components";
import { SignupFormType } from "types";
import { ErrorMessage, Input, SuccessMessage } from "style/Common";
import * as St from "./styles";
import { openModal, setSignupSuccess } from "../../redux/reducer/modalReducer";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState<SignupFormType>({
    id: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
    birthday: "",
    phonenumber: "",
    code: "",
    allChecked: false,
    acChecked: false,
    tosChecked: false,
    pcChecked: false,
    mcChecked: false,
  });

  const {
    validMessage,
    isValid,
    // setIsValid,
    checkDuplicated,
    checkAllChecked,
    checkConsent,
  } = useValid(signupForm);

  const disabledBtn = Object.values(isValid)
    .filter((value) => value !== "mcChecked") // mcChecked 제외
    .every((value) => value === false);
  // console.log(isValid);

  // 만 19세 이상 가입
  const currentDate = new Date();
  const minDate = new Date(
    currentDate.getFullYear() - 19,
    currentDate.getMonth(),
    currentDate.getDate() + 1,
  )
    .toISOString()
    .split("T")[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signup.createUser(signupForm.code || "", {
        id: signupForm.id,
        password: signupForm.password,
        name: signupForm.name,
        email: signupForm.email,
        birthday: signupForm.birthday,
        phonenumber: signupForm.phonenumber,
        ageConsent: isValid.acChecked,
        termsOfService: isValid.tosChecked,
        privacyConsent: isValid.pcChecked,
        marketConsent: isValid.mcChecked,
      });
      console.log(response);
      if (response.status === 200) {
        dispatch(openModal("회원가입이 완료되었습니다."));
        dispatch(setSignupSuccess(true));
        navigate("/login");
      }
    } catch (error: any) {
      console.error(error.message);
      dispatch(openModal(error.message));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  // 아이디, 이메일 중복확인
  const handleDuplicated = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    if (name === "idDuplicationBtn") {
      checkDuplicated("id", "아이디", signupForm.id || "");
    } else if (name === "emailDuplicationBtn") {
      checkDuplicated("email", "이메일", signupForm.email || "");
    }
  };

  // 약관 동의
  const handleAllChecked = () => {
    checkAllChecked();
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    checkConsent(id, checked);
  };

  // 휴대폰 번호 및 인증번호 값 가져오기
  const getAuthenticationForm = (values: SignupFormType) => {
    signupForm.phonenumber = values.phonenumber;
    signupForm.code = values.code;
  };

  // 생년월일 값 가져오기
  const handleChangeBday = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = new Date(e.target.value);
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");

    setSignupForm({ ...signupForm, birthday: `${year}-${month}-${day}` });
    // setIsValid((prev) => ({ ...prev, birthday: true }));
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
                onChange={handleChange}
                required
              />
              <St.Button
                type="button"
                name="idDuplicationBtn"
                onClick={handleDuplicated}
                disabled={!isValid.id}
              >
                중복확인
              </St.Button>
            </St.Field>
            {signupForm.id && isValid.id === false && (
              <ErrorMessage>{validMessage.idMessage}</ErrorMessage>
            )}
            {signupForm.id && isValid.idDuplication && (
              <SuccessMessage>
                {validMessage.idDuplicationMessage}
              </SuccessMessage>
            )}
            {signupForm.id !== "" && !isValid.idDuplication && (
              <ErrorMessage>{validMessage.idDuplicationMessage}</ErrorMessage>
            )}
          </St.InputField>

          {/* 비밀번호 input */}
          <St.InputField>
            <St.P>비밀번호</St.P>
            <PasswordInput
              name="password"
              value={signupForm.password}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              onChange={handleChange}
            />
            {signupForm.password && !isValid.password && (
              <ErrorMessage>{validMessage.passwordMessage}</ErrorMessage>
            )}
            <PasswordInput
              name="passwordConfirm"
              value={signupForm.passwordConfirm}
              placeholder="비밀번호 재입력"
              onChange={handleChange}
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
              onChange={handleChange}
              required
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
                onChange={handleChange}
              />
              <St.Button
                type="button"
                name="emailDuplicationBtn"
                onClick={handleDuplicated}
                disabled={isValid.email === false}
              >
                중복확인
              </St.Button>
            </St.Field>
            {signupForm.email && isValid.email === false && (
              <ErrorMessage>{validMessage.emailMessage}</ErrorMessage>
            )}
            {signupForm.email && isValid.emailDuplication && (
              <SuccessMessage>
                {validMessage.emailDuplicationMessage}
              </SuccessMessage>
            )}
            {signupForm.email !== "" && !isValid.emailDuplication && (
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
              max={minDate}
              onChange={handleChangeBday}
              required
            />
          </St.InputField>

          {/* 휴대폰 번호 input */}
          <AuthenticationNumber
            option="phonenumber"
            page="signup"
            getAuthenticationForm={getAuthenticationForm}
          />

          {/* 약관 동의 */}
          <St.Ul>
            <St.Li>
              <St.Checkbox
                type="checkbox"
                id="all-agree"
                checked={isValid.allChecked}
                onChange={handleAllChecked}
              />
              <label htmlFor="all-agree">전체동의</label>
            </St.Li>
            <hr />
            <St.Li>
              <St.Checkbox
                type="checkbox"
                id="age-consent"
                checked={isValid.acChecked}
                onChange={handleCheckBoxChange}
                required
              />
              <label htmlFor="age-consent">만 19세 이상입니다. (필수)</label>
            </St.Li>
            <St.Li>
              <St.Checkbox
                type="checkbox"
                id="terms-of-service"
                checked={isValid.tosChecked}
                onChange={handleCheckBoxChange}
                required
              />
              <label htmlFor="terms-of-service">
                서비스 이용약관 동의 (필수)
              </label>
            </St.Li>
            <St.Li>
              <St.Checkbox
                type="checkbox"
                id="privacy-consent"
                checked={isValid.pcChecked}
                onChange={handleCheckBoxChange}
                required
              />
              <label htmlFor="privacy-consente">
                개인정보 수집 및 이용 동의 (필수)
              </label>
            </St.Li>
            <St.Li>
              <St.Checkbox
                type="checkbox"
                id="marketing-consent"
                checked={isValid.mcChecked}
                onChange={handleCheckBoxChange}
              />
              <label htmlFor="marketing-consent">
                마케팅 활용 동의 및 광고 수신 동의 (선택)
              </label>
            </St.Li>
          </St.Ul>

          {/* 회원가입 버튼 */}
          <St.SignupBtn type="submit" disabled={disabledBtn}>
            회원가입
          </St.SignupBtn>
          <St.CancelBtn type="button" onClick={() => navigate("/")}>
            취소
          </St.CancelBtn>
        </form>
        <Modal page="signup" />
      </St.Container>
    </St.Section>
  );
};

export default Signup;
/* eslint-disable @typescript-eslint/no-unused-vars */
