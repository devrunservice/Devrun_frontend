/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import * as St from "./styles";
import { Form, SearchBtn, SearchInput, Section, TitleWrapper } from "../styles";

const Notes = () => {
  const haneleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Section>
      <TitleWrapper>
        <h1>강의 노트</h1>
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

export default Notes;
