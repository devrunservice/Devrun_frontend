import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, takeLatest, put } from "redux-saga/effects";
import {
  PageNo,
  NoticeNum,
  NoticeWrite,
  Comment,
  CommentRetouch,
  CommentDel,
} from "types";
import { notice } from "utils/api";
import {
  noticeListLoading,
  noticeListSuccuss,
  noticeListFail,
  noticeDetailLoading,
  noticeDetailSuccuss,
  noticeDetailFail,
  noticeWriteLoading,
  noticeWriteSuccess,
  noticeWriteFail,
  noticeRetouchLoading,
  noticeRetouchSuccess,
  noticeRetouchFail,
  noticeDelLoading,
  noticeDelSuccess,
  noticeDelFail,
  commentPostLoading,
  commentPostSuccess,
  commentPostFail,
  commentGetLoading,
  commentGetSuccess,
  commentGetFail,
  commentRetouchLoading,
  commentRetouchSuccess,
  commentRetouchFail,
  commentDelLoading,
  commentDelSuccess,
  commentDelFail,
} from "../reducer/noticeReducer";


function* noticeWrite(
  action: PayloadAction<NoticeWrite>
): Generator<any, void, any> {
  try {
    const response = yield call(notice.write, action.payload);
    yield put(noticeWriteSuccess(response));
  } catch (error) {
    yield put(noticeWriteFail(error));
  }
}

function* noticeList(action: PayloadAction<PageNo>): Generator<any, void, any> {
  try {
    const response = yield call(notice.list, action.payload);
    yield put(noticeListSuccuss(response));
  } catch (error) {
    yield put(noticeListFail(error));
  }
}

function* noticeDetail(
  action: PayloadAction<NoticeNum>
): Generator<any, void, any> {
  try {
    
    const response = yield call(notice.detail, action.payload);
    
    yield put(noticeDetailSuccuss(response));
  } catch (error) {
    yield put(noticeDetailFail(error));
  }
}

function* noticeRetouch(
  action: PayloadAction<NoticeWrite>
): Generator<any, void, any> {
  try {
    const response = yield call(notice.retouch, action.payload);
    yield put(noticeRetouchSuccess(response));
  } catch (error) {
    yield put(noticeRetouchFail(error));
  }
}
function* noticeDel(
  action: PayloadAction<NoticeWrite>
): Generator<any, void, any> {
  try {
    const response = yield call(notice.deletNotice, action.payload);
    
    yield put(noticeDelSuccess(response));
  } catch (error) {
    yield put(noticeDelFail(error));
  }
}


  function* commentPost(
    action: PayloadAction<Comment>
  ): Generator<any, void, any> {
    try {
      const response = yield call(notice.comment, action.payload);

      yield put(commentPostSuccess(response));
    } catch (error) {
      yield put(commentPostFail(error));
    }
  };

function* commentGet(
  action: PayloadAction<NoticeNum>
): Generator<any, void, any> {
  try {
    const response = yield call(notice.commentList, action.payload);
    yield put(commentGetSuccess(response));
  } catch (error) {
    yield put(commentGetFail(error));
  }
}

function* commentRetouch(
  action: PayloadAction<CommentRetouch>
): Generator<any, void, any> {
  try {
    const response = yield call(notice.commentRetouch, action.payload);
    yield put(commentRetouchSuccess(response));
  } catch (error) {
    yield put(commentRetouchFail(error));
  }
}

function* commentDel(
  action: PayloadAction<CommentDel>
): Generator<any, void, any> {
  try {
    const response = yield call(notice.commentDel, action.payload);
    yield put(commentDelSuccess(response));
  } catch (error) {
    yield put(commentDelFail(error));
  }
}

function* watchNoticeList() {
      yield takeLatest(noticeListLoading, noticeList);
    };
function* watchNoticeDetail() {
  yield takeLatest(noticeDetailLoading, noticeDetail);
}
function* watchNoticeWrite(){
    yield takeLatest(noticeWriteLoading, noticeWrite);
}
function* watchNoticeRetouch() {
  yield takeLatest(noticeRetouchLoading, noticeRetouch);
}
function* watchNoticeDel() {
  yield takeLatest(noticeDelLoading, noticeDel);
}
function* watchCommentPost() {
  yield takeLatest(commentPostLoading, commentPost);
}

function* watchCommentGet() {
  yield takeLatest(commentGetLoading, commentGet);
}
function* watchCommentRetouch() {
  yield takeLatest(commentRetouchLoading, commentRetouch);
}
function* watchCommentDel() {
  yield takeLatest(commentDelLoading, commentDel);
}
export default function* noticeSaga(){
    yield all([
      fork(watchNoticeList),
      fork(watchNoticeDetail),
      fork(watchNoticeWrite),
      fork(watchNoticeRetouch),
      fork(watchCommentPost),
      fork(watchCommentGet),
      fork(watchCommentRetouch),
      fork(watchCommentDel),
      fork(watchNoticeDel),
    ]);
}
