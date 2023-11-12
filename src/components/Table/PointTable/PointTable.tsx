/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import * as St from "../style";


interface point {
  data: {
    updatetime: string;
    pointupdown: number;
    pointno: number;
    explanation: string;
    productname: string;
  }[];
}

const PointTable = ({data}: point) => (
  <St.Table>
    <St.TableLi>
      <St.Num>No</St.Num>
      <St.PointTitle>제목</St.PointTitle>
      <St.CommonLi>날짜</St.CommonLi>
    </St.TableLi>
    {data?.map((v) => {
      return (
        <St.TableLi key={v.pointno}>
          <St.Num>{v.pointno}</St.Num>
          <St.PointTitle>
            {v.explanation === "결제시 얻은 포인트" && (
              <>
                {v.productname} 강좌를 결제하셔서{" "}
                <St.PointSpan $color={v.explanation === "결제시 얻은 포인트"}>
                  {v.pointupdown}
                </St.PointSpan>{" "}
                포인트 적립되셨습니다.
              </>
            )}
            {v.explanation === "환불 처리 포인트 회수" && (
              <>
                {v.productname} 강좌를 환불하셔서{" "}
                <St.PointSpan $color={false}>{v.pointupdown}</St.PointSpan>{" "}
                포인트 차감되셨습니다.
              </>
            )}
            {v.explanation === "결제시 사용한 포인트" && (
              <>
                {v.productname} 강좌 결제시 포인트를 사용하셔서{" "}
                <St.PointSpan $color={false}>{v.pointupdown}</St.PointSpan>{" "}
                포인트 차감되셨습니다.
              </>
            )}
           
          </St.PointTitle>
          <St.CommonLi>{v.updatetime.slice(0, 10)}</St.CommonLi>
        </St.TableLi>
      );
    })}
  </St.Table>
);
export default PointTable;
