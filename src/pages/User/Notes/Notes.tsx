/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Form, SearchBtn, SearchInput, TitleWrapper } from "../styles";

const Notes = () => {
  const haneleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section>
      <TitleWrapper>
        <h1>강의 노트</h1>
        <Form onSubmit={haneleSubmit}>
          <SearchInput
            type="text"
            // ref={searchRef}
            // onChange={searchChang}
            // onKeyPress={searchEnter}
            placeholder="강의명 또는 내용을 입력해주세요"
          />
          <SearchBtn>검색</SearchBtn>
        </Form>
      </TitleWrapper>
    </section>
  );
};

export default Notes;
