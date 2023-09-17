import React, { useCallback } from "react";
import { Cart } from "utils/api";
import * as I from "types";
import * as St from "../style";

const ReceiptTable = (props: I.Receipts) => {
  const receiptBtn = useCallback((item: string) => {
    const windowFeatures =
      "width=420,height=512,menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=yes";
    window.open(item, "_blank", windowFeatures);
  }, []);
  const basketBtn = useCallback(
    async (merchantUid: string, amount: number, userpayno:number,name:string) => {
      try {
        if (window.confirm("환불하시겠습니까?")) {
          const pay: I.Refund = {
            merchant_uid: merchantUid,
            amount: amount,
            name: name,
          };
          const response = await Cart.refund(pay);
          if (response.data === "환불이 성공적으로 처리되었습니다.") {
            alert("환불되었습니다.");
            const resfunds = props.data?.content.map((item) =>
              item.userpayno === userpayno ? { ...item, status: "1" } : item,
            );
            props.setData({ ...props.data, content: resfunds });
            
          }
        } else {
          alert("취소되었습니다.");
        }
      } catch (error) {
        alert("환불실패했습니다");
      }
    },
    []
  );


  return (
    <St.ReceiptTable>
      <St.TableLi>
        <St.Num>No</St.Num>
        <St.Title $view>제목</St.Title>
        <St.CommonLi>결제금액</St.CommonLi>
        <St.CommonLi>결제일자</St.CommonLi>
        <St.CommonLi>상태</St.CommonLi>
        <St.PayBtn>비고</St.PayBtn>
      </St.TableLi>
      {props.data.content.map((v: I.ReceiptList) => {
        return (
          <St.TableLi $cursor={false} key={v.userpayno}>
            <St.Num>{v.userpayno}</St.Num>
            <St.Title $view>{v.name}</St.Title>
            <St.CommonLi>{v.paidamount}원</St.CommonLi>
            <St.CommonLi>{v.paymentDate.slice(0, 10)}</St.CommonLi>
            <St.CommonLi>
              {v.status === "0" ? "결제완료" : "환불완료"}
            </St.CommonLi>
            <St.PayBtn>
              {v.status === "0" && (
                <St.Button
                  type="button"
                  $color
                  onClick={() =>
                    basketBtn(v.merchantUid, v.paidamount, v.userpayno,v.name)
                  }
                >
                  환불
                </St.Button>
              )}
              {v.receipturl && (
                <St.Button
                  type="button"
                  $color={false}
                  onClick={() => receiptBtn(v.receipturl)}
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
};
export default ReceiptTable;
