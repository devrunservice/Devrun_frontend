/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "types";
import * as St from "../style";

const CertTable = (props: I.Table) => {
  const navigate = useNavigate();
  const navi = useCallback(() => {
    navigate("/CertDetail");
  }, []);
  return (
    <St.Table>
      <St.TableLi $cursor={false}>
        <St.Num>No</St.Num>
        <St.Text $view>제목</St.Text>
        <St.CommonLi>상태</St.CommonLi>
        <St.CommonLi>수료일</St.CommonLi>
        <St.View $view>비고</St.View>
      </St.TableLi>

      <St.TableLi $cursor={false}>
        <St.Num>No</St.Num>
        <St.Text $view>제목</St.Text>
        <St.CommonLi>수료여부</St.CommonLi>
        <St.CommonLi>수료일</St.CommonLi>
        <St.View $view>
          <St.Button $color={false} onClick={() => navi()}>
            수료증보기
          </St.Button>
        </St.View>
      </St.TableLi>
    </St.Table>
  );
};
export default CertTable;
