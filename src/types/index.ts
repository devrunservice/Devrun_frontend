import React, { MutableRefObject } from 'react'
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
export interface IButtonColor {
  active: boolean;
}
export interface IBtnNav {
  active: boolean;
}
export interface IComment {
  comment: string;
}

export interface IPriceButton {
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
  success: boolean;
  error_code: string;
  errorMsg: string;
  imp_uid: string | null;
  merchant_uid: string;
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
  birthday: boolean;
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

// export interface ITmi {
//   loading: boolean;
//   data: string[] | any;
//   error: string | null | undefined;
// }


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
  lecturePrice?: string;
  imageUrl?: string;
  lectureCategory?: string;
  lectureTag?: Array<string>;
  lectureExplane?: string;
  lectureIntroduce?: string;
  section?: Array<SectionType>
}
export interface SectionType {
  // num:number,
  num:MutableRefObject<number>,
  title: string;
  isReadOnly: boolean;
  subTitle: Array<SubTitleType>
}
export interface SubTitleType {
  subNum:number;
  // subNum:React.MutableRefObject<number>;
  className: string;
  url: string;
  isReadOnly: boolean;
}
export interface RefType {

}