/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Form, SearchBtn, SearchInput, Section, TitleWrapper } from "../styles";

const Questions = () => {
  const haneleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Section>
      <TitleWrapper>
        <h1>작성한 질문</h1>
        <Form onSubmit={haneleSubmit}>
          <SearchInput
            type="text"
            placeholder="강의명 또는 내용을 입력해주세요"
          />
          <SearchBtn>검색</SearchBtn>
        </Form>
      </TitleWrapper>
    </Section>
  );
};

export default Questions;
