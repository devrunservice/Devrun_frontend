import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "components";
import * as St from "./style";


const Notice = () => {
  const navigate = useNavigate();
  const notice = "/noticeDetail";

  return (
    <>
      <St.Title>공지사항</St.Title>
      <Table notice={notice} />

      <St.ButtonWrap>
        <St.Button type="button" onClick={() => navigate("/noticeWrite")}>
          글쓰기
        </St.Button>
      </St.ButtonWrap>
    </>
  );
};

export default Notice;
