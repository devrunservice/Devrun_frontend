/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import useSWR from "swr";
import { authAxios } from "utils/instance";
import { ReceiptTable, UserTop, Pagination } from "components";
import { ReceiptList } from "types";

const Receipt = () => {
  const fetcher = (url: string) => authAxios.get(url).then((res) => res.data);
  const [pageno, setPageno] = useState<number>(1);
  const [refund, setRefund] = useState<ReceiptList[]>();
  const { data, isLoading } = useSWR(
    `/PaymentInfo?page=${pageno}&size=10`,
    fetcher
  );
  if (isLoading) return <div>asd</div>;
  return (
    <>
      <UserTop title="구매내역" count={data.totalElements} sub="전체" />
      <ReceiptTable data={data.content} setRefund={setRefund} />
      <Pagination pageno={pageno} setPageno={setPageno} data={data} />
    </>
  );
};

export default Receipt;
