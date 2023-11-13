/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import {getCookie, removeCookie, setCookie} from './cookies';

export const baseAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
});

export const authAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
  headers: {'Content-type': 'application/json'},
});
export const imageTypeAxios = axios.create({
  withCredentials: true,
  headers: { "Content-Type": "image/*" },
});
export const imageAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {'Content-Type': 'multipart/form-data'},
  withCredentials: true,
});

baseAxios.interceptors.request.use(
  (config) => {
    const easyLoginToken = getCookie('easyLoginToken');
    if (easyLoginToken) {
      config.headers.Easylogin_token = `Bearer ${easyLoginToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

authAxios.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    config.headers.Access_token = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

imageAxios.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    config.headers.Access_token = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorMessage = error.response.data;
    const errorStatus = error.response.status;

    switch (errorStatus) {
      case 303:
        switch (errorMessage.message) {
          case 'No linked account found. Please link your account.':
            return error.response;
          default:
            break;
        }
        break;
      case 400:
        switch (errorMessage) {
          case "Invalid input data":
            return Promise.reject(
              new Error("입력한 정보가 올바르지 않습니다.")
            );
          case "information cannot be null or empty":
            return Promise.reject(new Error("회원가입 양식을 작성해주세요."));
          case "User has not agreed to the terms":
            return Promise.reject(new Error("약관동의를 진행해주세요."));
          case "Already linked to another user":
            return Promise.reject(
              new Error("로그인 되어있는 계정이 있습니다.")
            );
          case "Same as current password":
            return Promise.reject(
              new Error(
                "현재 사용 중인 비밀번호와 동일합니다./다른 비밀번호를 입력해주세요."
              )
            );
          case "Refresh token is required":
          case "Unauthorized request":
          case "Member not found":
            return Promise.reject(new Error("알 수 없는 오류가 발생했습니다."));
          case "KakaoLogin failed":
          case "Invalid request":
            return Promise.reject(
              new Error(
                "카카오 로그인 과정에서 오류가 발생했습니다./처음부터 다시 시도해주세요."
              )
            );
          case "Either Email or Phonenumber should be provided, not both or none.":
            return Promise.reject(new Error("모든 양식을 작성해주세요."));
          case "Invalid key":
            return Promise.reject(
              new Error(
                "알 수 없는 에러가 발생했습니다./devrun66@gmail.com로 문의 바랍니다."
              )
            );
          case "Verification expired":
            return Promise.reject(
              new Error(
                "이메일 인증 시간이 초과되었습니다/devrun66@gmail.com로 문의 바랍니다."
              )
            );
          case "Can't Find Data, Check Your Request. -By DevRun":
            return Promise.reject(new Error("정보를 찾을 수 없습니다."));
          case "could not extract ResultSet; SQL [n/a]; nested exception is org.hibernate.exception.SQLGrammarException: could not extract ResultSet":
            return Promise.reject(new Error("검색하신 강의가 없습니다."));
          case "Request failed with status code 400":
            return Promise.reject(new Error("알수없는 오류가 발생했습니다."));

          default:
            break;
        }
        break;

      case 401:
        switch (errorMessage) {
          case 'Invalid userId or password':
          case 'User not found or Incorrect password':
            return Promise.reject(
              new Error('아이디 혹은 비밀번호가 일치하지 않습니다.')
            );
          case 'Unknown Error':
          case 'An unexpected error occurred':
            return Promise.reject(new Error('알 수 없는 오류가 발생했습니다.'));
          case 'Refresh token is required':
            return Promise.reject(new Error('로그아웃을 할 수 없습니다.'));
          case 'Invalid refresh token':
            return Promise.reject(new Error('로그인을 해주세요.'));
          case 'Account is inactive':
            return Promise.reject(new Error('휴면 상태의 회원입니다.'));
          default:
            break;
        }
        switch (errorMessage.message) {
          case 'Token is expired':
            removeCookie('accessToken');
            removeCookie('refreshToken');
            return Promise.reject(
              new Error('접속이 만료되었습니다./로그인을 다시해주세요.')
            );
          default:
            break;
        }
        break;

      case 403:
        switch (errorMessage) {
          case 'Account has been withdrawn':
            return Promise.reject(new Error('탈퇴한 회원입니다.'));
          case 'Verification failed Phonenumber':
            return Promise.reject(new Error('새로운 인증번호를 받아주세요.'));
          case 'Access Denied':
            return Promise.reject(new Error('알 수 없는 오류가 발생했습니다.'));
          case 'Login attempts exceeded':
            return Promise.reject(new Error('로그인 횟수를 초과했습니다.'));
          case 'Verification failed':
            return Promise.reject(
              new Error(
                '잘못된 인증번호 입니다./인증번호 확인 후 다시 입력하여 주십시오.'
              )
            );
          case 'Verification failed Email':
            return Promise.reject(
              new Error(
                '알 수 없는 오류가 발생했습니다./인증번호를 다시 받아주세요.'
              )
            );
          case 'Failed to send email':
            return Promise.reject(
              new Error(
                '인증 메일 전송에 실패했습니다./인증번호를 다시 받아주세요.'
              )
            );
          default:
            break;
        }
        break;

      case 409:
        switch (errorMessage) {
          case 'Username already taken':
            return Promise.reject(new Error('아이디가 중복되었습니다.'));
          case 'Email already registered':
            return Promise.reject(new Error('이메일이 중복되었습니다.'));
          case 'Phone number already registered':
            return Promise.reject(new Error('중복된 핸드폰번호입니다.'));
          default:
            break;
        }
        break;

      case 500:
        switch (errorMessage) {
          case 'Failed to save point':
          case 'Failed to set point entity':
          case 'Failed to register to user':
          case 'Failed to register for database':
            return Promise.reject(
              new Error(
                '알 수 없는 오류가 발생했습니다./회원가입을 다시 시도해주세요.'
              )
            );
          case 'Failed to retrieve access token':
          case 'Failed to retrieve profile information':
            return Promise.reject(
              new Error(
                '카카오 로그인 과정에서 오류가 발생했습니다./처음부터 다시 시도해주세요.'
              )
            );
          default:
            break;
        }
        return Promise.reject(new Error('알 수 없는 오류가 발생했습니다.'));
      default:
        break;
    }
  }
);

authAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorMessage = error.response.data.message;
    const errorStatus = error.response.status;
    const originalRequest = error.config;
    let response;
    let newAccessToken;
    // let newRefreshToken;

    switch (errorStatus) {
      case 400:
        switch (errorMessage) {
          case "could not extract ResultSet; SQL [n/a]; nested exception is org.hibernate.exception.SQLGrammarException: could not extract ResultSet":
            return Promise.reject(new Error("검색하신 강의가 없습니다."));
          default:
            break;
        }
        break;
      case 401:
        switch (errorMessage) {
          case "Token is expired":
            // response = await baseAxios.post("/token/refresh", null, {
            //   headers: { Refresh_token: `Bearer ${refreshToken}` },
            // });

            response = await baseAxios.post("/authz/token/refresh");
            newAccessToken = response.data.Access_token.substr(7);
            setCookie("accessToken", newAccessToken, {
              path: "/",
              secure: true,
            });
            originalRequest.headers.Access_token = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
          default:
            break;
        }
        break;
      case 403:
        switch (errorMessage) {
          case "Signature validation failed":
          case "Invalid token signature algorithm":
            return Promise.reject(new Error(`오류가 감지되었습니다.`));
          case "Access Denied":
            return Promise.reject(new Error("알 수 없는 오류가 발생했습니다."));
          case "Logout user":
            return Promise.reject(new Error("이미 로그아웃 됐습니다."));
          case "Duplicate login detected":
            return Promise.reject(
              new Error("이미 로그인 된 다른 기기가 있습니다.")
            );
          default:
            break;
        }
        break;
      case 409:
        switch (errorMessage) {
          case "This email is duplicated":
            return Promise.reject(new Error("이메일이 중복되었습니다."));

          default:
            break;
        }
        break;
      case 500:
        switch (errorMessage) {
          case "Unexpected server error occurred":
            return Promise.reject(new Error("알 수 없는 오류가 발생했습니다."));
          default:
            break;
        }
        break;
      default:
        break;
    }
    switch (error.message) {
      case 'Network Error':
        return Promise.reject(new Error('알 수 없는 오류가 발생했습니다.'));
      default:
        break;
    }
  }
);

imageAxios.interceptors.response.use(
  (response) => response,
  (error) => error
);
