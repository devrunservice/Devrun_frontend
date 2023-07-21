/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import * as S from "../styles";

const Notes = () => {
  const haneleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.Section>
      <S.Top>
        <S.Title>강의 노트</S.Title>
        <S.SearchWrap>
          <S.Search
            type="text"
            // ref={searchRef}
            // onChange={searchChang}
            // onKeyPress={searchEnter}
            placeholder="강의명 또는 내용을 입력해주세요"
          />
          <S.SearchButton >검색</S.SearchButton>
        </S.SearchWrap>
      </S.Top>
    </S.Section>
    
  );
};

export default Notes;
