import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Editor } from "components";
import * as S from "style/Common";
import {
  noticeDetailLoading,

} from "../../../redux/reducer/noticeReducer";

const Retouch = () => {
  const noticeNo = useParams();
  const dispatch = useDispatch();
  const { content } = useSelector((state: RootState) => state.noticeReducer);
  useEffect(() => {
    dispatch(noticeDetailLoading(noticeNo));
  }, []);

  return (
    <S.Inner>
      <S.TitleTop>공지사항</S.TitleTop>
      <Editor path="notice" tap="공지수정" con={content.content} tit={content.title}/>
    </S.Inner>
  );
};
export default Retouch;
