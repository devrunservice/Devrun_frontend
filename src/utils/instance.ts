/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { getCookie, setCookie } from "./cookies";

export const authAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});

export const accAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});

authAxios.interceptors.request.use(
  (config) => {
    const easyLoginToken = getCookie("easyLoginToken");
    if (easyLoginToken) {
      config.headers.Easylogin_token = `${easyLoginToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
  },
);

accAxios.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("accessToken");
    config.headers.Access_token = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

accAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorMessage = error.response.data.message;
    const errorStatus = error.response.status;
    const originalRequest = error.config;
    const refreshToken = getCookie("refreshToken");
    let response;
    let newAccessToken;
    let newRefreshToken;

    switch (errorStatus) {
      case 401:
        switch (errorMessage) {
          case "Token is expired":
            response = await authAxios.post("/token/refresh", null, {
              headers: { Refresh_token: refreshToken },
            });
            newAccessToken = response.data.Access_token.substr(7);
            newRefreshToken = response.data.Refresh_token.substr(7);
            setCookie("accessToken", newAccessToken);
            setCookie("refreshToken", newRefreshToken);
            originalRequest.headers.Access_token = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
          default:
            break;
        }
        break;
      case 403:
        switch (errorMessage) {
          case "Signature validation failed":
            return Promise.reject(
              new Error(`오류가 감지되었습니다. 로그인을 다시 해주세요.`),
            );
          default:
            break;
        }
        break;
      case 500:
        switch (errorMessage) {
          case "Unexpected server error occurred":
            return Promise.reject(
              new Error("예상하지 못한 에러가 발생했습니다."),
            );
          default:
            break;
        }
        break;
      default:
        break;
    }
  },
);

authAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    const errorMessage = error.response.data;
    const errorStatus = error.response.status;

    let response;

    switch (errorStatus) {
      case 303:
        console.log(errorMessage.message);
        switch (errorMessage.message) {
          case "No linked account found. Please link your account.":
            return error.response;
          default:
            break;
        }
        break;
      case 400:
        switch (errorMessage) {
          case "Invalid input data":
            return Promise.reject(
              new Error("입력한 정보가 올바르지 않습니다."),
            );
          case "information cannot be null or empty":
            return Promise.reject(new Error("회원가입 양식을 작성해주세요."));
          case "Already linked to another user":
            return Promise.reject(
              new Error("로그인 되어있는 계정이 있습니다."),
            );
          case "Same as current password":
            return Promise.reject(
              new Error(
                "현재 사용 중인 비밀번호와 동일합니다./다른 비밀번호를 입력해주세요.",
              ),
            );
          default:
            break;
        }
        break;

      case 401:
        switch (errorMessage) {
          case "Invalid userId or password":
          case "User not found or Incorrect password":
            return Promise.reject(
              new Error("입력한 정보가 올바르지 않습니다."),
            );
          case "Unknown Error":
          case "An unexpected error occurred":
            return Promise.reject(new Error("알 수 없는 오류가 발생했습니다."));
          case "Login attempts exceeded":
            return Promise.reject(new Error("로그인 횟수를 초과했습니다."));
          case "Refresh token is required":
            return Promise.reject(new Error("로그아웃을 할 수 없습니다."));
          case "Invalid refresh token":
            return Promise.reject(new Error("로그인을 해주세요."));
          case "Account is inactive":
            return Promise.reject(new Error("휴면 상태의 회원입니다."));
          default:
            break;
        }
        break;

      case 403:
        switch (errorMessage) {
          case "User has not agreed to the terms":
            return Promise.reject(new Error("약관동의를 진행해주세요."));
          case "Account has been withdrawn":
            return Promise.reject(new Error("탈퇴한 회원입니다."));
          case "Verification failed phonenumber":
            return Promise.reject(new Error("새로운 인증번호를 받아주세요."));
          default:
            break;
        }
        break;

      case 409:
        switch (errorMessage) {
          case "Username already taken":
            return Promise.reject(new Error("아이디가 중복되었습니다."));
          case "Email already registered":
            return Promise.reject(new Error("이메일이 중복되었습니다."));
          case "Phone number already registered":
            return Promise.reject(new Error("중복된 핸드폰번호입니다."));
          default:
            break;
        }
        break;

      case 500:
        return Promise.reject(new Error("알 수 없는 에러가 발생했습니다."));
      default:
        break;
    }
  },
);
