/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as I from "types";
import * as St from "../style";
import {
  couponActiveLoading,
} from "../../../redux/reducer/mentoCouponReducer";

const Table = (props: I.MentoCoupons) => {
  const dispatch = useDispatch();

  const toggleBtn = useCallback((code: string, index: number) => {
    dispatch(couponActiveLoading({ code, index }));
  }, []);
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
      {props.data.content?.map((v: I.MentoCouponlist, index) => {
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
                onClick={() => toggleBtn(v.couponcode, index)}
                $view={v.state === "ACTIVE"}
              >
                <St.ToggleBtn $view={v.state === "ACTIVE"} />
              </St.SwitchBtn>
            </St.View>
          </St.TableLi>
        );
      })}
    </St.Table>
  );
};
export default Table;