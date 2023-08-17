/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { findAccount, signup } from "utils/api";
import { SignupFormType } from "types";
import { openModal } from "../redux/reducer/modalReducer";
import {
  updateValidState,
  updateMessageState,
} from "../redux/reducer/validationReducer";

const useValid = (form: SignupFormType) => {
  const dispatch = useDispatch();
  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState,
  );

  const updateValid = (name: string, state: boolean) => {
    dispatch(updateValidState({ name, value: state }));
  };
  const updateMessage = (name: string, message: string) => {
    dispatch(updateMessageState({ name, message }));
  };

  const getAuthenticationNumber = async (phonenumber: string) => {
    try {
      const response = await signup.getAuthenticationNumber({
        phonenumber,
      });
      console.log(response);
      if (response.status === 200) {
        console.log("인증번호 요청 완료");
        updateMessage("phonenumberMessage", "인증번호가 요청되었습니다.");
        updateValid("phonenumber", true);
        updateValid("codeBtn", true);
      }
    } catch (error) {
      console.log("인증번호 요청 실패");
      updateMessage("phonenumberMessage", "인증번호 요청에 실패했습니다.");
      updateValid("phonenumber", false);
      updateValid("codeBtn", false);
    }
  };

  // 아이디 유효성 검사
  useEffect(() => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{5,13}$/;

    if (!regex.test(form.id || "")) {
      updateMessage(
        "idMessage",
        "영어, 숫자를 포함한 5 ~ 13자로 입력해주세요.",
      );
      updateValid("id", false);
    } else {
      updateValid("id", true);
    }

    if (validState.idDuplication || !validState.idDuplication) {
      updateMessage("idDuplicationMessage", "중복확인을 해주세요");
      updateValid("idDuplication", false);
    }
  }, [form.id]);

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
      updateMessage(
        `${option}DuplicationMessage`,
        `사용 가능한 ${korean}입니다.`,
      );
      updateValid(`${option}Duplication`, true);
    } else if (response.data === 1) {
      updateMessage(
        `${option}DuplicationMessage`,
        `이미 사용중인 ${korean}입니다.`,
      );
      updateValid(`${option}Duplication`, false);
    }
  };

  // 비밀번호
  useEffect(() => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,15}$/;

    if (!regex.test(form.password || "")) {
      updateMessage(
        "passwordMessage",
        "숫자, 영문, 특수문자 포함한 8 ~ 15자로 입력해주세요.",
      );
      updateValid("password", false);
    } else {
      updateValid("password", true);
    }

    // 비밀번호 확인 유효성 검사
    if (form.password !== form.passwordConfirm) {
      updateMessage("passwordConfirmMessage", "비밀번호가 일치하지 않습니다.");
      updateValid("passwordConfirm", false);
    } else if (!validState.passwordConfirm) {
      updateValid("passwordConfirm", true);
    }
  }, [form.password, form.passwordConfirm]);

  // 이메일 유효성 검사
  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(form.email || "")) {
      updateMessage("emailMessage", "올바른 이메일 형식이 아닙니다.");
      updateValid("email", false);
    } else {
      updateValid("email", true);
    }

    if (validState.emailDuplication || !validState.emailDuplication) {
      updateMessage("emailDuplicationMessage", "중복확인을 해주세요.");
      updateValid("emailDuplication", false);
    }
  }, [form.email]);

  // 휴대폰 유효성 검사
  useEffect(() => {
    const regex = /^01([016789])([0-9]{8})$/;

    if (!regex.test(form.phonenumber || "")) {
      // updateMessage("phonenumberMessage", "- 제외 11자리를 입력해주세요.");
      updateValid("phonenumber", false);
    } else {
      updateValid("phonenumber", true);
    }

    if (
      (!validState.phonenumber && validState.codeBtn) ||
      (validState.phonenumber && validState.codeBtn)
    ) {
      updateMessage("phonenumberMessage", "인증번호를 다시 받아주세요.");
      updateValid("codeBtn", false);
    }
  }, [form.phonenumber]);

  // 휴대폰 인증번호
  const requestAuthenticationNumber = async (
    page: string,
    phonenumber: string,
    findOption?: string,
    id?: string,
  ) => {
    if (page === "signup") {
      // 회원가입에서 휴대폰 중복확인
      const response = await signup.getDuplicatedPhonnumber({
        phonenumber,
      });
      console.log(response);
      if (response.data === 0) {
        getAuthenticationNumber(phonenumber);
      } else {
        console.log("현재 가입된 번호");
        updateMessage("phonenumberMessage", "현재 가입된 번호입니다.");
        updateValid("phonenumber", false);
        updateValid("codeBtn", false);
      }
    } else if (page === "findAccount") {
      if (findOption === "password") {
        // 계정 찾기에서 비밀번호 찾기일 때
        try {
          const response = await findAccount.checkIdPhonenumberMatched({
            id,
            phonenumber,
          });
          console.log(response);
          // 아이디와 비밀번호가 일치하면
          if (response.data === true) {
            getAuthenticationNumber(phonenumber);
          } else if (response.data === false) {
            console.log(response);
            dispatch(openModal("정보가 등록된 계정과 일치하지 않습니다."));
            // updateMessage(
            //   "phonenumberMessage",
            //   "정보가 등록된 계정과 일치하지 않습니다.",
            // );
            updateValid("phonenumber", false);
            updateValid("codeBtn", false);
          }
        } catch (error) {
          console.log(error);
        }
      } else if (findOption === "id") {
        try {
          const response = await signup.getDuplicatedPhonnumber({
            phonenumber,
          });
          console.log(response);
          if (response.data === 1) {
            getAuthenticationNumber(phonenumber);
          } else if (response.data === 0) {
            dispatch(openModal("입력하신 정보는 없는 정보입니다."));
            // updateMessage(
            //   "phonenumberMessage",
            //   "입력하신 정보는 없는 정보입니다.",
            // );
            updateValid("phonenumber", false);
            updateValid("codeBtn", false);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else if (page === "profileUpdate") {
      // 프로필에서 휴대폰 인증번호 받기
      getAuthenticationNumber(phonenumber);
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
        updateMessage("codeMessage", "인증 완료 되었습니다.");
        updateValid("code", true);
        updateValid("checkCodeBtn", true);
      }
    } catch (error) {
      updateMessage("codeMessage", "올바르지 않은 인증번호 입니다.");
      updateValid("code", false);
      updateValid("checkCodeBtn", false);
    }
  };

  return {
    checkDuplicated,
    requestAuthenticationNumber,
    verifyAuthenticationNumber,
  };
};

export default useValid;
/* eslint-disable @typescript-eslint/no-unused-vars */
