/* eslint-disable @typescript-eslint/no-unused-vars */
import { getDuplicatedUserId } from "api";
import { useEffect, useState } from "react";
import { FormType, CreateUser } from "types";

const useValid = (form: FormType) => {
  const [validMessage, setValidMessage] = useState({
    userIdMessage: "",
    pwdMessage: "",
    pwdConfirmMessage: "",
    emailMessage: "",
    authenticationNumberMessage: "",
    userIdDuplicationMessage: "",
    emailDuplicationMessage: "",
  });
  const [isValid, setIsValid] = useState({
    userId: false,
    pwd: false,
    pwdConfirm: false,
    email: false,
    name: false,
    bday: false,
    phoneNumber: false,
    verifiedCode: false,
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
  }, [form.userId]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,15}$/;

    if (!regex.test(form.pwd)) {
      setValidMessage((prev) => ({
        ...prev,
        pwdMessage: "숫자, 영문, 특수문자를 포함하여 최소 8자를 입력해주세요",
      }));
      setIsValid({ ...isValid, pwd: false });
    } else {
      setIsValid({ ...isValid, pwd: true });
    }
  }, [form.pwd]);

  // 비밀번호 확인
  useEffect(() => {
    if (form.pwd !== form.pwdConfirm) {
      setValidMessage((prev) => ({
        ...prev,
        pwdConfirmMessage: "비밀번호가 일치하지 않습니다.",
      }));
      setIsValid({ ...isValid, pwdConfirm: false });
    } else {
      setIsValid({ ...isValid, pwdConfirm: true });
    }
  }, [form.pwdConfirm]);

  // 이메일 유효성 검사
  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(form.email)) {
      setValidMessage((prev) => ({
        ...prev,
        emailMessage: "올바른 이메일 형식이 아닙니다.",
      }));
      setIsValid({ ...isValid, email: false });
    } else {
      setIsValid({ ...isValid, email: true });
    }
  }, [form.email]);

  // 아이디 중복확인
  const checkDuplicatedUserId = async (userId: CreateUser) => {
    const response = await getDuplicatedUserId(userId);
    console.log("response: ", response);
    // if (response.data === 0) {
    //   alert("사용 가능한 아이디 입니다.");
    //   setIsValid((prev) => ({ ...prev, userId: true }));
    // } else if (response.data === 1) {
    //   alert("사용중인 아이디 입니다.");
    //   setIsValid((prev) => ({ ...prev, userId: false }));
    // }
  };

  return {
    validMessage,
    isValid,
    setIsValid,
    checkDuplicatedUserId,
  };
};

export default useValid;
/* eslint-disable @typescript-eslint/no-unused-vars */
