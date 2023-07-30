/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { IPagination } from "types";
import { PageNext, PagePrev } from "asset";
import * as St from "./style";
// props: IPagination

const Pagination = () => {
  const [startPage, setStartPage] = useState<number>(1);
  const [activePage, setActivePage] = useState<number>(1);
  const lastPage = 0 != null ? Math.ceil(5 / 5) : 0;

  const onClickPage = () => {
    // const activePage = Number(e.currentTarget.id);
    setActivePage(startPage);
  };
  // 이전 페이지 클릭시
  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 5);
    setActivePage((prev) => prev - 5);
  };
  // 다음 페이지 클릭시
  const onClickNext = () => {
    if (startPage + 5 > lastPage) return;
    setStartPage((prev) => prev + 5);
    setActivePage((prev) => prev + 5);
  };
  // console.log(activePage);
  return (
    <St.PagingWrap>
      <St.PagingArr onClick={() => onClickPrev()}>
        <PagePrev />
      </St.PagingArr>
      {new Array(5).fill(1).map(
        (index) =>
          startPage + index <= lastPage && (
            <St.Paging
              key={startPage + index}
              onClick={onClickPage}
              isActive={startPage + index === activePage}
            >
              {startPage + index}
            </St.Paging>
          ),
      )}
      <St.PagingArr onClick={() => onClickNext()}>
        <PageNext />
      </St.PagingArr>
    </St.PagingWrap>
  );
};
export default Pagination;
/* eslint-disable @typescript-eslint/no-unused-vars */
