import React, { useCallback, useState } from "react";
import usePage from "hooks/usePage";
import { UserTop, Pagination, Table } from "components";
import { Button } from "style/Common";
import CouponPop from "./CouponPop";
import * as St from "./style"


const Coupon = () => {
    const { activePage, setActivePage, limit } = usePage();
    const [coupon,setCoupon] = useState<boolean>(false)
    const couponBtn = useCallback(()=>{
        setCoupon(true)
    },[])

    return (
      <section>
        <St.CouponTop>
          <UserTop title="쿠폰 관리" count="1" sub="전체" />
          <Button $active onClick={() => couponBtn()}>쿠폰등록</Button>
        </St.CouponTop>
        <Table title="1" num={1} />
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          limit={limit}
        />
        {coupon && <CouponPop setCoupon={setCoupon} />}
      </section>
    );
}

export default Coupon;