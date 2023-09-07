import React, { useCallback,useEffect, useState } from "react";
import { create } from "utils/api";
import usePage from "hooks/usePage";
import { MentoCoupon } from "types";
import { UserTop, Pagination, Table } from "components";
import { Button } from "style/Common";
import CouponPop from "./CouponPop";
import * as St from "./style"



const Coupon = () => {
    const { pageno, setPageno, offset } = usePage();
    const [coupon, setCoupon] = useState<boolean>(false);
    const couponBtn = useCallback(() => {
      setCoupon(true);
    }, []);
    const [data, setData] = useState<MentoCoupon>();
    const dataList = async()=>{
      const res = await create.couponGet({ pageno });
      setData(res.data);
    }
    useEffect(()=>{
      dataList()
    },[])

    
    return (
      <section>
        {typeof data !== "undefined" && (
          <>
            <St.CouponTop>
              <UserTop title="쿠폰관리" sub="전체" count={data.totalElements} />
              <Button $active onClick={() => couponBtn()}>
                쿠폰등록
              </Button>
            </St.CouponTop>

            <Table
              title="쿠폰관리"
              data={data}
              offset={offset}
              dataList={dataList}
            />
            <Pagination pageno={pageno} setPageno={setPageno} data={data} />
          </>
        )}
        {coupon && <CouponPop setCoupon={setCoupon} />}
      </section>
    );
}

export default Coupon;