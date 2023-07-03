import { signup } from "api";
import { useEffect, useState } from "react";
import { FormType } from "types";

const useValid = (form: FormType) => {
  const [validMessage, setValidMessage] = useState({
    userIdMessage: "",
    passwordMessage: "",
    passwordConfirmMessage: "",
    emailMessage: "",
    phonenumberMessage: "",
    codeMessage: "",
    userIdDuplicationMessage: "",
    emailDuplicationMessage: "",
  });
  const [isValid, setIsValid] = useState({
    userId: false,
    password: false,
    passwordConfirm: false,
    email: false,
    name: false,
    birthday: false,
    phonenumber: false,
    code: false,
    codeBtn: false,
    checkCodeBtn: false,
    userIdDuplication: false,
    emailDuplication: false,
  });

  // 아이디 유효성 검사
  useEffect(() => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{5,13}$/;

    if (!regex.test(form.userId)) {
      setValidMessage((prev) => ({
        ...prev,
        userIdMessage: "영어, 숫자를 포함한 5자 이상 13자 이하로 입력해주세요.",
      }));
      setIsValid({ ...isValid, userId: false });
    } else {
      setIsValid({ ...isValid, userId: true });
    }

    if (
      (isValid.userIdDuplication && isValid.userId) ||
      (isValid.userIdDuplication && !isValid.userId)
    ) {
      setValidMessage((prev) => ({
        ...prev,
        userIdDuplicationMessage: "중복확인을 다시 해주세요",
      }));
      setIsValid((prev) => ({ ...prev, userIdDuplication: false }));
    }
  }, [form.userId]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,15}$/;

    if (!regex.test(form.password)) {
      setValidMessage((prev) => ({
        ...prev,
        passwordMessage:
          "숫자, 영문, 특수문자를 포함하여 최소 8자를 입력해주세요",
      }));
      setIsValid({ ...isValid, password: false });
    } else {
      setIsValid({ ...isValid, password: true });
    }
  }, [form.password]);

  // 비밀번호 확인
  useEffect(() => {
    if (form.password !== form.passwordConfirm) {
      setValidMessage((prev) => ({
        ...prev,
        pwdConfirmMessage: "비밀번호가 일치하지 않습니다.",
      }));
      setIsValid({ ...isValid, passwordConfirm: false });
    } else {
      setIsValid({ ...isValid, passwordConfirm: true });
    }
  }, [form.passwordConfirm]);

  // 이메일 유효성 검사
  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(form.email)) {
      setValidMessage((prev) => ({
        ...prev,
        emailMessage: "올바른 이메일 형식이 아닙니다.",
      }));
      setIsValid({ ...isValid, email: false });
    } else {
      setIsValid({ ...isValid, email: true });
    }

    if (
      (isValid.emailDuplication && isValid.email) ||
      (isValid.emailDuplication && !isValid.email)
    ) {
      setValidMessage((prev) => ({
        ...prev,
        emailDuplicationMessage: "중복확인을 다시 해주세요",
      }));
      setIsValid((prev) => ({ ...prev, emailDuplication: false }));
    }
  }, [form.email]);

  // 휴대폰 유효성 검사
  useEffect(() => {
    const regex = /^01([016789])(?:\d{3}|\d{4})\d{4}$/;

    if (!regex.test(form.phonenumber)) {
      setIsValid({ ...isValid, phonenumber: false });
    } else {
      setIsValid({ ...isValid, phonenumber: true });
    }

    if (
      (!isValid.phonenumber && isValid.codeBtn) ||
      (isValid.phonenumber && isValid.codeBtn)
    ) {
      setValidMessage((prev) => ({
        ...prev,
        phonenumberMessage: "인증번호를 다시 받아주세요.",
      }));
      setIsValid((prev) => ({ ...prev, codeBtn: false }));
    }
  }, [form.phonenumber]);

  // 인증번호
  useEffect(() => {
    if (!isValid.code && isValid.checkCodeBtn) {
      setValidMessage((prev) => ({
        ...prev,
        codeMessage: "올바른 인증번호를 입력해주세요.",
      }));
    }
  }, [form.code]);

  // 아이디 중복확인
  const checkDuplicatedUserId = async (id: string) => {
    const response = await signup.getDuplicatedUserId({ id });
    console.log("response: ", response);
    if (response.data === 0) {
      setValidMessage((prev) => ({
        ...prev,
        userIdDuplicationMessage: "사용 가능한 아이디입니다.",
      }));
      setIsValid((prev) => ({ ...prev, userIdDuplication: true }));
    } else if (response.data === 1) {
      setValidMessage((prev) => ({
        ...prev,
        userIdDuplicationMessage: "이미 사용중인 아이디입니다.",
      }));
      setIsValid((prev) => ({ ...prev, userIdDuplication: false }));
    }
  };

  // 이메일 중복확인
  const checkDuplicatedEmail = async (email: string) => {
    const response = await signup.getDuplicatedEmail({ email });
    console.log("response: ", response);
    if (response.data === 0) {
      setValidMessage((prev) => ({
        ...prev,
        emailDuplicationMessage: "사용 가능한 이메일 입니다.",
      }));
      setIsValid((prev) => ({ ...prev, emailDuplication: true }));
    } else if (response.data === 1) {
      setValidMessage((prev) => ({
        ...prev,
        emailDuplicationMessage: "이미 사용중인 이메일 입니다.",
      }));
      setIsValid((prev) => ({ ...prev, emailDuplication: false }));
    }
  };

  // 휴대폰 인증번호
  const requestAuthenticationNumber = async (phonenumber: string) => {
    try {
      const response = await signup.getAuthenticationNumber({
        phonenumber,
      });

      if (response.status === 200) {
        setValidMessage((prev) => ({
          ...prev,
          phonenumberMessage: "인증번호가 요청되었습니다.",
        }));
        setIsValid((prev) => ({ ...prev, phonenumber: true }));
        setIsValid((prev) => ({ ...prev, codeBtn: true }));
      }
    } catch (error) {
      setValidMessage((prev) => ({
        ...prev,
        phonenumberMessage: "인증번호 요청에 실패했습니다.",
      }));
      setIsValid((prev) => ({ ...prev, phonenumber: false }));
      setIsValid((prev) => ({ ...prev, codeBtn: false }));
    }
  };

  // 인증번호 확인
  const verifyAuthenticationNumber = async (
    phonenumber: string,
    code: string,
  ) => {
    try {
      const response = await signup.checkAuthenticationNumber({
        phonenumber,
        code,
      });
      if (response.status === 200) {
        setValidMessage((prev) => ({
          ...prev,
          codeMessage: "인증 완료 되었습니다.",
        }));
        setIsValid((prev) => ({ ...prev, code: true }));
        setIsValid((prev) => ({ ...prev, checkCodeBtn: true }));
      }
    } catch (error) {
      setValidMessage((prev) => ({
        ...prev,
        codeMessage: "올바르지 않은 인증번호 입니다.",
      }));
      setIsValid((prev) => ({ ...prev, code: false }));
      setIsValid((prev) => ({ ...prev, checkCodeBtn: false }));
    }
  };
  return {
    validMessage,
    setValidMessage,
    isValid,
    setIsValid,
    checkDuplicatedUserId,
    checkDuplicatedEmail,
    requestAuthenticationNumber,
    verifyAuthenticationNumber,
  };
};

export default useValid;
