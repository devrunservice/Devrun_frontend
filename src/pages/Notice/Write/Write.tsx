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
      <St.ButtonWrap>
        <St.Button onClick={() => Navigate("/notice")} $active={false}>
          나가기
        </St.Button>
        <St.Button onClick={() => Navigate("/notice")} $active>
          글쓰기
        </St.Button>
      </St.ButtonWrap>
    </S.Inner>
  );
}
export default Write
