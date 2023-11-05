
import React, { useState } from "react";
import useSWR from "swr"
import { authAxios } from "utils/instance";
import { UserTop, Pagination, PointTable } from "components";


const Point = () => {
    const fetcher = (url: string) => authAxios.get(url).then((res) => res.data);
    const [pageno, setPageno] = useState<number>(1);  
    const { data, isLoading } = useSWR(
      `/PointHistory?page=${pageno}&size=10`,fetcher);
    if (isLoading) return <div>asd</div>
      return (
        <>
          <UserTop title="포인트" sub="총 보유포인트" count={data.mypoint} />
          <PointTable
            data={data.pointHistoryPage.content}
            
          />
          <Pagination
            pageno={pageno}
            setPageno={setPageno}
            data={data.pointHistoryPage}
          />
        </>
      );
};
export default Point;
