import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, UserTop } from "components";
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
  console.log(data)
  return (
    <S.Inner>
      {typeof data !== "undefined" && (
        <>
          <UserTop title="공지사항" sub="전체" />

          {/* <Table title="공지사항" data={data} offset={offset} /> */}

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
        </>
      )}
    </S.Inner>
  );
};

export default Notice;