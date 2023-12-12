import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useDate } from "hooks";
import * as I from "types";
import * as St from "./style";
import { cartCouponLoading } from "../../../redux/reducer/cartReducer";


interface Coupon {
  setOpenCoupon: React.Dispatch<React.SetStateAction<boolean>>;
  checkList: I.LectureInfoList[];
  couponListInCart: I.CouponListInCart[];
  setPrice: React.Dispatch<React.SetStateAction<I.BasketState>>;
  price: I.BasketState;
}


const CouponPop = ({
  setOpenCoupon,
  setPrice,
  price,
  checkList,
  couponListInCart,
}: Coupon) => {
  const dispatch = useDispatch();
  const { calculateTimeDifference } = useDate();
  const closeBtn = useCallback(() => {
    setOpenCoupon(false);
  }, []);
  const onCoupon = useCallback(
    async (couponCode: string, n: string, discountrate: number) => {
      setPrice({
        ...price,
        couponName: n,
        discountrate: discountrate,
        couponCode: couponCode,
      });
      const updataCheckList = checkList.map((v) => ({
        ...v,
        couponCode: couponCode,
      }));
      try {
        await dispatch(cartCouponLoading(updataCheckList));
      } catch (error) {
        alert("쿠폰을 다시 선택해주세요");
      }
    },
    [couponListInCart, checkList]
  );

  return (
    <St.PopupWrap>
      <St.Popup>
        <St.Title>
          쿠폰 선택
          <St.Deletes onClick={() => closeBtn()} />
        </St.Title>
        <St.PopCon>
          <div>
            <St.Label>
              사용 가능{" "}
              <span>
                {
                  couponListInCart.filter(
                    (v) =>
                      v.state === "ACTIVE" &&
                      checkList.some((l) => l.lectureName === v.lecturename)
                  ).length
                }
              </span>
            </St.Label>
            {couponListInCart.filter(
              (v) =>
                v.state === "ACTIVE" &&
                checkList.some((l) => l.lectureName === v.lecturename)
            ).length > 0 ? (
              <ul>
                <St.CouponList>
                  <St.CouponInput
                    type="radio"
                    name="coupon"
                    id="none"
                    onClick={() => onCoupon("", "", 0)}
                    checked={price.couponName === ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      e.target.checked
                    }
                  />

                  <St.CouponLabel htmlFor="none" $active>
                    <St.CouponName>선택없음</St.CouponName>
                  </St.CouponLabel>
                  <St.CouponClick>1</St.CouponClick>
                </St.CouponList>

                {couponListInCart
                  .filter(
                    (v) =>
                      v.state === "ACTIVE" &&
                      checkList.some((l) => l.lectureName === v.lecturename)
                  )
                  .map((c) => {
                    return (
                      <St.CouponList key={c.couponcode}>
                        <St.CouponInput
                          type="radio"
                          name="coupon"
                          id={`${c.couponcode}`}
                          checked={price.couponName === c.lecturename}
                          onClick={() =>
                            onCoupon(
                              c.couponcode,
                              c.lecturename,
                              c.discountrate
                            )
                          }
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            e.target.checked
                          }
                        />

                        <St.CouponLabel htmlFor={`${c.couponcode}`} $active>
                          <St.CouponDiscountrate>
                            {c.discountrate}%
                          </St.CouponDiscountrate>
                          <St.CouponExpirydate>
                            {calculateTimeDifference(c.expirydate)}
                          </St.CouponExpirydate>
                          <St.CouponName>{c.lecturename}</St.CouponName>
                        </St.CouponLabel>
                        <St.CouponClick>1</St.CouponClick>
                      </St.CouponList>
                    );
                  })}
              </ul>
            ) : (
              <div>
                <St.NoCoupon>
                  사용가능한 쿠폰이 없습니다.
                  <span>*쿠폰을 새로 등록하거나 다운받아 보세요. </span>
                  <span>*구매를 원하는 상품을 선택했는지 확인해 보세요.</span>
                </St.NoCoupon>
              </div>
            )}
          </div>
          <div>
            <St.Label>
              사용 불가{" "}
              <span>
                {
                  couponListInCart.filter(
                    (v) =>
                      v.state === "ACTIVE" &&
                      !checkList.some((c) => c.lectureName === v.lecturename) &&
                      couponListInCart.some(
                        (i) => i.lecturename === v.lecturename
                      )
                  ).length
                }
              </span>
            </St.Label>
            <ul>
              {couponListInCart
                .filter(
                  (v) =>
                    v.state === "ACTIVE" &&
                    !checkList.some((c) => c.lectureName === v.lecturename) &&
                    couponListInCart.some(
                      (i) => i.lecturename === v.lecturename
                    )
                )
                .map((l) => {
                  return (
                    <St.CouponList key={l.couponcode}>
                      <St.CouponInput
                        type="radio"
                        name="coupon"
                        id={`${l.couponcode}`}
                        disabled
                      />
                      <St.CouponLabel $active={false}>
                        <St.CouponDiscountrate>
                          {l.discountrate}%
                        </St.CouponDiscountrate>
                        <St.CouponExpirydate>
                          {calculateTimeDifference(l.expirydate)}
                        </St.CouponExpirydate>
                        <St.CouponName>{l.lecturename}</St.CouponName>
                      </St.CouponLabel>
                      <St.CouponClick>1</St.CouponClick>
                    </St.CouponList>
                  );
                })}
            </ul>
          </div>
          <St.Btn $active onClick={() => closeBtn()} type="button">
            확인
          </St.Btn>
        </St.PopCon>
      </St.Popup>

      <St.PopupBg onClick={() => closeBtn()} />
    </St.PopupWrap>
  );
};

export default CouponPop;
