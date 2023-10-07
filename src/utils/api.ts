/* eslint-disable @typescript-eslint/no-unused-vars */

import axios from 'axios';
import * as I from 'types';

import {baseAxios, authAxios, imageAxios} from './instance';

export const signup = {
  // 회원가입
  createUser: async (code: string, params: I.SignupFormType) => {
    const response = await baseAxios.post(`/signup/okay`, params);
    return response;
  },
  // 아이디 중복확인
  getDuplicatedId: async (params: I.SignupFormType) => {
    const response = await baseAxios.post(`/checkID`, params);
    return response;
  },
  // 이메일 중복확인
  getDuplicatedEmail: async (params: I.SignupFormType) => {
    const response = await baseAxios.post(`/checkEmail`, params);
    return response;
  },
  // 휴대폰 중복확인
  getDuplicatedPhonnumber: async (params: I.SignupFormType) => {
    const response = await baseAxios.post('/checkPhone', params);
    return response;
  },
  sendVerificationEmail: async (params: I.SignupFormType | string) => {
    // const response = await baseAxios.post(
    //   `/signup/resend/confirm-email?email=${params.email}&id=${params.id}`
    // );
    console.log(params);
    const response = await baseAxios.post(
      `/signup/resend/confirm-email?data=${params}`
    );
    console.log(response);
    return response;
  },
  checkVerificationEmail: async (id: string, key: string) => {
    const response = await baseAxios.post(
      `/verify/signupEmail?id=${id}&key=${key}`
    );
    console.log(response);
    return response;
  },
};

export const verificationAPI = {
  // 휴대폰 인증번호 받기
  getAuthenticationNumberbyPhonenumber: async (params: I.SignupFormType) => {
    const response = await baseAxios.post(`/auth/phone/`, params);
    return response;
  },
  // 휴대폰 인증번호 확인
  checkAuthenticationNumberByPhonenumber: async (params: I.SignupFormType) => {
    const response = await baseAxios.post(`/verify/phone`, params);
    return response;
  },
  // 이메일 인증번호 받기
  getAuthenticationNumberByEmail: async (params: I.SignupFormType) => {
    const response = await baseAxios.post('/auth/email', params);
    console.log(response);
    console.log(params);
    return response;
  },
  // 이메일 인증번호 확인
  checkAuthenticationNumberByEmail: async (params: I.SignupFormType) => {
    const response = await baseAxios.post('/verify/email', params);
    console.log(response);
    return response;
  },
};

