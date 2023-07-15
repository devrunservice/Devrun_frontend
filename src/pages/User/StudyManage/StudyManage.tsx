/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Pagination } from "components";
import * as St from "./styles";
import { Form, SearchBtn, SearchInput, Section, TitleWrapper } from "../styles";

const StudyManage = () => {
  const haneleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Section>
      <TitleWrapper>
        <h1>내 학습 관리</h1>
        <Form onSubmit={haneleSubmit}>
          <SearchInput type="text" placeholder="강의명을 입력해주세요" />
          <SearchBtn>검색</SearchBtn>
        </Form>
      </TitleWrapper>
      <div>
        <St.OptionBtn>전체</St.OptionBtn>
        <St.OptionBtn>학습중</St.OptionBtn>
        <St.OptionBtn>완료</St.OptionBtn>
      </div>
      <Pagination />
    </Section>
  );
};

export default StudyManage;
