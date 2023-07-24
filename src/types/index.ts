import React, { MutableRefObject } from "react";

// 회원가입 타입
export interface SignupFormType {
  id?: string | undefined;
  password?: string;
  passwordConfirm?: string;
  name?: string;
  email?: string;
  birthday?: string;
  phonenumber?: string;
  code?: string;
  allChecked?: boolean;
  acChecked?: boolean;
  tosChecked?: boolean;
  pcChecked?: boolean;
  mcChecked?: boolean;
}

// 회원가입 데이터 전송 시 타입
export interface CreateUser {
  id?: string;
  password?: string;
  name?: string;
  email?: string;
  birthday?: string;
  phonenumber?: string;
  code?: string;
  ageConsent?: boolean;
  termsOfService?: boolean;
  privacyConsent?: boolean;
  marketConsent?: boolean;
}

export interface FindAccountType {
  name?: string;
  phonenumber?: string;
  email?: string;
  code: string;
}

export interface IsValidType {
  id: boolean;
  password: boolean;
  passwordConfirm: boolean;
  email: boolean;
  name: boolean;
  // birthday: boolean;
  phonenumber: boolean;
  code: boolean;
  codeBtn: boolean;
  checkCodeBtn: boolean;
  idDuplication: boolean;
  emailDuplication: boolean;
  allChecked: boolean;
  acChecked: boolean;
  tosChecked: boolean;
  pcChecked: boolean;
  mcChecked: boolean;
}

// 로그인 타입
export interface LoginFormType {
  id: string;
  password?: string;
}

// 마이페이지 타입
export interface PropsType {
  page?: string;
  getImage?: void;
}

export interface ITmiData {
  id: string;
  email: string;
  name: string;
  birthday: string;
  phonenumber: string;
  role: string;
}

export interface ITmi {
  loading: boolean;
  data: ITmiData;
  error: string | null | undefined;
}

export interface tmi {
  id: string;
}

export interface CheckValidationReducerType {
  message: {
    idMessage: string;
    passwordMessage: string;
    passwordConfirmMessage: string;
    emailMessage: string;
    phonenumberMessage: string;
    codeMessage: string;
    idDuplicationMessage: string;
    emailDuplicationMessage: string;
  };
  valid: {
    id: boolean;
    password: boolean;
    passwordConfirm: boolean;
    email: boolean;
    name: boolean;
    birthday: boolean;
    phonenumber: boolean;
    code: boolean;
    codeBtn: boolean;
    checkCodeBtn: boolean;
    idDuplication: boolean;
    emailDuplication: boolean;
  };
}
export interface TokenType {
  accessToken?: string;
  refreshToken?: string;
}

// export interface CreateLectureType {
//   lectureName: string;
//   lecturePrice: string;
//   imageUrl: string;
//   lectureCategory: string;
//   lectureTag: Array<string>;
//   lectureExplane: string;
//   lectureIntroduce: string
//   num: number;
//   title: string;
//   isReadOnly: boolean;
//   subTitle: Array<subTitleType  >
// }
// export interface subTitleType {
//   subNum:number;
//   className: string;
//   url: string;
//   isReadOnly: boolean;
// }
export interface CreateLectureType {
  lectureName?: string;
  lecturePrice?: number;
  imageUrl?: string;
  lectureCategory?: string;
  lectureTag?: Array<string>;
  lectureExplane?: string;
  lectureIntroduce?: string;
  section?: Array<SectionType>;
}
export interface SectionType {
  // num:number,
  num: MutableRefObject<number>;
  title: string;
  isReadOnly: boolean;
  subTitle: Array<SubTitleType>;
}
export interface SubTitleType {
  subNum: number;
  // subNum:React.MutableRefObject<number>;
  className: string;
  url: string;
  isReadOnly: boolean;
}
export interface RefType {}

export interface IRefund {
  merchant_uid: string;
  cancel_request_amount: number;
  reason?: string;
  refund_holder?: string;
  refund_bank?: string;
  refund_account?: string;
}
export interface ITable {
  notice?: string;
  basketBtn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: boolean;
  cursor?: boolean;
  payment?: boolean;
  popupBtn?: () => void;
  name?: string;
  date?: string;
  title?: string;
  view?: string;
  num?: string;
  pay?: string;
}
export interface ICert {
  popupBtn?: () => void;
}
export interface IUserTop {
  title: string;
  count?: string;
}


export interface ICoupon {
  couponCode: string;
  amount: number;
}

export interface IBasket {
  price: number;
  couponBoolean: boolean;
  coupon: string;
}

// 페이지네이션
export interface IPagination {
  activePage?: number;
  startPage?: number;
  lastPage?: number;
  count?: number;
}

export interface IPageColor {
  isActive: boolean;
}
// 헤더
export interface IButtonColor {
  active: boolean;
}

// 마이페이지 네비게이션
export interface IBtnNav {
  active: boolean;
}

// 프로필
export interface IProfileActiveBtn {
  active: boolean;
}
export interface IProfileBtn {
  email: boolean;
  password: boolean;
  number: boolean;
}
export interface Iprofile {
  password: string;
  passwordCheck: string;
  email: string;
  number: string;
}
// 내 학습관리 탭
export interface ILearnTap {
  active: boolean;
}


// 댓글
export interface IComment {
  comment: string;
}
export interface IPrice {
  active: boolean;
}
export interface IPriceButton {
  active: boolean;
}
// 마이페이지 검색
export interface IMySearch {
  search: string;
}
export interface ILearning {
  active: boolean;
}

// 결제창
export interface IRequestPayAdd {
  digital?: boolean;
  vbank_due?: string;
  m_redirect_url?: string;
  app_scheme?: string;
  biz_num?: string;
}
export interface Display {
  card_quota?: number[];
}
export interface IRequestPayParams extends IRequestPayAdd {
  pg?: string;
  pay_method: string;
  escrow?: boolean;
  merchant_uid: string;
  name?: string;
  amount: number;
  custom_data?: any;
  tax_free?: number;
  currency?: string;
  language?: string;
  buyer_name?: string;
  buyer_tel: string;
  buyer_email?: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  notice_url?: string | string[];
  display?: Display;
}

export interface IRequestPayResponse {
  apply_num?: string;
  vbank_num?: string;
  vbank_name?: string;
  vbank_holder?: string | null;
  vbank_date?: number;
}

export interface RequestPayResponse extends IRequestPayResponse {
  success?: boolean;
  error_code?: string | boolean;
  errorMsg?: string;
  imp_uid?: string | null;
  merchant_uid?: string;
  pay_method?: string;
  paid_amount?: number;
  status?: string;
  name?: string;
  pg_provider?: string;
  pg_tid?: string;
  buyer_name?: string;
  buyer_email?: string;
  buyer_tel?: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  custom_data?: any;
  paid_at?: number;
  receipt_url?: string;
}

export type RequestPayResponseCallback = (response: RequestPayResponse) => void;
export interface Iamport {
  init: (accountID: string) => void;
  request_pay: (
    params: IRequestPayParams,
    callback?: RequestPayResponseCallback,
  ) => void;
}

declare global {
  interface Window {
    IMP?: Iamport;
  }
}
