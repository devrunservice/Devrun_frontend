import React from 'react';
import { useNavigate } from "react-router-dom";
import * as St from "./style"

const Notice = () => {
  const navigate = useNavigate()
  const writeBtn = () => navigate("/noticeWrite");
  const listBtn = () => navigate("/noticeDetail");
  return (
    <>
      <St.Title>공지사항</St.Title>
      <St.Table>
        <St.TableLi onClick={() => listBtn()}>
          <St.Num>1</St.Num>
          <St.Text>23123</St.Text>
          <St.Writer>12312</St.Writer>
          <St.Date>123</St.Date>
          <St.View>123</St.View>
        </St.TableLi>
      </St.Table>
      <St.ButtonWrap>
        <St.Button onClick={() => writeBtn()}>글쓰기</St.Button>
      </St.ButtonWrap>
    </>
  );
}

export default Notice;
