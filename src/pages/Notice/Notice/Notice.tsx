import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, Pagination } from "components";
import usePage from "hooks/usePage";
import * as S from "style/Common";
import * as St from "./style";

const Notice = () => {
  const navigate = useNavigate();
  const { activePage, setActivePage, limit } = usePage();
  return (
    <S.Inner>
      <St.Title>공지사항</St.Title>
      <Table
        link="공지사항"
        name="사람이름"
        date="2023.07.21"
        title="1"
        view={1}
        num={1}
      />

      <St.ButtonWrap>
        <S.Button $active type="button" onClick={() => navigate("/noticeWrite")}>
          글쓰기
        </S.Button>
      </St.ButtonWrap>
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        limit={limit}
      />
    </S.Inner>
  );
};

export default Notice;