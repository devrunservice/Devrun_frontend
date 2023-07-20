import useValid from "hooks/useValid";
import React, { useState } from "react";
import { ErrorMessage, Input, SuccessMessage } from "style/Common";
import { SignupFormType } from "types";
import * as St from "./styles";

const AuthenticationNumber = ({
  option,
  getAuthenticationForm,
}: {
  option: string;
  getAuthenticationForm: (values: SignupFormType) => void;
}) => {
  const [authenticationForm, setAuthenticationForm] = useState<SignupFormType>({
    phonenumber: "",
    email: "",
    code: "",
  });

  const {
    isValid,
    setIsValid,
    validMessage,
    requestAuthenticationNumber,
    verifyAuthenticationNumber,
  } = useValid(authenticationForm);

  const handleInputChange = () => {
    const values: SignupFormType = {
      phonenumber: authenticationForm.phonenumber,
      code: authenticationForm.code,
    };
    getAuthenticationForm(values);
  };

  // 휴대폰 인증번호
  const handleGetAuthenticationNumber = () => {
    requestAuthenticationNumber(authenticationForm.phonenumber || "");
  };

  // 인증번호 확인
  const handleCheckAuthenticationNumber = () => {
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAuthenticationForm({
                  ...authenticationForm,
                  phonenumber: e.target.value,
                });
                setIsValid((prev) => ({ ...prev, code: true }));
                handleInputChange();
              }}
              required
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
            <SuccessMessage>{validMessage.phonenumberMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{validMessage.phonenumberMessage}</ErrorMessage>
          )}
          <St.Field>
            <Input
              type="text"
              name="code"
              value={authenticationForm.code}
              placeholder="인증번호 입력"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAuthenticationForm({
                  ...authenticationForm,
                  code: e.target.value,
                });
                setIsValid((prev) => ({ ...prev, code: true }));
                handleInputChange();
              }}
              required
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAuthenticationForm({
                  ...authenticationForm,
                  email: e.target.value,
                });
                setIsValid((prev) => ({ ...prev, code: true }));
                handleInputChange();
              }}
              required
            />
            <St.Button
              type="button"
              onClick={handleGetAuthenticationNumber}
              disabled={!isValid.email}
            >
              인증번호
            </St.Button>
          </St.Field>
          {isValid.codeBtn && isValid.email ? (
            <SuccessMessage>{validMessage.emailMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{validMessage.emailMessage}</ErrorMessage>
          )}
          <St.Field>
            <Input
              type="text"
              name="code"
              value={authenticationForm.code}
              placeholder="인증번호 입력"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAuthenticationForm({
                  ...authenticationForm,
                  code: e.target.value,
                });
                setIsValid((prev) => ({ ...prev, code: true }));
                handleInputChange();
              }}
              required
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
        </>
      )}
    </St.InputField>
  );
};
export default AuthenticationNumber;
