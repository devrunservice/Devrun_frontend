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

export interface IsValidMessageType {
  idMessage: string;
  passwordMessage: string;
  passwordConfirmMessage: string;
  emailMessage: string;
  phonenumberMessage: string;
  codeMessage: string;
  idDuplicationMessage: string;
  emailDuplicationMessage: string;
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
  categoryType?: string;
  lectureCategory?: string;
  lectureTag?: Array<string>;
  lectureExplane?: string;
  // lectureIntroduce?: string;
  section?: Array<SectionType>
}
export interface SectionType {
  num:number,
  // num:MutableRefObject<number>,
  title: string;
  subTitle: Array<SubTitleType>
}
export interface SubTitleType {
  subNum:number;
  // subNum:React.MutableRefObject<number>;
  className: string;
  url: string;
}
export interface RefType {}


export interface Receipt {
  buyer_email?: string;
  buyer_name?: string;
  buyer_tel?: string;
  imp_uid?: string;
  merchant_uid?: string;
  name?: string;
  paid_amount?: number;
  paymentDate?: string;
  receipt_url?: string;
  pay_no?: number | string;
  status?: string;
}

export interface Table {
  notice?: string;
  $cursor?: boolean;
  $color?: boolean;
  name?: string;
  date?: string;
  title?: string;
  view?: string;
  num?: string;
}

export interface ReceiptTable {
  data?: Receipt[]
  offset:number;
  limit:number;
}
export interface UserTop {
  title: string;
  sub?:string;
  count?: Receipt[] | string;
}
// 페이지네이션
export interface Pagination {
  activePage: number;
  setActivePage: (page: number) => void;
  limit: number;
  data?: Receipt[];
}

export interface Coupon {
  couponCode: string;
  amount: number;
}

export interface Basket {
  price: number;
  discount: number;
  discounts: number;
}



// 댓글
export interface Comment {
  comment: string;
  comments: string;
}

export interface IPriceButton {
  active: boolean;
}
// 마이페이지 검색
export interface MySearch {
  search: string;
}


// 결제창
export interface RequestPayAdd {
  digital?: boolean;
  vbank_due?: string;
  m_redirect_url?: string;
  app_scheme?: string;
  biz_num?: string;
}
export interface Display {
  card_quota?: number[];
}
export interface RequestPayParams extends RequestPayAdd {
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


export interface CallbackData {
  id: number;
  name: string;
  paid_amount: number ;
  buyer_email?: string;
  buyer_name?: string;
  buyer_tel?: string;
  pay_method?: string;
  merchant_uid?: string;
  pg_provider?: string;
  receipt_url?: string;
  imp_uid?: string | null;
}



export type RequestPayResponseCallback = (response: RequestPayResponse) => void;
export interface Iamport {
  init: (accountID: string) => void;
  request_pay: (
    params: RequestPayParams,
    callback?: RequestPayResponseCallback,
  ) => void;
}

declare global {
  interface Window {
    IMP?: Iamport;
  }
}


export interface Refund {
  merchant_uid: string | undefined;
  amount: number | undefined;
  reason?: string | undefined;
  refund_holder?: string;
  refund_bank?: string;
  refund_account?: string;
}

export interface Selet {
  seletsBoolean: boolean;
  seletes:string
}
export interface Active {
  $active: boolean;
}

export interface bastetUser {
  user: {
    name: string;
    email: string;
    phonenumber: string;
  };
}

export interface basketProduct {
  item: {
    id: number;
    name: string;
    paid_amount: number;
  };
  isChecked: boolean;
  singleCheack: (
    checked: boolean,
    id: number,
    name: string,
    paid_amount: number,
  ) => void;
}

export interface CouponGet {
  code: string;
  id: string;
}