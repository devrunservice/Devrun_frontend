export interface IPagination {
  activePage?: number;
  startPage?: number;
  lastPage?: number;
  count?: number;
}

export interface IReactSlice {
  data: string[];
  loading: boolean;
  error: null | string;
}

// 회원가입 타입
export type FormType = {
  userId: string;
  pwd: string;
  pwdConfirm: string;
  name: string;
  email: string;
  bday: string;
  phoneNumber: string;
  verifiedCode: string;
};

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

// export interface VerifiedCode {
//   phonenumber: string;
//   code?: string;
// }
