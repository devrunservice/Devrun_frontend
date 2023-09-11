/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from "react";
import * as I from "types";
import * as St from "../style";

const PointTable = (props: I.Points) => (
  <St.Table>
    <St.TableLi>
      <St.Num>No</St.Num>
      <St.PointTitle>제목</St.PointTitle>
      <St.CommonLi>날짜</St.CommonLi>
    </St.TableLi>
    {props.pointHistoryPage.content.map((v)=>{
        return (
          <St.TableLi key={v.pointno}>
            <St.Num>{v.pointno}</St.Num>
            <St.PointTitle>
              {v.productname} 강좌를 결제하셔서 <St.PointSpan $color={v.explanation === "결제시 얻은 포인트"}> 
                {v.explanation === "결제시 얻은 포인트" &&
                  `${v.pointupdown}  포인트 적립`}
                {v.explanation !== "결제시 얻은 포인트" &&
                  `${v.pointupdown}  포인트 차감`}
              </St.PointSpan> 되셨습니다.
            </St.PointTitle>
            <St.CommonLi>{v.updatetime.slice(0, 10)}</St.CommonLi>
          </St.TableLi>
        );
    })}
    
  </St.Table>
);
export default PointTable;
