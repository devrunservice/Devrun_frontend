import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Editor } from "components";
import * as S from "style/Common";
import * as St from "./style";

const Write = () => {
  const Navigate = useNavigate();

  return (
    <S.Inner>
      <St.Title>공지사항</St.Title>
      <Editor />
      <S.ButtonWrap>
        <S.Button onClick={() => Navigate("/notice")} $active={false}>
          나가기
        </S.Button>
        <St.Button onClick={() => Navigate("/notice")} $active>
          글쓰기
        </St.Button>
      </S.ButtonWrap>
    </S.Inner>
  );
}
export default Write
