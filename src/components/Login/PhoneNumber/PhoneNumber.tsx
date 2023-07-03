import useValid from "hooks/useValid";
import React, { useState } from "react";
import { ErrorMessage, Input, SuccessMessage } from "style/Common";
import { SignupFormType } from "types";
import * as St from "./styles";

const PhoneNumber = ({
  option,
  getPhonenumberForm,
}: {
  option: string;
  getPhonenumberForm: (values: SignupFormType) => void;
}) => {
  const [phonenumberForm, setPhonenumberForm] = useState<SignupFormType>({
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
  } = useValid(phonenumberForm);

  const handleInputChange = () => {
    const values: SignupFormType = {
      phonenumber: phonenumberForm.phonenumber,
      code: phonenumberForm.code,
    };
    getPhonenumberForm(values);
  };

  // 휴대폰 인증번호
  const handleGetAuthenticationNumber = () => {
    requestAuthenticationNumber(phonenumberForm.phonenumber || "");
  };

  // 인증번호 확인
  const handleCheckAuthenticationNumber = () => {
    verifyAuthenticationNumber(
      phonenumberForm.phonenumber || "",
      phonenumberForm.code || "",
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
              value={phonenumberForm.phonenumber}
              placeholder="휴대폰 번호 '-' 제외하고 입력"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPhonenumberForm({
                  ...phonenumberForm,
                  phonenumber: e.target.value,
                });
                setIsValid((prev) => ({ ...prev, code: true }));
                handleInputChange();
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
            <SuccessMessage>{validMessage.phonenumberMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{validMessage.phonenumberMessage}</ErrorMessage>
          )}
          <St.Field>
            <Input
              type="text"
              name="code"
              value={phonenumberForm.code}
              placeholder="인증번호 입력"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPhonenumberForm({
                  ...phonenumberForm,
                  code: e.target.value,
                });
                setIsValid((prev) => ({ ...prev, code: true }));
                handleInputChange();
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
        </>
      ) : (
        <>
          <St.P>이메일</St.P>
          <St.Field>
            <Input
              type="text"
              name="email"
              value={phonenumberForm.email}
              placeholder="이메일"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPhonenumberForm({
                  ...phonenumberForm,
                  email: e.target.value,
                });
                setIsValid((prev) => ({ ...prev, code: true }));
                handleInputChange();
              }}
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
              value={phonenumberForm.code}
              placeholder="인증번호 입력"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPhonenumberForm({
                  ...phonenumberForm,
                  code: e.target.value,
                });
                setIsValid((prev) => ({ ...prev, code: true }));
                handleInputChange();
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
        </>
      )}
    </St.InputField>
  );
};
export default PhoneNumber;
