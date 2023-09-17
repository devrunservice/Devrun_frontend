/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import * as I from "types";
import * as St from "./style";


interface Coupon {
  setOpenCoupon: React.Dispatch<React.SetStateAction<boolean>>;
}


const CouponPop = (props: Coupon) => {
  const closeBtn = useCallback(() => {
    props.setOpenCoupon(false);
  }, []);
  return (
    <St.PopupWrap>
      <St.Popup>
        <St.Title>
          쿠폰 선택
          <St.Deletes onClick={() => closeBtn()} />
        </St.Title>
        <St.Btn $active>확인</St.Btn>
      </St.Popup>

      <St.PopupBg onClick={() => closeBtn()} />
    </St.PopupWrap>
  );
};

export default CouponPop;
