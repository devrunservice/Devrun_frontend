import React, { useCallback } from "react";
import { PageNext, PagePrev } from "asset";
import * as St from "./style";


interface Paginations {
  totalPages: number;
  pageno: number;
  setPageno: (page: number) => void;
}

const Pagination = ({ totalPages, pageno, setPageno }: Paginations) => {
  const lastPage = totalPages || 0;
  const onClickPage = useCallback(
    (pageNumber: number) => {
      setPageno(pageNumber);
    },
    [pageno]
  );
  const currentGroup = Math.ceil(pageno / 10);
  const firstPageInGroup = (currentGroup - 1) * 10 + 1;
  const lastPageInGroup = Math.min(
    currentGroup * 10,
    totalPages || 0
  );
  return (
    <St.PagingWrap>
      <St.PagingArr
        onClick={() => setPageno(pageno - 1)}
        disabled={pageno === 1}
      >
        <PagePrev />
      </St.PagingArr>
      {Array.from({ length: lastPageInGroup - firstPageInGroup + 1 }).map(
        (_, index) => {
          const pageNumber = firstPageInGroup + index;
          return (
            <St.Paging
              key={pageNumber}
              $active={pageNumber === pageno}
              onClick={() => onClickPage(pageNumber)}
            >
              {pageNumber}
            </St.Paging>
          );
        }
      )}
      <St.PagingArr
        onClick={() =>setPageno(pageno + 1)}
        disabled={pageno === lastPage}
      >
        <PageNext />
      </St.PagingArr>
    </St.PagingWrap>
  );
};
export default Pagination;
