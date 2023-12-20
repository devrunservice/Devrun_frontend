/* eslint-disable @typescript-eslint/no-unused-vars */

import * as I from 'types';

import {baseAxios, authAxios, imageAxios, imageTypeAxios} from './instance';

export const signup = {
  // 회원가입
  createUser: async (params: I.SignupFormType) => {
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
    const response = await baseAxios.post(
      `/signup/resend/confirm-email?data=${params}`
    );
    return response;
  },
  checkVerificationEmail: async (id: string, key: string) => {
    const response = await baseAxios.post(
      `/verify/signupEmail?id=${id}&key=${key}`
    );
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
    return response;
  },
  // 이메일 인증번호 확인
  checkAuthenticationNumberByEmail: async (params: I.SignupFormType) => {
    const response = await baseAxios.post('/verify/email', params);
    return response;
  },
};

export const login = {
  checkLoginUser: async (params: I.LoginFormType) => {
    const response = await baseAxios.post('/login', params);
    return response;
  },
  checkLogout: async () => {
    const response = await baseAxios.post('/authz/logout');
    return response;
  },
  refreshAccessToken: async () => {
    const response = await authAxios.post('/authz/token/refresh');
    return response;
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
    return response;
  },
  checkIdEmailMatched: async (id: string, params: I.SignupFormType) => {
    const response = await baseAxios.post(`/users/${id}/verify/email`, params);
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
    const response = await imageAxios.post(`/edit/profileimg`, params);
    return response;
  },
  deleteAccount: async () => {
    const response = await authAxios.delete(`/member/leave`);
    return response;
  },
  learning: async (params: I.NotePropsType) => {
    const response = await authAxios.get(
      `/mylecturelist?status=${params.status}&page=${params.page}`
    );
    return response;
  },
  getVideoId: async (params: number) => {
    const response = await authAxios.post(`/lastvideo`, params);
    return response;
  },
  noteLecture: async (params: I.NotePropsType) => {
    const response = await authAxios.get(
      `/lectureNoteOpen?page=${params.page}`
    );
    return response;
  },
  noteList: async (params: I.NotePropsType) => {
    const response = await authAxios.get(
      `/lectureNoteListOpen?lectureId=${params.id}&page=${params.page}`
    );
    return response;
  },
  noteDetail: async (params: I.NotePropsType) => {
    const response = await authAxios.get(
      `/lectureNoteDetailOpen?noteId=${params.id}`
    );
    return response;
  },
  noteDelete: async (params: number) => {
    const response = await authAxios.delete(
      `lecturenoteDelete?noteNo=${params}`
    );
    return response;
  },
  questionList: async (params: I.NotePropsType) => {
    const response = await authAxios.get(
      `/mylectureQalistOpen?status=${params.status}&page=${params.page}`
    );
    return response;
  },
  questionDetail: async (params: I.NotePropsType) => {
    const response = await authAxios.get(
      `/lectureQaDetailOpen?questionId=${params.id}`
    );
    return response;
  },
  questionDelete: async (params: I.NotePropsType) => {
    const response = await authAxios.delete(
      `/lectureQa/delete?questionId=${params.id}`
    );
    return response;
  },
  answerForQuestion: async (params: I.NotePropsType) => {
    const response = await authAxios.get(
      `/lectureQaCommentDetailOpen?questionId=${params.id}`
    );
    return response;
  },
  replyForAnswer: async (params: I.QuestionReplyType) => {
    const response = await authAxios.post(`/lectureQaComment`, params);
    return response;
  },
  deleteAnswer: async (params: I.NotePropsType) => {
    const response = await authAxios.delete(
      `/lectureQa/comment/delete/${params.id}`
    );
    return response;
  },
  editAnswer: async (params: I.NotePropsType) => {
    const response = await authAxios.post(
      `/lectureQa/comment/edit/${params.id}`,
      {content: params.content}
    );
    console.log(response);
    return response;
  },
  certificationList: async (params: {page: number}) => {
    const response = await authAxios.get(`/certificates?page=${params.page}`);
    return response;
  },
  certificationDetail: async (params: {lectureId: number}) => {
    const response = await authAxios.get(
      `/certificates/print?lectureId=${params.lectureId}`
    );
    return response;
  },
  coupon: (params: I.CouponGet) => {
    const response = authAxios.post('/coupon/registration', params);
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
    const response = authAxios.post('/savePaymentInfo', params);
    return response;
  },
  coupon: (params: I.LectureInfoList[]) => {
    const response = authAxios.post(`/applyCoupon`, params);
    return response;
  },
  refund: (params: I.Refund) => {
    const response = authAxios.post('/payment', params);
    return response;
  },

  delete: (params: I.LectureInfoList) => {
    const response = authAxios.post('/cart/delete', params);
    return response;
  },
  list: () => {
    const response = authAxios.get(`/cart`);
    return response;
  },
  add: (params: I.Curriculum) => {
    const response = authAxios.post(`/cart/insert`, params);
    return response;
  },
  free: (params: I.lectureName) => {
    const response = authAxios.post(`/Free`, params);
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

export const notice = {
  getUrl: (params: I.NoticeUrl) => {
    const response = authAxios.post(`/${params.path}/presignurl`, {
      fileName: params.fileName,
      fileExt: params.fileExt,
    });
    return response;
  },

  postUrl: (params: I.NoticePostUrl) => {
    const response = imageTypeAxios.request({
      url: params.url,
      data: params.file,
      headers: {'Content-Type': `image/${params.fileExt}`},
    });
    return response;
  },
  write: (params: I.NoticeWrite) => {
    const response = authAxios.post('/notice/write', params);
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
    const response = authAxios.post('/comment/write', params);
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

export const video = {
  getCurriculum: (params: I.Curriculum) => {
    const response = authAxios.get(`/getMycoures`, {
      params: {lectureId: params.lectureId},
    });
    return response;
  },
  progress: (params: I.Progress) => {
    const response = authAxios.post(`/lecture/progress`, params);
    return response;
  },
  saveNote: (params: I.Note) => {
    const response = authAxios.post(`/lecturenote`, params);
    return response;
  },

  reNote: (params: I.ReNote) => {
    const response = authAxios.post('/lecturenoteUpdate', params);
    return response;
  },

  getQuest: (params: I.GetQuest) => {
    const response = authAxios.get(
      `/lectureQalistOpen?lectureId=${params.lectureId}&page=${params.page}`
    );
    return response;
  },

  saveQuest: (params: I.SaveQuest) => {
    const response = authAxios.post(`/lectureQa`, params);
    return response;
  },
  reQuest: (params: I.ReQuest) => {
    const response = authAxios.post(`/lectureQa/update`, params);
    return response;
  },
};
export const search = {
  search: (params: I.MainList) => {
    const response = baseAxios.get(
      `/q/lecture?bigcategory=&page=1&order=${params.order}`
    );
    return response;
  },
  categorySearch: (params: I.Search) => {
    const response = baseAxios.get(
      `/q/lecture?bigcategory=${params.bigcategory}&page=${params.page}&order=${
        params.order
      }&q=${String(params.q)}`
    );
    return response;
  },
  lectureDetail: (params: I.Lectureid) => {
    const response = baseAxios.get(`/api/lectures/${params.lectureid}`);
    return response;
  },
  lectureDetailtext: (params: I.Lectureid) => {
    const response = baseAxios.get(
      `/api/lectures/detailtest/${params.lectureid}`
    );
    return response;
  },
  lectureDetailComment: (params: I.Reviewrating) => {
    const response = authAxios.post(`/reviewrating`, params);
    return response;
  },
  lectureDetailGetComment: (params: I.Lectureid) => {
    const response = baseAxios.get(
      `/review/${params.lectureid}/${params.pageNumber}`
    );
    return response;
  },
};

/* 강의등록 api */
export const createVideo = {
  getCategoryAPI: () => {
    const response = authAxios.get('/lectureregist/categories');
    return response;
  },
  videoAPI: (params: FormData) => {
    const response = imageAxios.post('/lectureregitest', params);
    return response;
  },
};

/* 디테일 api */
export const detail = {
  getDetailAPT: (params: any) => {
    const response = authAxios.get(`/api/lectures/${params}`);
    return response;
  },
};

/* eslint-disable @typescript-eslint/no-unused-vars */
