/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { UserTop, Pagination, MentoTable } from "components";
import { Button } from "style/Common";
import CouponPop from "./CouponPop";
import * as St from "./style";
import { couponLoading } from "../../../redux/reducer/mentoCouponReducer";



const Coupon = () => {
  const dispatch = useDispatch();  
  const [pageno, setPageno] = useState<number>(1);
  const [coupon, setCoupon] = useState<boolean>(false);
  const couponBtn = () => setCoupon(true);
  const { data, coupon:createCoupon } = useSelector(
    (state: RootState) => state.mentoCouponReducer
  );
  console.log(data);
  useEffect(() => {
    dispatch(couponLoading({ pageno }));
  }, [pageno, createCoupon]);
  return (
    <section>
      <St.CouponTop>
        <UserTop title="쿠폰관리" sub="전체" count={data.totalElements} />
        <Button $active onClick={() => couponBtn()}>
          쿠폰등록
        </Button>
      </St.CouponTop>

      <MentoTable data={data.content} />
      <Pagination
        pageno={pageno}
        setPageno={setPageno}
        totalPages={data.totalPages}
      />
      {coupon && <CouponPop setCoupon={setCoupon} />}
    </section>
  );
};

export default Coupon;
