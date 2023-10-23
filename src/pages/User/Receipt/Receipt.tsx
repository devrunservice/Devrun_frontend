
import React, { useState, useEffect } from "react";
import { mypage } from "utils/api";
import { ReceiptTable, UserTop, Pagination } from "components";
import * as I from "types";

const Receipt = () => {
  const [data, setData] = useState<I.Receipt>();
const [pageno, setPageno] = useState<number>(1);  
useEffect( () => {
    const dataList = async () => {
      const res = await mypage.pay({ pageno });
      setData(res.data);
    };
    dataList();
  }, [pageno]);
  return (
    <section>
      {typeof data !== "undefined" && (
        <>
          <UserTop title="구매내역" count={data.totalElements} sub="전체" />
          <ReceiptTable data={data} setData={setData} />
          <Pagination pageno={pageno} setPageno={setPageno} data={data} />
        </>
      )}
    </section>
  );
};

export default Receipt;
