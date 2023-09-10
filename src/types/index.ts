

// 회원가입 타입
export interface SignupFormType {
  id?: string;
  password?: string;
  passwordConfirm?: string;
  name?: string;
  email?: string;
  birthday?: string;
  phonenumber?: string;
  code?: string;
  allChecked?: boolean;
  // acChecked?: boolean;
  // tosChecked?: boolean;
  // pcChecked?: boolean;
  // mcChecked?: boolean;
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
  profileImage: boolean;
  [key: string]: boolean; // 동적인 프로퍼티 접근 허용
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
  [key: string]: string; // 동적인 프로퍼티 접근 허용
}

export interface ValidFieldType {
  name: string;
  value: boolean;
}

// 로그인 타입
export interface LoginFormType {
  id: string;
  password?: string;
  recaptcha?: string;
}

// 마이페이지 타입
export interface PropsType {
  page?: string;
  getImage?: void;
}

export interface MypageType {
  id?: string;
  name?: string;
  email?: string;
  birthday?: string;
  phonenumber?: string;
  code?: string;
  profileImage?: File;
  profilePreview?: string;
}

export interface ProfileInputType {
  profileImageBtn: boolean;
  emailBtn: boolean;
  phonenumberBtn: boolean;
  [key: string]: boolean;
}

export interface ITmiData {
  id: string;
  email: string;
  name: string;
  birthday: string;
  phonenumber: string;
  role: string;
  userNo:number;
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

/* 강의 등록 타입 */
export interface CreateLectureType {
  lectureName: string;
  lecturePrice: number;
  lectureThumbnail: string;
  lectureThumbnailUrl?: string;
  lectureCategory: category;
  lectureTag: Array<string>;
  lectureIntro: string;
  lectureSectionList: SectionType[];
  videoList?: VideoType[];
}
export interface category {
  lectureBigCategory: string;
  lectureMidCategory: string;
}
export interface SectionType {
  lectureSectionId: number;
  sectionTitle: string;
}
export interface VideoType {
  lectureSectionId: number;
  videoNo: number;
  file: videoFileType | undefined;
  videoTitle: string;
}
export interface videoFileType {
  fileBits: BlobPart[];
  fileName: string;
  options?: FilePropertyBag;
  name: string;
}

export interface RefType {}




export interface TableCommon {
  $cursor?: boolean;
  $color?: boolean;
  $view?: boolean;
}

// 없앨꺼
export interface Coupon {
  couponCode: string;
  amount: number;
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

export interface basketProduct {
  item: {
    id: number;
    paid_amount: number;
  };
  checked: boolean;
  singleCheck: (id: number, paid_amount: number) => void;
}

export interface bastetCheck {
  id: number;
  name?: string;
  paid_amount: number;
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
    callback?: RequestPayResponseCallback
  ) => void;
}

declare global {
  interface Window {
    IMP?: Iamport;
  }
}

export interface Refund {
  merchant_uid: string;
  amount: number;
}





// 유저 쿠폰발급

export interface CouponGet {
  code: string;
  id: string;
}
export interface UserCouponList {
  couponcode?: string;
  discountrate: number;
  expirydate: string;
  issueddate?: string;
  issuedno?: number;
  lecturename: string;
  state: string;
}
export interface UserCoupon {
  content: UserCouponList[];
}
// 포인트내역

export interface PointList {
  updatetime: string;
  pointupdown: number;
  pointno: number;
  explanation: string;
}
export interface Point {
  content: PointList[];
  totalElements: number;
  totalPages: number;
}
export interface Points {
  data: Point;
  loading?: boolean;
  error?: Error | null;
}


// 구매내역 

export interface ReceiptList {
  buyername: string;
  merchantUid: string;
  name: string;
  paidamount: number;
  paymentDate: string;
  payno: number;
  receipturl: string;
  status: string;
  userpayno: number;
}
export interface Receipt {

  content: ReceiptList[];
  totalElements: number;
  totalPages: number;
}
export interface Receipts {
  data: Receipt;
}

// 멘토 쿠폰리스트
export interface MentoCouponlist {
  couponcode: string;
  discountrate: number;
  expirydate: string;
  issueddate: string;
  issuedno: number;
  quantity: number;
  state: string;
  lecturename: string;
}
interface MentoCoupon{
  content:MentoCouponlist[];
  totalElements: number;
  totalPages: number;
}

export interface MentoCoupons {
  data: MentoCoupon;
  loading?: boolean;
  error?: Error | null;
  activate?: null;
  
}

export interface PageNo {
  pageno: number;
}
export interface CreateCoupon {
  discountrate: number;
  issueduser: number;
  issueddate: string;
  expirydate: string;
  quantity: number;
  coupontype: string;
  target: string;
}

export interface ActiveCoupon {
  code: string;
  index:number
}


// 지울꺼
export interface Table{
  data: string;
  title: string 
}


// 페이지네이션
export interface Pagination {
  data?: MentoCoupon | Receipt;
  pageno: number;
  setPageno: (page: number) => void;
  title?: string;
}

// 댓글
export interface Comment {
  comment: string;
  comments: string;
}
export interface Active {
  $active: boolean;
}

export interface IPriceButton {
  active: boolean;
}
// 마이페이지 검색
export interface MySearch {
  search: string;
}

// 공지사항

export interface noticeUpload {
  path: string;
  formData: FormData;
}
export interface noticeWrite {
  noticeNo: number;
  title: string;
  content: string;
  id: string;
}
