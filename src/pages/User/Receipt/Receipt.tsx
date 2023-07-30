/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Cart } from "utils/api";
import { Table, Pagination, UserTop } from "components";
import { IRefund } from "types";


const Receipt = () => {
  const [payment, setPayment] = useState(false);

  const basketBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data: IRefund = {
      merchant_uid: "merchant_1689686364644",
      cancel_request_amount: 100,
      reason: "테스트 결제 환불",
    };
    const res = await Cart.refund(data);
    console.log(res)
    setPayment(true)
  };
  return (
    <section>
      <UserTop title="구매내역" count="2" />
      <Table
        basketBtn={basketBtn}
        num="1"
        title="111"
        pay="5000"
        payment={payment}
      />
      <Pagination />
    </section>
  );
};

export default Receipt;
