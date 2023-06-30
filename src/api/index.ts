import { CreateUser, LoginFormType } from "types";
import { setCookie } from "./cookies";
import { authAxios, baseAxios } from "./instance";

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
    // console.log(setCookie);
    return response;
  },
  // await authAxios.post("/login", params).then((response) => {
  //   axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
  //   console.log(response);
  //   return response;
  // });
};

// 로그인한 유저정보
export const userData = {
  data: (params: LoginFormType) => {
    const response = baseAxios.get(`/tmi`, { params: { id: params.id } });
    return response;
  },
};
