import React from "react";
import { useNavigate } from "react-router-dom";
import { ITable } from "types";
import * as St from "./style";

const Table = ({ notice, basketBtn }: ITable) => {
  const navigate = useNavigate();
  const navi = () => {
    if (notice) {
      navigate(notice);
    }
  };
  return (
    <St.Table>
      {basketBtn ? (
        <St.TableLi onClick={() => navi()}>
          <St.Num>1</St.Num>
          <St.Title>23123</St.Title>
          <St.CommonLi>50000</St.CommonLi>
          <St.CommonLi>결제완료</St.CommonLi>
          <St.PayBtn>
            <St.Button type="button" onClick={basketBtn}>
              환불
            </St.Button>
            <St.Button type="button">거래명세서</St.Button>
          </St.PayBtn>
        </St.TableLi>
      ):(
        <St.TableLi onClick={() => navi()}>
          <St.Num>1</St.Num>
          <St.Text>23123</St.Text>
          <St.CommonLi>사람이름</St.CommonLi>
          <St.CommonLi>2023.07.21</St.CommonLi>
          <St.View>123</St.View>
        </St.TableLi>
      )}
    </St.Table>
  );
};
export default Table;
