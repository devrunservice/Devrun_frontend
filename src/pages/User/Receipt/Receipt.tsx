/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState, useEffect } from "react";
import { mypage } from "utils/api";
import { ReceiptTable, UserTop, Pagination } from "components";
import * as I from "types"
import usePage from "hooks/usePage";

const Receipt = () => {
  const [data, setData] = useState<I.Receipt>();
  const { offset, pageno, setPageno } = usePage();
  // 반환값

  const dataList = useCallback(async () => {
    const res = await mypage.pay({ pageno });
    setData(res.data);
  }, [pageno, data]);
    useEffect(() => {
      dataList();
    }, [pageno]);
  return (
    <section>
      {typeof data !== "undefined" && (
        <>
          <UserTop title="구매내역" count={data.totalElements} sub="전체" />
          <ReceiptTable data={data} offset={offset} />
          <Pagination pageno={pageno} setPageno={setPageno} data={data} />
        </>
      )}
    </section>
  );
};

export default Receipt;
