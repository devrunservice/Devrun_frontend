/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "types";
import * as St from "../style";

const NoticeTable = (props: I.NoticesTabel) => {
  const navigate = useNavigate();
  const navi = useCallback(
    (v: number) => {
      navigate(`/notice/${v}`);
    },
    [navigate]
  );
  return (
    <St.Table>
      <St.TableLi>
        <St.Num>No</St.Num>
        <St.Text>제목</St.Text>
        <St.CommonLi>작성자</St.CommonLi>
        <St.CommonLi>작성일</St.CommonLi>
        <St.View>조회수</St.View>
      </St.TableLi>
      {props.data.content.map((v) => {
        return (
          <St.TableLi onClick={() => navi(v.noticeNo)} $cursor key={v.noticeNo}>
            <St.Num>{v.noticeNo}</St.Num>
            <St.Text $view={false}>{v.title}</St.Text>
            <St.CommonLi>{v.id}</St.CommonLi>
            <St.CommonLi>{v.createdDate.slice(0, 10)}</St.CommonLi>
            <St.View $view={false}>{v.viewCount}</St.View>
          </St.TableLi>
        );
      })}
    </St.Table>
  );
};
export default NoticeTable;
