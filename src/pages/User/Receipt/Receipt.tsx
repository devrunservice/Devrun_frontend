/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Cart } from "utils/api";
import { Table, Pagination } from "components";
import { IRefund } from "types";
import * as S from "../styles";

const Receipt = () => {
  const basketBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data: IRefund = {
      merchant_uid: "merchant_1689686364644",
      cancel_request_amount: 100,
      reason: "테스트 결제 환불",
    };
    await Cart.refund(data);
  };

  return (
    <section>
      <S.Top>
        <S.Title>
          구매내역
          <S.Number>
            전체 <S.NumCount>2</S.NumCount>
          </S.Number>
        </S.Title>
      </S.Top>
      <Table basketBtn={basketBtn} />
      <Pagination />
    </section>
  );
};

export default Receipt;
