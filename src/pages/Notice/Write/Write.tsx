import React from 'react';
import { Editor } from "components";
import * as S from "style/Common";

const Write = () => {

  return (
    <S.Inner>
      <S.TitleTop>공지사항</S.TitleTop>
      <Editor path="notice" />
    </S.Inner>
  );
}
export default Write
