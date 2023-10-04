/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import * as I from "types";
import * as St from "./style";

const Product = (props: I.basketProduct) => (
  <St.ProductLi>
    <St.CheckBox
      type="checkbox"
      name={`${props.item.lecture_name}`}
      id={`${props.item.lecture_name}`}
      checked={props.checked}
      onChange={() =>
        props.singleCheck(
          props.item.lecture_name,
          props.item.lecture_intro,
          props.item.lecture_price,
          props.item.lecture_thumbnail
        )
      }
    />
    <St.ContentBox htmlFor={`${props.item.lecture_name}`}>
      <St.ImgWrap>
        <St.Img src={props.item.lecture_thumbnail} alt="" />
      </St.ImgWrap>
      <St.TextBox>
        <St.TextLeft>
          <St.TitleText>{props.item.lecture_name}</St.TitleText>
          <St.SubText>{props.item.lecture_intro}</St.SubText>
          <St.Writer>
            강사명 · <St.Hours>무제한 수강</St.Hours>
          </St.Writer>
        </St.TextLeft>
        <St.TextRight>
          {props.item.lecture_name === props.name ? (
            <>
              <St.Discount>{props.dis}%</St.Discount>
              <St.DiscountNum>{props.item.lecture_price}원</St.DiscountNum>
              <St.Money>
                {props.item.lecture_price -
                  (props.item.lecture_price * props.dis) / 100}
                원
              </St.Money>
            </>
          ) : (
            <St.Money>{props.item.lecture_price}원</St.Money>
          )}
        </St.TextRight>
      </St.TextBox>
    </St.ContentBox>
  </St.ProductLi>
);

export default Product;
