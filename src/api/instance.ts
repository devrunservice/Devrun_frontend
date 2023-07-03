import axios from "axios";
// import { getCookie } from "./cookies";

export const baseAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const authAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-type": "application/json",
    withcredentials: true,
  },
});

export const accAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});

// authAxios.interceptors.request.use(
//   (request) => {
//     const accessToken = getCookie("accessToken");
//     if (accessToken) {
//       request.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   },
// );

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
          case "User not found":
            return Promise.reject(new Error("해당 유저가 존재하지 않습니다."));
          case "Incorrect password":
            return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
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
