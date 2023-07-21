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
      
      <St.TableLi onClick={() => navi()}>
        <St.Num>1</St.Num>
        <St.Text>23123</St.Text>
        <St.Writer>{basketBtn && 50000}</St.Writer>
        <St.Date>{basketBtn && "결제완료"}</St.Date>
        <St.View>
          {basketBtn && (
            <>
              <St.Button type="button" onClick={basketBtn}>
                환불
              </St.Button>
              <St.Button type="button">거래명세서</St.Button>
            </>
          )}
          {!basketBtn && 123}
        </St.View>
      </St.TableLi>
    </St.Table>
  );
};
export default Table;
