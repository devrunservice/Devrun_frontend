/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { mygage } from "utils/api";
import { ReceiptTable, Pagination, UserTop } from "components";
import usePage from "hooks/usePage";

const Receipt = () => {
  const [data, setData] = useState([]);
  const [resfund, setResfund] = useState(false);
  const { limit, activePage, offset, setActivePage } = usePage();
  // 반환값
  useEffect(() => {
    const payList = async () => {
      try {
        const res = await mygage.pay();
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    payList();
  }, []);
  console.log(resfund);
  return (
    <section>
      <UserTop title="구매내역" count={data} sub="전체" />
      <ReceiptTable
        data={data}
        offset={offset}
        limit={limit}
        setResfund={setResfund}
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
