import React from "react";
import { Form, SearchBtn, SearchInput, TitleWrapper } from "../styles";

const Coupon = () => {
  const haneleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section>
      <TitleWrapper>
        <h1>강의 노트</h1>
        <Form onSubmit={haneleSubmit}>
          <SearchInput type="text" placeholder="쿠폰을 검색해주세요." />
          <SearchBtn>검색</SearchBtn>
        </Form>
      </TitleWrapper>
    </section>
  );
};

export default Coupon;
