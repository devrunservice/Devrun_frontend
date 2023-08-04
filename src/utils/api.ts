/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CreateUser,
  LoginFormType,
  tmi,
  RequestPayResponse,
  SignupFormType,
  TokenType,
  CouponGet,
} from "types";
import * as I from "types";

import { baseAxios, authAxios } from "./instance";

export const signup = {
  // 회원가입
  createUser: async (code: string, params: CreateUser) => {
    const response = await baseAxios.post(`/signup/okay?code=${code}`, params);
    return response;
  },
  // 인증번호 받기
  getAuthenticationNumber: async (params: CreateUser) => {
    const response = await baseAxios.post(`/auth/phone/`, params);
    return response;
  },
  // 인증번호 확인
  checkAuthenticationNumber: async (params: CreateUser) => {
    const response = await baseAxios.post(`/verify`, params);
    return response;
  },
  // 아이디 중복확인
  getDuplicatedId: async (params: CreateUser) => {
    const response = await baseAxios.post(`/checkID`, params);
    return response;
  },
  // 이메일 중복확인
  getDuplicatedEmail: async (params: CreateUser) => {
    const response = await baseAxios.post(`/checkEmail`, params);
    return response;
  },
  // 휴대폰 중복확인
  getDuplicatedPhonnumber: async (params: CreateUser) => {
    const response = await baseAxios.post("/checkPhone", params);
    return response;
  },
};

export const login = {
  checkLoginUser: async (params: LoginFormType) => {
    const response = await baseAxios.post("/login", params);
    return response;
  },
  checkLogout: async (params: TokenType) => {
    const config = {
      headers: {
        Refresh_token: `${params}`,
      },
    };
    const response = await baseAxios.post("/logout", null, config);
    return response;
  },
  refreshAccessToken: async (params: string) => {
    const config = {
      headers: {
        Refresh_token: `${params}`,
      },
    };
    const response = await authAxios.post("/token/refresh", null, config);
    return response.data.Access_token;
  },
  checkKakaoLogin: async (params: string) => {
    const response = await baseAxios.get(`/auth/kakao/callback?code=${params}`);
    console.log(response);
    return response;
  },
};

export const findAccount = {
  findIdByPhonenumber: async (params: SignupFormType) => {
    console.log(params);
    const response = await baseAxios.post("/find/id", params);
    return response;
  },
  findIdByEmail: async (params: SignupFormType) => {
    const response = await baseAxios.post("/find/uid", params);
    return response;
  },
  findPassword: async (params: SignupFormType) => {
    const response = await baseAxios.post("/find/password", params);
    return response;
  },
  checkIdPhonenumberMatched: async (params: SignupFormType) => {
    const response = await baseAxios.post("verifyPhone", params);
    console.log(response);
    return response;
  },
};

// 로그인한 유저정보
export const userData = {
  createUser: (params: tmi) => {
    const response = authAxios.get("/tmi", { params: { id: params } });
    return response;
  },
};

export const Cart = {
  callbak: (params: RequestPayResponse) => {
    const response = authAxios.post(`/verifyIamport/${params.imp_uid}`);
    return response;
  },
  save: (params: I.CallbackData[]) => {
    const response = authAxios.post("/savePaymentInfo", params);
    return response;
  },
  coupon: (params: I.Coupon) => {
    const response = authAxios.post(`/applyCoupon`, params);
    return response;
  },
  refund: (params: I.Refund) => {
    const response = authAxios.post("/payment", params);
    return response;
  },
};

export const Search = {
  mygage: (params: I.MySearch) => {
    const response = authAxios.get("/params", { params: { params } });
    return response;
  },
};
export const mygage = {
  pay: () => {
    const response = authAxios.get("/PaymentInfo");
    return response;
  },
  coupon: (params: I.CouponGet) => {
    const response = authAxios.post("​/coupon​/registrate", params);
  },
};
/* eslint-disable @typescript-eslint/no-unused-vars */
