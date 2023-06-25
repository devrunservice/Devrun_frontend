import { CreateUser } from "types";
import { baseAxios } from "./instance";

// 회원가입
export const createUser = async (params: CreateUser) => {
  try {
    const response = await baseAxios.post(`/signup/okay`, params);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error("회원가입에 실패했습니다.");
  }
};

// 인증번호 받기
export const getAuthenticationNumber = async (params: CreateUser) => {
  try {
    const response = await baseAxios.post(`/signup/auth/`, params);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error("인증번호 받기에 실패했습니다.");
  }
};

// 인증번호 확인
export const checkAuthenticationNumber = async (params: CreateUser) => {
  try {
    const response = await baseAxios.post(`/verify`, params);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error("인증번호가 일치하지 않습니다.");
  }
};

// 아이디 중복 확인
export const getDuplicatedUserId = async (params: CreateUser) => {
  try {
    const response = await baseAxios.post(`/checkID`, params);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error("아이디 중복 확인에 실패했습니다.");
  }
};
