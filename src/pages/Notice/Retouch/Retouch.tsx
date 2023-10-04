import React from "react";
import { Editor } from "components";
import * as S from "style/Common";

const Retouch = () => {
  return (
    <S.Inner>
      <S.TitleTop>공지사항</S.TitleTop>
      <Editor path="notice" title="공지수정" />
    </S.Inner>
  );
};
export default Retouch;
