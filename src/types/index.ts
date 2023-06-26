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
export interface FormType {
  userId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  birthday: string;
  phonenumber: string;
  code: string;
}

// 회원가입 데이터 전송 시 타입
export interface CreateUser {
  userId?: string;
  password?: string;
  name?: string;
  email?: string;
  birthday?: string;
  phonenumber?: string;
  code?: string;
}
