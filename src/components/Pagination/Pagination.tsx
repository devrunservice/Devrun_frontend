import React, { useState } from "react";
import { IPagination } from "types"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { PageNext, PagePrev } from "asset";
import * as St from "./style";

type PaginationType = {
  count: number;
}

const Pagination: React.FC<PaginationType> = ({count}) => {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1); // eslint-disable-line @typescript-eslint/no-unused-vars
  const lastPage = count !=null ? Math.ceil(count / 5) : 0
  // 이전 페이지 클릭시
  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 5);
    setActivePage((prev) => prev - 5);
  };
  // 다음 페이지 클릭시
  const onClickNext = () => {
    if (startPage + 5 <= lastPage) return;
    setStartPage((prev) => prev + 5);
    setActivePage((prev) => prev + 5);
  };
  console.log(startPage);
  return (
    <St.PagingWrap>
      <St.Paging>
        <PagePrev onClick={() => onClickPrev()} />
      </St.Paging>
      <St.Paging>1</St.Paging>
      <St.Paging>2</St.Paging>
      <St.Paging>3</St.Paging>
      <St.Paging>4</St.Paging>
      <St.Paging>
        <PageNext onClick={() => onClickNext()} />
      </St.Paging>
    </St.PagingWrap>
  );
}

export default Pagination;
