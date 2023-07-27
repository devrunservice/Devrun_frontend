/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { SearchBar } from "components";
import { TitleWrapper } from "../styles";

const Notes = () => {
  const haneleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section>
      <TitleWrapper>
        <h1>강의 노트</h1>
        <SearchBar />
      </TitleWrapper>
    </section>
  );
};

export default Notes;
