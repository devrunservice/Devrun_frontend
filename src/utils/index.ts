/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CreateUser,
  LoginFormType,
  tmi,
  RequestPayResponse,
  SignupFormType,
  TokenType,
  IMySearch,
} from "types";
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
  // 휴대폰 중복확인
  getDuplicatedPhonnumber: (params: CreateUser) => {
    const response = authAxios.post("/checkPhone", params);
    return response;
  },
};

export const login = {
  checkLoginUser: async (params: LoginFormType) => {
    const response = await authAxios.post("/login", params);
    console.log(response);
    return response;
  },
  checkLogout: async (params: TokenType) => {
    const config = {
      headers: {
        Refresh_token: `${params}`,
      },
    };
    const response = await authAxios.post("/logout", null, config);
    console.log(response);
    return response;
  },
  refreshAccessToken: async (params: string) => {
    const config = {
      headers: {
        Refresh_token: `${params}`,
      },
    };
    const response = await accAxios.post("/token/refresh", null, config);
    console.log(response);
    return response.data.Access_token;
  },
  checkKakaoLogin: async (params: string) => {
    const response = await authAxios.get(
      `${process.env.REACT_APP_SERVER_URL}/auth/kakao/callback?code=${params}`,
    );
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
  createUser: async (params: tmi) => {
    const response = await accAxios.get("/tmi", { params: { id: params } });
    return response;
  },
};

export const Cart = {
  callbak: (params: RequestPayResponse) => {
    const response = accAxios.post(`/verifyIamport/${params.imp_uid}`);
    return response;
  },
  save: (params: RequestPayResponse) => {
    const response = accAxios.post("/savePaymentInfo", params);
    return response;
  },
  refund: (params: any) => {
    const response = accAxios.post("/payment", params);
    return response;
  },
};

export const Search = {
  mygage: (params: IMySearch) => {
    const response = accAxios.get("/params", { params: { params } });
    return response;
  },
};

/* eslint-disable @typescript-eslint/no-unused-vars */
