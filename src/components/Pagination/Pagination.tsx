import React, { useCallback } from "react";
import * as I from "types";
import { PageNext, PagePrev } from "asset";
import * as St from "./style";

const Pagination = (props: I.Pagination) => {
  const lastPage = props.data?.totalPages || 0;
  const onClickPage = useCallback(
    (pageNumber: number) => {
      props.setPageno(pageNumber);
    },
    [props.pageno]
  );
   const itemsPerPage = 10;
   const currentGroup = Math.ceil(props.pageno / itemsPerPage)
   const firstPageInGroup = (currentGroup - 1) * itemsPerPage + 1;
   const lastPageInGroup = Math.min(
     currentGroup * itemsPerPage,
     props.data?.totalPages || 0
   );
  return (
    <St.PagingWrap>
      <St.PagingArr
        onClick={() => props.setPageno(props.pageno - 1)}
        disabled={props.pageno === 1}
      >
        <PagePrev />
      </St.PagingArr>
      {Array.from({ length: lastPageInGroup - firstPageInGroup + 1 }).map(
        (_, index) => {
          const pageNumber = firstPageInGroup + index;
          return (
            <St.Paging
              key={pageNumber}
              $active={pageNumber === props.pageno}
              onClick={() => onClickPage(pageNumber)}
            >
              {pageNumber}
            </St.Paging>
          );
        }
      )}
      <St.PagingArr
        onClick={() => props.setPageno(props.pageno + 1)}
        disabled={props.pageno === lastPage}
      >
        <PageNext />
      </St.PagingArr>
    </St.PagingWrap>
  );
};
export default Pagination;
