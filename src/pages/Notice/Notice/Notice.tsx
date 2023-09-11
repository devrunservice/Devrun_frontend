/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState,useEffect,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, UserTop, NoticeTable } from "components";
import usePage from "hooks/usePage";
import { notice } from "utils/api";
import * as S from "style/Common";

const Notice = () => {
  const navigate = useNavigate();
  const { pageno, setPageno } = usePage();
  const [data, setData] = useState();
  const dataList = useCallback(async () => {
    const res = await notice.list();
    setData(res.data);
  }, [ data]);
  useEffect(() => {
    dataList();
  }, []);
  console.log(data);
  return (
    <S.Inner>
      <UserTop title="공지사항" sub="전체" />

      <NoticeTable title="공지사항" data="as" />

      <S.ButtonWrap>
        <S.Button
          $active
          type="button"
          onClick={() => navigate("/noticeWrite")}
        >
          글쓰기
        </S.Button>
      </S.ButtonWrap>
      {/* <Pagination pageno={pageno} setPageno={setPageno} data={data} /> */}
    </S.Inner>
  );
};

export default Notice;
