
import React, { useCallback, useState, useEffect } from "react";
import { mypage } from "utils/api";
import { ReceiptTable, UserTop, Pagination } from "components";
import * as I from "types";
import usePage from "hooks/usePage";

const Receipt = () => {
  const [data, setData] = useState<I.Receipt>();
  const { pageno, setPageno } = usePage();
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
          <ReceiptTable data={data} />
          <Pagination pageno={pageno} setPageno={setPageno} data={data} />
        </>
      )}
    </section>
  );
};

export default Receipt;
