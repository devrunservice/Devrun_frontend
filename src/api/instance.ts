import { token } from "api";
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
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error),
);

accAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(error.config);
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      const refreshToken = getCookie("refreshToken");
      if (refreshToken) {
        try {
          const newAccessToken = await token.refreshAccessToken(refreshToken);
          setCookie("accessToken", newAccessToken);
          originalRequest.header.Authorization = `Bearer ${newAccessToken}`;
          return await axios(originalRequest);
        } catch (refreshToeknError: any) {
          const errorMessage = refreshToeknError.response.data;
          switch (errorMessage) {
            case "Invalid refresh token":
            case "User not found":
              return Promise.reject(new Error("로그인을 해주세요."));
            default:
              break;
          }
        }
      }
    } else if (error.response.status === 502) {
      return Promise.reject(new Error("서버에 문제가 발생했습니다."));
    }
  },
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
          case "User has not agreed to the terms":
            return Promise.reject(new Error("약관동의를 진행해주세요."));
          default:
            break;
        }
        break;

      case 401:
        switch (errorMessage) {
          case "Invalid userId or password":
          case "User not found":
          case "Incorrect password":
            return Promise.reject(
              new Error("입력한 정보가 올바르지 않습니다."),
            );
          // case "User not found":
          // case "Invalid userId or password":
          //   return Promise.reject(new Error("해당 유저가 존재하지 않습니다."));
          // case "Incorrect password":
          //   return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
          case "Account is inactive":
            return Promise.reject(new Error("휴면 상태의 회원입니다."));
          case "Account has been withdrawn":
            return Promise.reject(new Error("탈퇴한 회원입니다."));
          case "Login attempts exceeded":
            return Promise.reject(new Error("로그인 횟수를 초과했습니다."));
          case "Unknown Error":
            return Promise.reject(new Error("알 수 없는 에러가 발생했습니다."));
          case "Username already taken":
            return Promise.reject(new Error("아이디가 중복되었습니다."));
          case "Email already registered":
            return Promise.reject(new Error("이메일이 중복되었습니다."));
          case "Phone number already registered":
            return Promise.reject(new Error("핸드폰번호가 중복되었습니다."));
          case "An unexpected error occurred":
            return Promise.reject(new Error("알 수 없는 오류가 발생했습니다."));
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
