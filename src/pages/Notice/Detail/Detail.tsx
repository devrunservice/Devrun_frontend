/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Comment } from "components";
import * as S from "style/Common";
import * as St from "./style";
import { noticeDetailLoading } from "../../../redux/reducer/noticeReducer";





const Detail = () => {
  const navigate = useNavigate();
  const noticeNo = useParams();
  const dispatch = useDispatch()
  const { content, write } = useSelector(
    (state: RootState) => state.noticeReducer
  );
  useEffect(() => {
    dispatch(noticeDetailLoading(noticeNo));
  }, [write]);
    return (
      <S.Inner>
        <St.Title>공지사항</St.Title>
        {typeof content !== "undefined" && (
          <>
            <St.Top>
              <St.Left>{content.title}</St.Left>
              <St.Right>
                <St.Name>
                  작성자 : {content.id} <St.NameCheack />
                </St.Name>
                <St.Date>작성일 : {content.createdDate.slice(0, 10)}</St.Date>
                {content.modifiedDate !== null && (
                  <St.Date>
                    수정일 : {content.modifiedDate.slice(0, 10)}
                  </St.Date>
                )}
                <St.Date>조회수 : {content.viewCount}</St.Date>
              </St.Right>
            </St.Top>
            <St.Content
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content.content),
              }}
            />
            <St.BtnWrap>
              <S.Button
                $active={false}
                type="button"
                onClick={() => navigate(`/notice`)}
              >
                목록
              </S.Button>
              <S.Button
                $active
                type="button"
                onClick={() => navigate(`/notice/${noticeNo.noticeNo}/retouch`)}
              >
                수정하기
              </S.Button>
            </St.BtnWrap>
            <Comment id={content.id} />
          </>
        )}
      </S.Inner>
    );
};
export default Detail;
