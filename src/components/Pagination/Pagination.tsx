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

  return (
    <St.PagingWrap>
      <St.PagingArr
        onClick={() => props.setPageno(props.pageno - 1)}
        disabled={props.pageno === 1}
      >
        <PagePrev />
      </St.PagingArr>
      {Array.from({ length: lastPage }).map((_, index) => {
          return (
            <St.Paging
              key={index + 1}
              $active={index + 1 === props.pageno}
              onClick={() => onClickPage(index + 1)}
            >
              {index + 1}
            </St.Paging>
          );
        })}
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
