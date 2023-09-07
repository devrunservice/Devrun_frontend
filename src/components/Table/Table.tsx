/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "types";
import { create } from "utils/api";
import * as St from "./style";

const Table = (props: I.Table) => {
  const navigate = useNavigate();
  // const navi =()=>{ navigate("/noticeDetail");
  // }
  const toggleBtn = useCallback(
    async (code: string) => {
      await create.couponActive({ code });
      props.dataList();
    },
    [props.dataList]
  );
  console.log(props.data)
  return (
    <St.Table>
      <St.TableLi>
        <St.Num>No</St.Num>
        <St.Title $view={false}>강의명</St.Title>
        <St.CommonLi>할인률</St.CommonLi>
        <St.Title $view={false}>할인코드</St.Title>
        <St.CommonLi>발행일</St.CommonLi>
        <St.CommonLi>만료일</St.CommonLi>
        <St.CommonLi>발급된 횟수</St.CommonLi>
        <St.View $view>활성여부</St.View>
      </St.TableLi>
      {props.data.content?.map((v: I.MentoCouponlist) => {
        return (
          <St.TableLi key={v.issuedno}>
            <St.Num>{v.issuedno}</St.Num>
            <St.Title $view={false}>{v.lecturename}</St.Title>
            <St.CommonLi>{v.discountrate}%</St.CommonLi>
            <St.Title $view={false}>{v.couponcode}</St.Title>
            <St.CommonLi>{v.issueddate}</St.CommonLi>
            <St.CommonLi>{v.expirydate}</St.CommonLi>
            <St.CommonLi>{v.quantity}</St.CommonLi>
            <St.View $view>
              <St.SwitchBtn
                onClick={() => toggleBtn(v.couponcode)}
                $view={v.state === "ACTIVE" }
              >
                <St.ToggleBtn $view={v.state === "ACTIVE"} />
              </St.SwitchBtn>
            </St.View>
          </St.TableLi>
        );
      })}
      {/* <St.TableLi>
        <St.Num>No</St.Num>
        <St.Text $view={false}>제목</St.Text>
        <St.CommonLi>작성자</St.CommonLi>
        <St.CommonLi>작성일</St.CommonLi>
        <St.View $view={false}>조회수</St.View>
      </St.TableLi>
      <St.TableLi onClick={() => navi()} $cursor>
        <St.Num>asd</St.Num>
        <St.Text $view={false}>asd</St.Text>
        <St.CommonLi>asd</St.CommonLi>
        <St.CommonLi>asd</St.CommonLi>
        <St.View $view={false}>aasd</St.View>
      </St.TableLi>

      <St.TableLi $cursor={false}>
        <St.Num>No</St.Num>
        <St.Text $view>제목</St.Text>
        <St.CommonLi>asd</St.CommonLi>
        <St.CommonLi>asd</St.CommonLi>
        <St.View $view>
          <St.Button $color={false} onClick={() => navi()}>
            수료증보기
          </St.Button>
        </St.View>
      </St.TableLi> */}
    </St.Table>
  );
};
export default Table;
