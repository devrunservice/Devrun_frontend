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
}

// 마이페이지 타입
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
export interface LearningWrapperType {
  dtolist: LearningType[];
  totalPages: number;
}
export interface LearningType {
  key?: number;
  id: number;
  title: string;
  mentoName: string;
  thumbnail: string;
  progressRate: number;
  rating: number;
  lastViewDate: string;
  expiryDate: string;
}
export interface NoteQuestionListType {
  key: number;
  page: string;
  category: string;
  lectureId?: number;
  lectureTitle?: string;
  lastStudyDate?: string;
  lectureThumbnail?: string;
  count?: number;
  questionId?: number;
  questionTitle?: string;
  questionDate?: string;
}
export interface NoteLectureWrapperType {
  dtolist: LectureType[];
  totalPages: number;
}
export interface LectureType {
  key: number;
  page: string;
  category: string;
  lectureId: number;
  lectureTitle: string;
  lastStudyDate?: string;
  lectureThumbnail?: string;
  count: number;
}
export interface NoteListWrapperType {
  dtolist: NoteListType[];
  totalPages: number;
}
export interface NotePropsType {
  id?: number;
  page?: number | string;
  status?: string;
  content?: string;
}
export interface NoteListType {
  key: number;
  noteId: number;
  noteTitle: string;
  videoId: string;
  chapter: string;
  subHeading: string;
  date: string;
  contentPreview: string;
}
export interface NoteDetailType {
  noteId: number;
  noteTitle: string;
  videoId: string;
  chapter: string;
  subHeading: string;
  date: string;
  content: string;
}
export interface QuestionListWrapperType {
  dtolist: QuestionListType[];
  questionCount: number;
  totalPages: number;
}
export interface QuestionListType {
  key: number;
  no: number;
  page: string;
  category: string;
  questionLectureTitle: string;
  questionId: number;
  questionTitle: string;
  questionContentPreview: string;
  questionDate: string;
  answer: number;
}
export interface QuestionDetailType {
  questionId: number;
  lectureId: number;
  videoId: string;
  date: string;
  questionTitle: string;
  content: string;
  answer: string;
  studentId: string;
}
// 질문 답변
export interface QuestionReplyType {
  content: string;
  questionId: number;
}
export interface NoteQuestionListType {
  key: number;
  page: string;
  category: string;
  lectureId?: number;
  lectureTitle?: string;
  lastStudyDate?: string;
  lectureThumbnail?: string;
  count?: number;
  questionId?: number;
  questionTitle?: string;
  questionDate?: string;
}

export interface CertificationWrapperType {
  dtolist: CertificationType[];
  totalPages: number;
}

export interface CertificationType {
  expiryDate: string;
  id: number;
  lastViewDate: string;
  mentoName: string;
  progressRate: number;
  rating: number;
  thumbnail: string;
  title: string;
}

export interface CertificationDetailType {
  birthday: string;
  end: string;
  lectureName: string;
  start: string;
  userName: string;
}

export interface CalenderHeaderType {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}
export interface CalenderDateType {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (date: Date) => void;
}

export interface Userinfo {
  loading: boolean;
  data: {
    id: string;
    role: string;
    userNo: number;
  };
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
  sectionTitle?: string;
}
export interface videoFileType {
  fileBits: BlobPart[];
  fileName: string;
  options?: FilePropertyBag;
  name: string;
}

export interface TableCommon {
  $cursor?: boolean;
  $color?: boolean;
  $view?: boolean;
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
  couponcode: string;
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
  expirydate: string;
  quantity: number;
  lectureId: string;
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
  order: number;
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
  file: File;
  fileExt: string;
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

export interface GetQuest {
  lectureId: number;
  page: number;
}
export interface SaveQuest {
  lectureId: number;
  questionContent: string;
  questionTitle: string;
  videoId: number;
}
export interface ReQuest {
  questionContent: string;
  questionId: number;
  questionTitle: string;
}

export interface lectureName {
  lectureName: string;
}

export interface LectureInfoList extends lectureName {
  lectureIntro: string;
  cartId: number;
  lecturePrice: number;
  lectureThumbnail: string;
  lectureId: number;
}

export interface CouponListInCart {
  discountrate: number;
  expirydate: string;
  lecturename: string;
  state: string;
  couponcode: string;
}

export interface Carts {
  data: {
    buyerInfo: {
      userEmail: string;
      userName: string;
      userPhonumber: string;
      userPoint: number;
      userNo: number;
    };
    couponListInCart: CouponListInCart[];
    lectureInfoList: LectureInfoList[];
  };
  couponPrice: {
    discountprice: number[];
    prices: number[];
  };
  deletes: string;
  addCart: string;
  loading?: boolean;
  error?: Error | null;
  saveCart: string;
  freeCart: string;
}

export interface BasketState {
  price: number;
  discount: number;
  couponName: string;
  discountrate: number;
  couponCode: string;
}
export interface bastetCheck {
  name: string;
  paid_amount: number;
  pay_method: string;
  merchant_uid: string;
  pg_provider: string;
  receipt_url: string;
  imp_uid: string | null;
}

// 마이페이지 검색

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

export interface VideoCurriculumVideoInfos {
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
  wholeStudyTime: number;
  sectionInfo: {
    sectionId: number;
    sectionNumber: number;
    sectionTitle: string;
    videoInfo: VideoCurriculumVideoInfos[];
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
  order: string;
}

export interface Search extends MainList {
  page: number;
  bigcategory: string;

  q: string;
}

export interface NotePropsType {
  id?: number;
  page?: number | string;
  status?: string;
}

export interface LectureSections {
  sectionNumber: number;
  sectionTitle: string;
  sectionid: number;
  videos: {
    fileName: null | string;
    totalPlayTime: number;
    uploadDate: null | string;
    videoId: string;
    videoLink: string;
    videoNo: number;
    videoTitle: string;
  }[];
}
export interface lectureId {
  lectureId:number
}

export interface Lectureid {
  lectureid: number;
  pageNumber: number;
}
export interface Reviewrating {
  lectureId: number;
  reviewContent: string;
  reviewRating: number;
}
/* 디테일 */
export interface DetailAPI {
  lecture: {
    buyCount: number;
    lectureFullIntro: string;
    lectureId: number;
    lectureIntro: string;
    lectureName: string;
    lecturePrice: number;
    lectureRating: number;
    mentoId: string;
    mentoNo: number;
    progress: number;
    purchaseStatus: boolean;
  };
  lectureCategory: {
    categoryNo: number;
    lectureBigCategory: string;
    lectureMidCategory: string;
  };
  lectureSections: {
    sectionNumber: number;
    sectionTitle: string;
    sectionid: number;
    videos: {
      totalPlayTime: number;
      videoId: string;
      videoNo: number;
      videoTitle: string;
    }[];
  }[];
}


export interface INote {
  noteTitle: string;
  noteContent: string;
}
export interface IReNote {
  chapter: number;
  content: string;
  date: string;
  noteId: number;
  noteTitle: string;
  subHeading: string;
  videoId: string;
}
