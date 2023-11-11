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
  loginTime?: Date | number;
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

export interface LearningType {
  title?: string;
  mentoName?: string;
  thumbnail?: string;
  progressRate?: number;
  rating?: number;
  lectureUrl?: string;
}

export interface UserInfoList {
  id: string;
  role: string;
  userNo: number;
}

export interface Userinfo {
  loading: boolean;
  data: UserInfoList;
  error: string | null | undefined;
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
  categoryNo: number;
}
export interface SectionType {
  lectureSectionId: number;
  sectionTitle: string;
}
export interface VideoType {
  lectureSectionId: number;
  videoNo: number;
  file: Blob | string;
  // file: videoFileType | null | undefined
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


// 유저 쿠폰발급

export interface CouponGet {
  code: string;
  id: string;
}
export interface UserCouponList {
  couponcode: string;
  discountrate: number;
  expirydate: string;
  issueddate: string;
  issuedno: number;
  lecturename: string;
  state: string;
}
export interface UserCoupon {
  content: UserCouponList[];
}
// 환불
export interface Refund {
  merchant_uid: string;
  amount: number;
  name: string;
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
  index: number;
}


export interface Active {
  $active: boolean;
}

export interface IPriceButton {
  active: boolean;
}


// 공지사항

export interface NoticeList {
  content: string;
  createdDate: string;
  id: string;
  modifiedDate: string;
  noticeNo: number;
  status: string;
  title: string;
  userNo: number;
  viewCount: number;
  order:number
}
export interface Notice {
  content: NoticeList[];
  totalElements: number;
  totalPages: number;
}
export interface CommentsList {
  commentNo: number;
  content: string;
  createdDate: string;
  id: string;
  modifiedDate: string;
  noticeNo: number;
  parentCommentNo: number;
  profileimgsrc: string;
  userNo: number;
}
export interface Comments {
  data: CommentsList[];
}

export interface Notices {
  data: Notice;
  loading?: boolean;
  error?: Error | null;
  content: NoticeList;
  write: string;
  datas: Comments;
  del: '';
  comments: CommentsList;
  commentRe: CommentsList;
}
export interface NoticesTabel {
  data: Notice;
}
export interface NoticeNum {
  noticeNo: number;
}

export interface NoticeUrl {
  path: string;
  fileName: string;
  fileExt: string;
}
export interface NoticePostUrl {
  url: string;
  file?: File;
}

export interface NoticeWrite {
  noticeNo: string | number | undefined;
  title: string;
  content: string;
  id: string;
}

// 댓글
export interface Comment {
  content: string;
  noticeNo: string;
}
export interface CommentRetouch {
  content: string;
  commentNo: number;
}
export interface CommentDel {
  id: string;
  commentNo: number;
}

export interface BuyerInfo {
  userEmail: string;
  userName: string;
  userPhonumber: string;
  userPoint: number;
  userNo: number;
}
export interface CouponListInCart {
  discountrate: number;
  expirydate: string;
  lecturename: string;
  state: string;
  couponcode: string;
}
export interface LectureInfoList {
  lecture_intro: string;
  lecture_name: string;
  lecture_price: number;
  lecture_thumbnail: string;
}

export interface Cart {
  buyerInfo: BuyerInfo;
  couponListInCart: CouponListInCart[];
  lectureInfoList: LectureInfoList[];
}
export interface Carts {
  data: Cart;
  couponPrice: {
    discountprice: number[];
    prices: number[];
  };
  deletes: string;
  loading?: boolean;
  error?: Error | null;
}

export interface basketProduct {
  name: string;
  item: LectureInfoList;
  dis: number;
  checked: boolean;
  singleCheck: (
    lecture_name: string,
    lecture_intro: string,
    lecture_price: number,
    lecture_thumbnail: string
  ) => void;
}
export interface BasketState {
  price: number;
  discount: number;
  couponName: string;
  discountrate: number;
  couponCode: string;
}
export interface bastetCheck {
  lecture_intro: string;
  name: string;
  paid_amount: number;
  lecture_thumbnail: string;
  buyer_email: string;
  buyer_name: string;
  buyer_tel: string;
  pay_method: string;
  merchant_uid: string;
  pg_provider: string;
  receipt_url: string;
  imp_uid: string | null;
}
export interface Curriculum {
  lectureId: number;
}

export interface Videos extends Curriculum {
  videoId: number;
}
export interface Progress {
  videoid: string;
  currenttime: number;
}

export interface VideoCurriculumVideoInfos{
lastviewdate: string;
  progress: number;
  timecheck: number;
  videoId: string;
  videoTitle: string;
  videoTotalPlayTime: number;
}
export interface VideoCurriculumVideoInfo {
  sectionId: number;
  sectionNumber: number;
  sectionTitle: string;
  videoInfo: VideoCurriculumVideoInfos[];
}

export interface VideoCurriculum {
  lectureExpiryDate: string;
  lectureId: number;
  lectureName: string;
  lectureRating: number;
  lectureWholeProgess: number;
  wholeRemainingTime: number;
  wholeStudyTime:number;
  sectionInfo: {
    sectionId: number;
    sectionNumber: number;
    sectionTitle: string;
    videoInfo: {
      lastviewdate: string;
      progress: number;
      timecheck: number;
      videoId: string;
      videoTitle: string;
      videoTotalPlayTime: number;
    }[];
  }[];
}
export interface Note {
  noteContent: string;
  noteTitle: string;
  videoId: string;
}
export interface ReNote {
  noteContent: string;
  noteNo: number;
  noteTitle: string;
}
// 마이페이지 검색

export interface MainList {
  bigcategory: string;
}

export interface Search extends MainList {
  page: number;
  order: string;
  q: string;
}









