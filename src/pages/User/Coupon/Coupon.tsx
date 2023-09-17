/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useInput } from "hooks";
import { UserTop, CouponList } from "components";
import { UserCouponList } from "types";

import { Button } from "style/Common";
import * as St from "./style";
import {
  couponListLoading,
  couponGetLoading,
} from "../../../redux/reducer/couponReducer";

const Coupon = () => {
  const [code, onCode, setCode] = useInput("");
  const userId = useSelector((state: RootState) => state.userReducer.data);
  const { data } = useSelector((state: RootState) => state.couponReducer);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(couponListLoading(null));
  }, []);
  console.log(data)
  const [tap, setTap] = useState<number>(1);
  const couponBtn = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(couponGetLoading({ code, id: userId.id }));
      setCode("");
    },
    [code, userId]
  );
  return (
    <St.Section>
      <UserTop title="쿠폰함" />
      <St.Code>
        <St.CodeLabel>쿠폰코드 입력</St.CodeLabel>
        <St.InputWrap onSubmit={couponBtn}>
          <St.Input
            type="text"
            value={code}
            onChange={onCode}
            placeholder="쿠폰코드를 입력해주세요"
          />
          <Button $active>쿠폰등록</Button>
        </St.InputWrap>
      </St.Code>
      <St.Tap>
        <St.TapBtn $active={tap === 1} onClick={() => setTap(1)}>
          전체 쿠폰 {data.content.length}
        </St.TapBtn>
        <St.TapBtn $active={tap === 2} onClick={() => setTap(2)}>
          사용가능한 쿠폰{" "}
          {data.content.filter((v) => v.state === "ACTIVE").length}
        </St.TapBtn>
        <St.TapBtn $active={tap === 3} onClick={() => setTap(3)}>
          사용완료 또는 기간만료된 쿠폰{" "}
          {data.content.filter((v) => v.state !== "ACTIVE").length}
        </St.TapBtn>
      </St.Tap>
      <St.Content>
        {tap === 1 &&
          data.content.map((v: UserCouponList) => {
            return (
              <CouponList
                key={v.issuedno}
                discountrate={v.discountrate}
                lecturename={v.lecturename}
                expirydate={v.expirydate}
                state={v.state}
              />
            );
          })}
        {tap === 2 &&
          data.content
            .filter((v) => v.state === "ACTIVE")
            .map((v: UserCouponList) => {
              return (
                <CouponList
                  key={v.issuedno}
                  discountrate={v.discountrate}
                  lecturename={v.lecturename}
                  expirydate={v.expirydate}
                  state={v.state}
                />
              );
            })}
        {tap === 3 &&
          data.content
            .filter((v) => v.state !== "ACTIVE")
            .map((v: UserCouponList) => {
              return (
                <CouponList
                  key={v.issuedno}
                  discountrate={v.discountrate}
                  lecturename={v.lecturename}
                  expirydate={v.expirydate}
                  state={v.state}
                />
              );
            })}
      </St.Content>
    </St.Section>
  );
};

export default Coupon;
