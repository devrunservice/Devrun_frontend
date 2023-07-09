/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateUser, LoginFormType, SignupFormType, tmi } from "types";
import { setCookie } from "./cookies";
import { authAxios, accAxios } from "./instance";

export const signup = {
  // 회원가입
  createUser: (params: CreateUser) => {
    const response = authAxios.post(`/signup/okay`, params);
    return response;
  },
  // 인증번호 받기
  getAuthenticationNumber: (params: CreateUser) => {
    const response = authAxios.post(`/signup/auth/`, params);
    return response;
  },
  // 인증번호 확인
  checkAuthenticationNumber: (params: CreateUser) => {
    const response = authAxios.post(`/verify`, params);
    return response;
  },
  // 아이디 중복확인
  getDuplicatedId: (params: CreateUser) => {
    const response = authAxios.post(`/checkID`, params);
    return response;
  },
  // 이메일 중복확인
  getDuplicatedEmail: (params: CreateUser) => {
    const response = authAxios.post(`/checkEmail`, params);
    return response;
  },
  getDuplicatedPhonnumber: (params: CreateUser) => {
    const response = authAxios.post("/checkPhone", params);
    return response;
  },
};

export const login = {
  checkLoginUser: async (params: LoginFormType) => {
    const response = await authAxios.post("/login", params);
    setCookie("accessToken", response.data.authorization.substr(7));
    console.log(response);
    return response;
  },
};

export const userInfo = {
  findIdByPhonenumber: async (params: SignupFormType) => {
    const response = await authAxios.post("/find/uid", params);
    console.log(response);
    return response;
  },
  findIdByEmail: async (params: SignupFormType) => {
    const response = await authAxios.post("/find/uid", params);
    console.log(response);
    return response;
  },
  findPassword: async (params: SignupFormType) => {
    const response = await authAxios.post("/find/upass", params);
    console.log(response);
    return response;
  },
};

// 로그인한 유저정보
export const userData = {
  createUser: (id: tmi) => {
    const response = accAxios.get("/tmi", {
      params: { id: id.id },
    });
    return response;
  },
};
/* eslint-disable @typescript-eslint/no-unused-vars */
