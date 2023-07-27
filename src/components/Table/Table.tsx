import React from "react";
import { useNavigate } from "react-router-dom";
import { ITable } from "types";
import * as St from "./style";

const Table = (props: ITable) => {
  const navigate = useNavigate();
  const navi = () => {
    if (props.notice) navigate(props.notice);
    if (props.popupBtn) props.popupBtn();
  };
  return (
    <St.Table>
      {props.basketBtn ? (
        <St.TableLi cursor={false}>
          <St.Num>{props.num}</St.Num>
          <St.Title>{props.title}</St.Title>
          <St.CommonLi>{props.pay}</St.CommonLi>
          <St.CommonLi>{props.payment ? "환불완료" : "결제완료"}</St.CommonLi>
          <St.PayBtn>
            <St.Button type="button" onClick={props.basketBtn} color>
              환불
            </St.Button>
            <St.Button type="button" color={false}>
              거래명세서
            </St.Button>
          </St.PayBtn>
        </St.TableLi>
      ) : (
        <St.TableLi onClick={() => navi()} cursor>
          <St.Num>{props.num}</St.Num>
          <St.Text>{props.title}</St.Text>
          <St.CommonLi>{props.name}</St.CommonLi>
          <St.CommonLi>{props.date}</St.CommonLi>
          <St.View>{props.view}</St.View>
        </St.TableLi>
      )}
    </St.Table>
  );
};
export default Table;
