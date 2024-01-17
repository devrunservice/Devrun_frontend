/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux/store";
import { Pagination, UserTop, NoticeTable, Button } from "components";
import * as S from "style/Common";

import { noticeListLoading } from "../../../redux/reducer/noticeReducer";


const Notice = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { data, write } = useSelector(
    (state: RootState) => state.noticeReducer
  );
  const {data:user} = useSelector((state: RootState) => state.userReducer);

  const [pageno, setPageno] = useState<number>(1);
  useEffect(() => {
    dispatch(noticeListLoading(pageno));
  }, [pageno, write]);
  return (
    <S.Inner>
      <UserTop title="공지사항" sub="전체" count={data.totalElements} />

      <NoticeTable data={data} />
      {user.role === "ADMIN" && (
        <S.ButtonWrap $active={false}>
          <Button
            text="글쓰기"
            name="text"
            color="white"
            backgroundcolor="main"
            onBtn={() => navigate("/noticeWrite")}
          />
        </S.ButtonWrap>
      )}

      <Pagination
        pageno={pageno}
        setPageno={setPageno}
        totalPages={data.totalPages}
      />
    </S.Inner>
  );
};

export default Notice;
