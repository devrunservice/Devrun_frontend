/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux/store";
import { Pagination, UserTop, NoticeTable } from "components";
import usePage from "hooks/usePage";
import * as S from "style/Common";

import { noticeListLoading } from "../../../redux/reducer/noticeReducer";


const Notice = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {data} = useSelector((state:RootState)=>state.noticeReducer)
  const { write } = useSelector((state: RootState) => state.noticeReducer);
  const { pageno, setPageno } = usePage();
  useEffect(() => {
    dispatch(noticeListLoading(pageno));
  }, [pageno, write]);
  return (
    <S.Inner>
      <UserTop title="공지사항" sub="전체" />

      <NoticeTable data={data} />

      <S.ButtonWrap>
        <S.Button
          $active
          type="button"
          onClick={() => navigate("/noticeWrite")}
        >
          글쓰기
        </S.Button>
      </S.ButtonWrap>
      <Pagination pageno={pageno} setPageno={setPageno} data={data} />
    </S.Inner>
  );
};

export default Notice;
