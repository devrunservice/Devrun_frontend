import React from "react";
import { Cart } from "utils/api";
import * as I from "types";
import * as St from "./style";

const ReceiptTable = (props: I.ReceiptTable) => {
  const receipt = (item: string | undefined) => {
    const windowFeatures =
      "width=420,height=512,menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=yes";
    window.open(item, "_blank", windowFeatures);
  };

  const basketBtn = async (
    merchant_uid: string | undefined,
    name: string | undefined,
    amount: number | undefined,
  ) => {
    
    if (window.confirm("환불하시겠습니까?")) {
      const pay: I.Refund = {
        merchant_uid: merchant_uid,
        amount: amount,
        reason: name,
      };
      await Cart.refund(pay);
      alert("환불되었습니다.");
    } else {
      alert("취소되었습니다.");
    }
  };


  return (
    <St.ReceiptTable>
      {props.data?.slice(props.offset, props.offset + props.limit).map((item: I.Receipt) => {
        return (
          <St.TableLi $cursor={false} key={item.pay_no}>
            <St.Num>{item.pay_no}</St.Num>
            <St.Title>{item.name}</St.Title>
            <St.CommonLi>{item.paid_amount} 원</St.CommonLi>
            <St.CommonLi>
              {item.status === "0" ? "결제완료" : "환불완료"}
            </St.CommonLi>
            <St.PayBtn>
              {item.status === "0" && (
                <St.Button
                  type="button"
                  $color
                  onClick={() =>
                    basketBtn(item.merchant_uid, item.name, item.paid_amount)
                  }
                >
                  환불
                </St.Button>
              )}
              {item.receipt_url && (
                <St.Button
                  type="button"
                  $color={false}
                  onClick={() => receipt(item.receipt_url)}
                >
                  거래명세서
                </St.Button>
              )}
            </St.PayBtn>
          </St.TableLi>
        );
      })}
    </St.ReceiptTable>
  );
}
export default ReceiptTable;
