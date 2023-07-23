/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Form, SearchBtn, SearchInput, TitleWrapper } from "../styles";

const Questions = () => {
  const haneleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section>
      <TitleWrapper>
        <h1>작성한 질문</h1>
        <Form onSubmit={haneleSubmit}>
          <SearchInput
            type="text"
            // ref={searchRef}
            // onChange={searchChang}
            // onKeyPress={searchEnter}
            placeholder="작성한 질문을 입력해주세요"
          />
          <SearchBtn>검색</SearchBtn>
        </Form>
      </TitleWrapper>
    </section>
  );
};

export default Questions;
