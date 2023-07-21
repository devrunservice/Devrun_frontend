/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Pagination, Learn } from "components";
import * as S from "../styles";
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
  const tapList = [
    { id: 0, list: "학습순" },
    { id: 1, list: "신청순" },
    { id: 2, list: "제목순" },
  ];
  const [tapOpen, setTapOpen] = useState<boolean>(false);
  const [tapLists, setTaplists] = useState(tapList[0].list);
  const tapOpsion = (item: string) => {
    setTaplists(item);
    setTapOpen(false);
  };
  return (
    <section>
      <S.Top>
        <S.Title>내 학습 관리</S.Title>
        <S.SearchWrap>
          <S.Search
            type="text"
            ref={searchRef}
            onChange={searchChang}
            onKeyPress={searchEnter}
            placeholder="찾고 싶은 강의 주제를 입력해주세요"
          />
          <S.SearchButton onClick={searchBtn}>검색</S.SearchButton>
        </S.SearchWrap>
      </S.Top>
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
          <St.Tap active={tapOpen === true}>
            <St.TapLabel onClick={() => setTapOpen(!tapOpen)}>
              {tapLists}
            </St.TapLabel>
            <St.Arr active={tapOpen === true} />
            {tapOpen && (
              <St.TapUl>
                {tapList.map((item) => (
                  <St.TapLi key={item.id} onClick={() => tapOpsion(item.list)}>
                    {item.list}
                  </St.TapLi>
                ))}
              </St.TapUl>
            )}
          </St.Tap>
        </St.TapWrap>
        <St.LearnUl>
          {tap === 1 && <Learn />}
          {tap === 2 && <Learn />}
          {tap === 3 && <Learn />}
        </St.LearnUl>
      </St.LearnCon>
      <Pagination />
    </section>
  );
};
export default Learning;
