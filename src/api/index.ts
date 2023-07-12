/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CreateUser,
  LoginFormType,
  tmi,
  RequestPayResponse,
  SignupFormType,
  IMySearch,
} from "types";
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
    console.log(response);
    const accessToken = response.data.Access_token.substr(7);
    // 한시간
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() * 2);
    setCookie("accessToken", accessToken, {
      // 모든페이지에서 쿠키 엑세스 가능
      path: "/",
      // https 일때 true로 바꿔줄것!
      secure: false,
      // 쿠키 훔쳐가는거 막음 로컬에서는 사용이 안된다함
      // httpOnly: true,
      // 쿠키 만료날짜 1시간
      expires: expirationDate,
    });
    setCookie("refreshToken", response.data.Refresh_token);
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

export const token = {
  refreshAccessToken: async (params: string) => {
    const response = await accAxios.post("/token/refresh", params);
    setCookie("accessToken", response.data.Access_token);
    return response.data.Access_token;
  },
};

// 로그인한 유저정보
export const userData = {
  createUser: (params: tmi) => {
    const response = accAxios.get("/tmi", { params: { params } });
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

export const Search ={
  mygage:(params:IMySearch)=>{
    const response = accAxios.get("/params", { params: { params } });
    return response
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
