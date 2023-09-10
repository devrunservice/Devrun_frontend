import React from "react";
import { UserCouponList } from "types";
import * as St from "./style";

const CouponList = (props: UserCouponList) => (
  <St.Coupon $active={props.state === "ACTIVE"}>
    <St.Date $active={props.state === "ACTIVE"}>
      {props.expirydate.slice(0, 4)}년 {props.expirydate.slice(5, 7)}월{" "}
      {props.expirydate.slice(8, 10)}일 까지
    </St.Date>
    <St.Name $active={props.state === "ACTIVE"}>{props.lecturename}</St.Name>
    <St.Bottom>
      <St.Use $active={props.state === "ACTIVE"}>
        {props.state === "ACTIVE" && "사용가능"}
        {props.state === "REMOVED" && "사용완료"}
        {props.state === "EXPIRY" && "기간만료"}
      </St.Use>
      <St.Discountrate $active={props.state === "ACTIVE"}>
        총금액에서 <span>{props.discountrate}%</span>
      </St.Discountrate>
    </St.Bottom>
  </St.Coupon>
);
export default CouponList;
