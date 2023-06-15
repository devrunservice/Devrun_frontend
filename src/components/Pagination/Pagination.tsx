import { PageNext, PagePrev } from "asset";
import * as St from "./style"
const Pagination = () => {
    return (
      <St.PagingWrap>
        <St.Paging>
          <PagePrev />
        </St.Paging>
        <St.Paging>1</St.Paging>
        <St.Paging>2</St.Paging>
        <St.Paging>3</St.Paging>
        <St.Paging>
          <PageNext />
        </St.Paging>
      </St.PagingWrap>
    );
}

export default Pagination;