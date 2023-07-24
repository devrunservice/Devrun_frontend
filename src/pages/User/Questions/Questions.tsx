/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { SearchBar } from "components";
import { TitleWrapper } from "../styles";

const Questions = () => (
  <section>
    <TitleWrapper>
      <h1>작성한 질문</h1>
      <SearchBar />
    </TitleWrapper>
  </section>
);

export default Questions;
