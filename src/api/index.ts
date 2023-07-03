import { CreateUser } from "types";
import { baseAxios } from "./instance";

export const signup = {
  // 회원가입
  createUser: (params: CreateUser) => {
    const response = baseAxios.post(`/signup/okay`, params);
    return response;
  },
  // 인증번호 받기
  getAuthenticationNumber: (params: CreateUser) => {
    const response = baseAxios.post(`/signup/auth/`, params);
    return response;
  },
  // 인증번호 확인
  checkAuthenticationNumber: (params: CreateUser) => {
   const response = baseAxios.post(`/verify`, params);
   return response;
    
  },
  // 아이디 중복확인
  getDuplicatedUserId: (params: CreateUser) => {
    const response = baseAxios.post(`/checkID`, params);
    return response;
  },
  // 이메일 중복확인
  getDuplicatedEmail: (params: CreateUser) => {
    const response = baseAxios.post(`/checkEmail`, params);
    return response;
  },
};

// 로그인한 유저정보
export const userData = {
  data:() => baseAxios.get("/tmi")
} 
export const login = {};
