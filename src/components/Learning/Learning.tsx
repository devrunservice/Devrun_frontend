/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Search } from "utils";
import { Pagination, Learn, Modal } from "components";
import * as St from "./style";

const Learning = () => {
  const [search, setSearch] = useState<string>("");
  // const [filterData, setFilterData] = useState(Search.mygage);
  const searchChang = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const searchBtn = async () => {
    console.log("as");
    // const filter = Search.mygage.filter((item) => {
    //   return item.name.toUpperCase().includes(search);
    // });
    // setFilterData(filter);
  };
  // 엔터시 페이지 넘김.
  const searchRef = useRef<HTMLInputElement>(null);
  const searchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchBtn();
    }
  };
  const [tap, SetTap] = useState<number>(1);
  return (
    <St.Learn>
      <St.Top>
        <St.Title>내 학습 관리</St.Title>
        <St.SearchWrap>
          <St.Search
            type="text"
            ref={searchRef}
            onChange={searchChang}
            onKeyPress={searchEnter}
            placeholder="찾고 싶은 강의 주제를 입력해주세요"
          />
          <St.SearchButton onClick={searchBtn}>검색</St.SearchButton>
        </St.SearchWrap>
      </St.Top>
      <St.LearnCon>
        <St.TapWrap>
          <St.Left>
            <St.Btn onClick={() => SetTap(1)} active={tap === 1}>
              전체
            </St.Btn>
            <St.Btn onClick={() => SetTap(2)} active={tap === 2}>
              학습중
            </St.Btn>
            <St.Btn onClick={() => SetTap(3)} active={tap === 3}>
              완료
            </St.Btn>
          </St.Left>
          <St.Tap>asd</St.Tap>
        </St.TapWrap>
        <St.LearnUl>
          {tap === 1 && <Learn />}
          {tap === 2 && <Learn />}
          {tap === 3 && <Learn />}
        </St.LearnUl>
      </St.LearnCon>
      <Pagination />
    </St.Learn>
  );
};
export default Learning;
/* eslint-disable @typescript-eslint/no-unused-vars */
