/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "types";
import * as St from "../style";

const NoticeTable = (props: I.Table) => {
  const navigate = useNavigate();
  const navi = useCallback(() => {
    navigate("/noticeDetail");
  }, []);
  return (
    <St.Table>
      <St.TableLi onClick={() => navi()} $cursor>
        <St.Num>No</St.Num>
        <St.Text $view={false}>제목</St.Text>
        <St.CommonLi>작성자</St.CommonLi>
        <St.CommonLi>작성일</St.CommonLi>
        <St.View $view={false}>조회수</St.View>
      </St.TableLi>
    </St.Table>
  );
};
export default NoticeTable;
