/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import * as S from "../styles"

const Questions = () => {
  const haneleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <S.Section>
      <S.Top>
        <S.Title>작성한 질문</S.Title>
        <S.SearchWrap>
          <S.Search
            type="text"
            // ref={searchRef}
            // onChange={searchChang}
            // onKeyPress={searchEnter}
            placeholder="작성한 질문을 입력해주세요"
          />
          <S.SearchButton >검색</S.SearchButton>
        </S.SearchWrap>
      </S.Top>
    </S.Section>
  );
};

export default Questions;
