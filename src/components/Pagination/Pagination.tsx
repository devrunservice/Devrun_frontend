import React from "react";
import * as I from "types";
import { PageNext, PagePrev } from "asset";
import * as St from "./style";


const Pagination = (props: I.Pagination) => {
  
  
  const lastPage =
    props.data != null ? Math.ceil(props.data.length / props.limit) : 0;
  const onClickPage = (pageNumber:number) => {
    props.setActivePage(pageNumber);
  };

  return (
    <St.PagingWrap>
      <St.PagingArr
        onClick={() => props.setActivePage(props.activePage -1)}
        disabled={props.activePage === 1}
      >
        <PagePrev />
      </St.PagingArr>
      {Array.from({ length: lastPage }).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <St.Paging
            key={pageNumber}
            $active={pageNumber === props.activePage}
            onClick={() => onClickPage(pageNumber)}
          >
            {pageNumber}
          </St.Paging>
        );
      })}
      <St.PagingArr
        onClick={() => props.setActivePage(props.activePage + 1)}
        disabled={props.activePage === lastPage}
      >
        <PageNext />
      </St.PagingArr>
    </St.PagingWrap>
  );
};
export default Pagination;
