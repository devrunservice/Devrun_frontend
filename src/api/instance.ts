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

    switch (errorStatus) {
      case 401:
        switch (errorMessage) {
          case "Token is expired":
            response = await authAxios.post("/token/refresh", null, {
              headers: { Refresh_token: refreshToken },
            });
            newAccessToken = response.data.Access_token.substr(7);
            setCookie("accessToken", newAccessToken);
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

  // const originalRequest = error.config;
  // // 토큰이 만료될 때
  // if (error.response.status === 401 && !originalRequest.retry) {
  //   originalRequest.retry = true;
  //   const refreshToken = getCookie("refreshToken");
  //   if (refreshToken) {
  //     try {
  //       const newAccessToken = await login.refreshAccessToken(refreshToken);
  //       setCookie("accessToken", newAccessToken);
  //       originalRequest.header.Access_token = `Bearer ${newAccessToken}`;
  //       return await axios(originalRequest);
  //     } catch (refreshToeknError: any) {
  //       const errorMessage = refreshToeknError.response.data;
  //       switch (errorMessage) {
  //         case "Malformed token":
  //           return Promise.reject(
  //             new Error("refresh token 값이 잘못되었습니다."),
  //           );
  //         default:
  //           break;
  //       }
  //     }
  //   }
  // } else if (error.response.status === 500) {
  //   return Promise.reject(new Error("서버에 문제가 발생했습니다."));
  // }
  // },
);

authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    const errorMessage = error.response.data;
    const errorStatus = error.response.status;

    switch (errorStatus) {
      case 400:
        switch (errorMessage) {
          case "Invalid input data":
            return Promise.reject(new Error("회원가입 폼을 작성해주세요."));
          case "Already linked to another user":
            return Promise.reject(
              new Error("로그인 되어있는 계정이 있습니다."),
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
          default:
            break;
        }
        break;

      case 403:
        switch (errorMessage) {
          case "User has not agreed to the terms":
            return Promise.reject(new Error("약관동의를 진행해주세요."));
          case "Account is inactive":
            return Promise.reject(new Error("휴면 상태의 회원입니다."));
          case "Account has been withdrawn":
            return Promise.reject(new Error("탈퇴한 회원입니다."));
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
            return Promise.reject(new Error("핸드폰번호가 중복되었습니다."));
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
