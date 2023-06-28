import axios from "axios";

export const baseAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

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

authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    const errorMessage = error.response.data.message;
    const errorStatus = error.response.status;
    switch (errorStatus) {
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
          default:
            break;
        }
        break;
      default:
        break;
    }
  },
);
