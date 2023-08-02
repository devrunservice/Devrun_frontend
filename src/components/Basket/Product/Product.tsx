import React, { ChangeEvent } from "react";
import NoImg from "asset/images/NoImg.jpg";
import { basketProduct } from "types";
import * as St from "./style";

const Product = (props: basketProduct) => (
  <St.ProductLi key={props.item.id}>
    <St.CheckBox
      type="checkbox"
      name={`select${props.item.id}`}
      id={`select${props.item.id}`}
      checked={props.isChecked}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        props.singleCheack(
          e.target.checked,
          props.item.id,
          props.item.name,
          props.item.paid_amount,
        )
      }
    />
    <St.ContentBox htmlFor={`select${props.item.id}`}>
      <St.ImgWrap>
        <St.Img src={NoImg} alt="" />
      </St.ImgWrap>
      <St.TextBox>
        <St.TextLeft>
          <St.TitleText>성대</St.TitleText>
          <St.SubText>유라니 남친</St.SubText>
          <St.Writer>
            강사명 · <St.Hours>무제한 수강</St.Hours>
          </St.Writer>
        </St.TextLeft>
        <St.TextRight>
          <St.Discount>25%</St.Discount>
          <St.DiscountNum>88,000원</St.DiscountNum>
          <St.Money>66,000원</St.Money>
        </St.TextRight>
      </St.TextBox>
    </St.ContentBox>
  </St.ProductLi>
);
export default Product