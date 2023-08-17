import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import useValid from "hooks/useValid";
import Modal from "components/Login/Modal/Modal";
import { ErrorMessage, Input, SuccessMessage } from "style/Common";
import { SignupFormType } from "types";
import * as St from "./styles";

const AuthenticationNumber = ({
  findOption,
  option,
  id,
  page,
  getAuthenticationForm,
}: {
  findOption?: string;
  option: string;
  id?: string;
  page?: string;
  getAuthenticationForm: (values: SignupFormType, isClicked: boolean) => void;
}) => {
  const [authenticationForm, setAuthenticationForm] = useState<SignupFormType>({
    phonenumber: "",
    email: "",
    code: "",
  });

  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState,
  );
  const messageState = useSelector(
    (state: RootState) => state.validationReducer.messageState,
  );

  const { requestAuthenticationNumber, verifyAuthenticationNumber } =
    useValid(authenticationForm);

  // console.log(isValid);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthenticationForm({
      ...authenticationForm,
      [e.target.name]: e.target.value,
    });
    // setIsValid((prev) => ({ ...prev, code: true }));
  };

  useEffect(() => {
    getAuthenticationForm(
      {
        phonenumber: authenticationForm.phonenumber,
        code: authenticationForm.code,
      },
      validState.checkCodeBtn,
    );
  }, [authenticationForm, validState.checkCodeBtn]);

  // 휴대폰 인증번호
  const handleGetAuthenticationNumber = () => {
    console.log("인증번호 받기");
    requestAuthenticationNumber(
      page || "",
      authenticationForm.phonenumber || "",
      findOption,
      id,
    );
  };

  // 인증번호 확인
  const handleCheckAuthenticationNumber = () => {
    console.log("인증번호 확인 클릭");
    verifyAuthenticationNumber(
      authenticationForm.phonenumber || "",
      authenticationForm.code || "",
    );
  };
  return (
    <St.InputField>
      {option === "phonenumber" ? (
        <>
          <St.P>휴대폰 번호</St.P>
          <St.Field>
            <Input
              type="text"
              name="phonenumber"
              value={authenticationForm.phonenumber}
              placeholder="휴대폰 번호 '-' 제외하고 입력"
              onChange={handleInputChange}
              required
            />
            <St.Button
              type="button"
              onClick={handleGetAuthenticationNumber}
              disabled={!validState.phonenumber}
            >
              인증번호
            </St.Button>
          </St.Field>
          {/* {validState.codeBtn && validState.phonenumber ? (
            <SuccessMessage>{messageState.phonenumberMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{messageState.phonenumberMessage}</ErrorMessage>
          )} */}
          {validState.codeBtn && validState.phonenumber && (
            <SuccessMessage>{messageState.phonenumberMessage}</SuccessMessage>
          )}
          {authenticationForm.phonenumber !== "" &&
            !validState.phonenumber &&
            !validState.codeBtn && (
              <ErrorMessage>{messageState.phonenumberMessage}</ErrorMessage>
            )}
          <Modal option="findPassword" />
          <St.Field>
            <Input
              type="text"
              name="code"
              value={authenticationForm.code}
              placeholder="인증번호 입력"
              onChange={handleInputChange}
              required
            />
            <St.Button type="button" onClick={handleCheckAuthenticationNumber}>
              확인
            </St.Button>
          </St.Field>
          {validState.checkCodeBtn && validState.code ? (
            <SuccessMessage>{messageState.codeMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{messageState.codeMessage}</ErrorMessage>
          )}
        </>
      ) : (
        <>
          <St.P>이메일</St.P>
          <St.Field>
            <Input
              type="text"
              name="email"
              value={authenticationForm.email}
              placeholder="이메일"
              onChange={handleInputChange}
              required
            />
            <St.Button
              type="button"
              onClick={handleGetAuthenticationNumber}
              disabled={!validState.email}
            >
              인증번호
            </St.Button>
          </St.Field>
          {/* {isValid.codeBtn && isValid.email ? (
            <SuccessMessage>{validMessage.emailMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{validMessage.emailMessage}</ErrorMessage>
          )} */}

          {authenticationForm.email && validState.email === false && (
            <ErrorMessage>{messageState.emailMessage}</ErrorMessage>
          )}

          <St.Field>
            <Input
              type="text"
              name="code"
              value={authenticationForm.code}
              placeholder="인증번호 입력"
              onChange={handleInputChange}
              required
            />
            <St.Button type="button" onClick={handleCheckAuthenticationNumber}>
              확인
            </St.Button>
          </St.Field>
          {validState.checkCodeBtn && validState.code ? (
            <SuccessMessage>{messageState.codeMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{messageState.codeMessage}</ErrorMessage>
          )}
        </>
      )}
    </St.InputField>
  );
};
export default AuthenticationNumber;
