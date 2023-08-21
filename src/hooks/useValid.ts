/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { findAccount, signup } from "utils/api";
import { IsValidType, IsValidMessageType, SignupFormType } from "types";
import { openModal } from "../redux/reducer/modalReducer";

const useValid = (form: SignupFormType) => {
  const dispatch = useDispatch();
  const [validMessage, setValidMessage] = useState<IsValidMessageType>({
    idMessage: "",
    passwordMessage: "",
    passwordConfirmMessage: "",
    emailMessage: "",
    phonenumberMessage: "",
    codeMessage: "",
    idDuplicationMessage: "",
    emailDuplicationMessage: "",
  });
  const [isValid, setIsValid] = useState<IsValidType>({
    id: false,
    password: false,
    passwordConfirm: false,
    email: false,
    name: false,
    // birthday: false,
    phonenumber: false,
    code: false,
    codeBtn: false,
    checkCodeBtn: false,
    idDuplication: false,
    emailDuplication: false,
    allChecked: false,
    acChecked: false,
    tosChecked: false,
    pcChecked: false,
    mcChecked: false,
  });

  // 아이디 유효성 검사
  useEffect(() => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{5,13}$/;

    if (!regex.test(form.id || "")) {
      setValidMessage((prev) => ({
        ...prev,
        idMessage: "영어, 숫자를 포함한 5 ~ 13자로 입력해주세요.",
      }));
    } else {
      setIsValid({ ...isValid, id: true });
    }

    if (isValid.idDuplication || !isValid.idDuplication) {
      setValidMessage((prev) => ({
        ...prev,
        idDuplicationMessage: "중복확인을 해주세요",
      }));
      setIsValid((prev) => ({ ...prev, idDuplication: false }));
    }
  }, [form.id]);
  console.log(isValid)
  // 아이디, 이메일 중복확인
  const checkDuplicated = async (
    option: string,
    korean: string,
    value: string,
  ) => {
    const response =
      option === "id"
        ? await signup.getDuplicatedId({ id: value })
        : await signup.getDuplicatedEmail({ email: value });
    console.log(response);
    if (response.data === 0) {
      setValidMessage((prev) => ({
        ...prev,
        [`${option}DuplicationMessage`]: `사용 가능한 ${korean}입니다.`,
      }));
      setIsValid((prev) => ({ ...prev, [`${option}Duplication`]: true }));
    } else if (response.data === 1) {
      setValidMessage((prev) => ({
        ...prev,
        [`${option}DuplicationMessage`]: `이미 사용중인 ${korean}입니다.`,
      }));
      setIsValid((prev) => ({ ...prev, [`${option}Duplication`]: false }));
    }
  };

  // 비밀번호
  useEffect(() => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,15}$/;

    if (!regex.test(form.password || "")) {
      setValidMessage((prev) => ({
        ...prev,
        passwordMessage: "숫자, 영문, 특수문자 포함한 8 ~ 15자로 입력해주세요",
      }));
      setIsValid({ ...isValid, password: false });
    } else {
      setIsValid({ ...isValid, password: true });
    }

    // 비밀번호 확인 유효성 검사
    if (form.password !== form.passwordConfirm) {
      setValidMessage((prev) => ({
        ...prev,
        passwordConfirmMessage: "비밀번호가 일치하지 않습니다.",
      }));
      setIsValid((prev) => ({ ...prev, passwordConfirm: false }));
    } else if (!isValid.passwordConfirm) {
      setIsValid((prev) => ({ ...prev, passwordConfirm: true }));
    }
  }, [form.password, form.passwordConfirm]);

  // 이메일 유효성 검사
  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(form.email || "")) {
      setValidMessage((prev) => ({
        ...prev,
        emailMessage: "올바른 이메일 형식이 아닙니다.",
      }));
      setIsValid({ ...isValid, email: false });
    } else {
      setIsValid({ ...isValid, email: true });
    }

    if (isValid.emailDuplication || !isValid.emailDuplication) {
      setValidMessage((prev) => ({
        ...prev,
        emailDuplicationMessage: "중복확인을 해주세요",
      }));
      setIsValid((prev) => ({ ...prev, emailDuplication: false }));
    }
  }, [form.email]);

  // 휴대폰 유효성 검사
  useEffect(() => {
    const regex = /^01([016789])([0-9]{8})$/;

    if (!regex.test(form.phonenumber || "")) {
      // setValidMessage((prev) => ({
      //   ...prev,
      //   phonenumberMessage: "- 제외 11자리를 입력해주세요.",
      // }));
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

  // 인증번호;
  // useEffect(() => {
  //   if (!isValid.code && isValid.checkCodeBtn) {
  //     setValidMessage((prev) => ({
  //       ...prev,
  //       codeMessage: "올바른 인증번호를 입력해주세요.",
  //     }));
  //   }
  // }, [form.code]);

  // 휴대폰 인증번호
  const requestAuthenticationNumber = async (
    page: string,
    phonenumber: string,
    findOption?: string,
    id?: string,
  ) => {
    if (page === "signup") {
      // 휴대폰 중복확인
      const response = await signup.getDuplicatedPhonnumber({
        phonenumber,
      });
      console.log(response);
      if (response.data === 0) {
        try {
          await signup.getAuthenticationNumber({
            phonenumber,
          });
          setValidMessage((prev) => ({
            ...prev,
            phonenumberMessage: "인증번호가 요청되었습니다.",
          }));
          setIsValid((prev) => ({ ...prev, phonenumber: true }));
          setIsValid((prev) => ({ ...prev, codeBtn: true }));
        } catch (error) {
          setValidMessage((prev) => ({
            ...prev,
            phonenumberMessage: "인증번호 요청에 실패했습니다.",
          }));
          setIsValid((prev) => ({ ...prev, phonenumber: false }));
          setIsValid((prev) => ({ ...prev, codeBtn: false }));
        }
      } else {
        setValidMessage((prev) => ({
          ...prev,
          phonenumberMessage: "현재 가입된 번호입니다.",
        }));
        setIsValid((prev) => ({ ...prev, phonenumber: false }));
        setIsValid((prev) => ({ ...prev, codeBtn: false }));
      }
    } else if (page === "findAccount") {
      if (findOption === "password") {
        // 계정 찾기에서 비밀번호 찾기일 때
        try {
          let response = await findAccount.checkIdPhonenumberMatched({
            id,
            phonenumber,
          });
          console.log(response);
          // 아이디와 비밀번호가 일치하면
          if (response.data === true) {
            try {
              response = await signup.getAuthenticationNumber({
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
              setIsValid((prev) => ({
                ...prev,
                codeBtn: false,
              }));
            }
          } else if (response.data === false) {
            // setValidMessage((prev) => ({
            //   ...prev,
            //   phonenumberMessage: "정보가 등록된 계정과 일치하지 않습니다.",
            // }));
            dispatch(openModal("정보가 등록된 계정과 일치하지 않습니다."));
            setIsValid((prev) => ({ ...prev, phonenumber: false }));
            setIsValid((prev) => ({ ...prev, codeBtn: false }));
          }
        } catch (error) {
          console.log(error);
        }
      } else if (findOption === "id") {
        try {
          let response = await signup.getDuplicatedPhonnumber({
            phonenumber,
          });
          console.log(response);
          if (response.data === 1) {
            try {
              response = await signup.getAuthenticationNumber({
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
          } else if (response.data === 0) {
            // setValidMessage((prev) => ({
            //   ...prev,
            //   phonenumberMessage: "입력하신 정보는 없는 정보입니다.",
            // }));
            dispatch(openModal("입력하신 정보는 없는 정보입니다."));
            setIsValid((prev) => ({ ...prev, phonenumber: false }));
            setIsValid((prev) => ({ ...prev, codeBtn: false }));
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else if (page === "profileUpdate") {
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

  // 약관동의
  const checkAllChecked = () => {
    setIsValid((prev) => ({
      ...prev,
      allChecked: !prev.allChecked,
      acChecked: !prev.allChecked,
      tosChecked: !prev.allChecked,
      pcChecked: !prev.allChecked,
      mcChecked: !prev.allChecked,
    }));
  };

  const checkConsent = (id: string, checked: boolean) => {
    console.log(id, checked);
    if (id === "age-consent") {
      setIsValid((prev) => ({
        ...prev,
        acChecked: checked,
        allChecked:
          prev.tosChecked && prev.pcChecked && prev.mcChecked && checked,
      }));
    } else if (id === "terms-of-service") {
      setIsValid((prev) => ({
        ...prev,
        tosChecked: checked,
        allChecked:
          prev.pcChecked && prev.acChecked && prev.mcChecked && checked,
      }));
    } else if (id === "privacy-consent") {
      setIsValid((prev) => ({
        ...prev,
        pcChecked: checked,
        allChecked:
          prev.tosChecked && prev.acChecked && prev.mcChecked && checked,
      }));
    } else if (id === "marketing-consent") {
      setIsValid((prev) => ({
        ...prev,
        mcChecked: checked,
        allChecked:
          prev.pcChecked && prev.tosChecked && prev.acChecked && checked,
      }));
    }
  };
  return {
    validMessage,
    setValidMessage,
    isValid,
    setIsValid,
    checkDuplicated,
    requestAuthenticationNumber,
    verifyAuthenticationNumber,
    checkAllChecked,
    checkConsent,
  };
};

export default useValid;
/* eslint-disable @typescript-eslint/no-unused-vars */