export const login = {
  checkLoginUser: async (params: I.LoginFormType) => {
    const response = await baseAxios.post('/login', params);
    return response;
  },
  checkLogout: async () => {
    // const config = {
    //   headers: {
    //     Refresh_token: `Bearer ${params}`,
    //   },
    // };
    // const response = await baseAxios.post('/logout', null, config);
    const response = await baseAxios.post('/authz/logout');
    console.log(response);
    return response;
  },
  refreshAccessToken: async (params: string) => {
    const config = {
      headers: {
        Refresh_token: `${params}`,
      },
    };
    const response = await authAxios.post('/authz/token/refresh', null, config);
    return response.data.Access_token;
  },
  checkKakaoLogin: async (params: string) => {
    const response = await baseAxios.get(`/auth/kakao/callback?code=${params}`);
    return response;
  },
  checkRecaptcha: async (params: string) => {
    const response = await baseAxios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRET_KEY}&response=${params}`
    );
    return Response;
  },
};

export const findAccount = {
  // 휴대폰 번호로 아이디 찾기
  findIdByPhonenumber: async (params: I.SignupFormType) => {
    console.log(params);
    const response = await baseAxios.post('/find-id/send-phone', params);
    return response;
  },
  findIdByEmail: async (params: I.SignupFormType) => {
    const response = await baseAxios.post('/find-id/send-email', params);
    return response;
  },
  findPasswordByEmail: async (params: I.SignupFormType) => {
    const response = await baseAxios.post('/find/password/email', params);
    return response;
  },
  findPasswordByPhonenumber: async (id: string, params: I.SignupFormType) => {
    const response = await baseAxios.post(`/users/${id}/edit-password`, params);
    return response;
  },
  checkIdPhonenumberMatched: async (id: string, params: I.SignupFormType) => {
    const response = await baseAxios.post(`/users/${id}/verify/phone`, params);
    console.log(response);
    return response;
  },
  checkIdEmailMatched: async (id: string, params: I.SignupFormType) => {
    const response = await baseAxios.post(`/users/${id}/verify/email`, params);
    console.log(response);
    return response;
  },
};

// 로그인한 유저정보
export const userData = {
  userInfo: () => {
    const response = authAxios.get('/users/login-info');
    return response;
  },
};

// 마이페이지 정보
export const mypage = {
  profile: async (params: I.MypageType) => {
    const response = await authAxios.get(`/mypage/${params.id}`);
    return response;
  },
  updateEmail: async (params: I.MypageType) => {
    const response = await authAxios.post(`/edit/email`, params);
    return response;
  },
  updatePhonenumber: async (params: I.MypageType) => {
    const response = await authAxios.post(`/edit/phone`, params);
    return response;
  },
  updateProfileImage: async (params: FormData) => {
    console.log(params);
    const response = await imageAxios.post(`/edit/profileimg`, params);
    return response;
  },
  pay: (params: I.PageNo) => {
    const response = authAxios.get(
      `/PaymentInfo?page=${params.pageno}&size=10`
    );
    return response;
  },
  point: (params: I.PageNo) => {
    const response = authAxios.get(
      `/PointHistory?page=${params}&size=10`
    );
    return response;
  },
  coupon: (params: I.CouponGet) => {
    const response = authAxios.post('/coupon/registrate', params);
    return response;
  },
  couponGet: () => {
    const response = authAxios.get(`/coupon/readmycoupon`);
    return response;
  },
};

export const Cart = {
  callbak: (params: I.RequestPayResponse) => {
    const response = authAxios.post(`/verifyIamport/${params.imp_uid}`);
    return response;
  },
  save: (params: I.bastetCheck[]) => {
    const response = authAxios.post("/savePaymentInfo", params);
    return response;
  },
  coupon: (params: I.LectureInfoList[]) => {
    const response = authAxios.post(`/applyCoupon`, params);
    return response;
  },
  refund: (params: I.Refund) => {
    const response = authAxios.post("/payment", params);
    return response;
  },

  delete: (params: I.LectureInfoList[]) => {
    const response = authAxios.post("/cart/delete", params);
    return response;
  },
  list: () => {
    const response = authAxios.get(`/cart`);
    return response;
  },
};

export const create = {
  coupon: (params: I.CreateCoupon) => {
    const response = authAxios.post('/coupon/publish', params);
    return response;
  },
  couponGet: (params: I.PageNo) => {
    const response = authAxios.get(
      `/coupon/mento/couponmanaging/${params.pageno}`
    );
    return response;
  },
  couponActive: (params: I.ActiveCoupon) => {
    const response = authAxios.post(`/coupon/shrewder`, params);
    return response;
  },
};
const headers = {
  "Content-Type": "image/png",
};
export const notice = {
  getUrl: (params: I.NoticeUrl) => {
    const response = authAxios.post(`/${params.path}/presignurl`, {
      fileName: params.fileName,
      fileExt: params.fileExt,
    });
    return response;
  },

  postUrl: (params: I.NoticePostUrl) => {
    const response = axios.request({
      method: "put",
      url: params.url,
      data: params.file,
      maxRedirects: 5,
      validateStatus: null,
      headers: headers,
    });
    return response;
  },
  getImgUrl: (params: I.NoticePostUrl) => {
    const response = authAxios.get(`/${params.url}`);
    return response;
  },
  write: (params: I.NoticeWrite) => {
    const response = authAxios.post("/notice/write", params);
    return response;
  },
  list: (params: I.PageNo) => {
    const response = baseAxios.get(`/notices/${params}`);
    return response;
  },
  detail: (params: I.NoticeNum) => {
    const response = baseAxios.get(`/notices/detail/${params.noticeNo}`);
    return response;
  },
  retouch: (params: I.NoticeWrite) => {
    const response = authAxios.put(`/notice/edit/${params.noticeNo}`, {
      title: params.title,
      content: params.content,
    });
    return response;
  },
  deletNotice: (params: I.NoticeWrite) => {
    const response = authAxios.delete(`/notice/delete/${params.noticeNo}`);
    return response;
  },
  comment: (params: I.Comment) => {
    const response = authAxios.post("/comment/write", params);
    return response;
  },
  commentRetouch: (params: I.CommentRetouch) => {
    const response = authAxios.put(`/comment/edit/${params.commentNo}`, {
      content: params.content,
    });
    return response;
  },
  commentList: (params: I.NoticeNum) => {
    const response = baseAxios.get(`/comments/${params.noticeNo}`);
    return response;
  },
  commentDel: (params: I.CommentDel) => {
    const response = authAxios.delete(`/comment/delete/${params.commentNo}`, {
      data: params,
    });
    return response;
  },
};

/* eslint-disable @typescript-eslint/no-unused-vars */
