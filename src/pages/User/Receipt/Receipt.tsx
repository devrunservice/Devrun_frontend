/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { mypage } from "utils/api";
import { ReceiptTable, Pagination, UserTop } from "components";
import * as I from "types"
import usePage from "hooks/usePage";

const Receipt = () => {
  const [data, setData] = useState<I.Receipt[]>([]);
  const { limit, activePage, offset, setActivePage } = usePage();
  // 반환값
  useEffect(() => {
    const payList = async () => {
      try {
        const res = await mypage.pay();
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    payList();
  }, []);
  
  return (
    <section>
      <UserTop title="구매내역" count={data} sub="전체" />
      <ReceiptTable
        data={data}
        offset={offset}
        limit={limit}
        setData={setData}
      />
      <Pagination
        data={data}
        limit={limit}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </section>
  );
};

export default Receipt;
