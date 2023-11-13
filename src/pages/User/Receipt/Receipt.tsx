/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import useSWR from "swr";
import { authAxios } from "utils/instance";
import { ReceiptTable, UserTop, Pagination, NoData } from "components";
import { ReceiptList } from "types";
import { NoSearch } from "asset";

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
      <UserTop
        title="구매내역"
        sub="전체"
        count={data === "결제 정보가 없습니다." ? 0 : data.totalElements}
      />
      {data === "결제 정보가 없습니다." ? (
        <NoData
          title="구매한 강의가 존재하지 않습니다"
          span="강의를 구매해주세요"
          img={<NoSearch />}
        />
      ) : (
        <>
          <ReceiptTable data={data.content} setRefund={setRefund} />
          <Pagination
            pageno={pageno}
            setPageno={setPageno}
            totalPages={data.totalPages}
          />
        </>
      )}
    </>
  );
};

export default Receipt;
