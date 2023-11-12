/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { LectureInfoList } from "types";
import * as St from "./style";

interface basketProduct {
  name: string;
  item: LectureInfoList;
  dis: number;
  checked: boolean;
  singleCheck: (
    lecture_name: string,
    lecture_intro: string,
    lecture_price: number,
    lecture_thumbnail: string
  ) => void;
}

const Product = ({ name, item, dis, checked, singleCheck }: basketProduct) => {
  const priceDot = (num: number) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <St.ProductLi>
      <St.CheckBox
        type="checkbox"
        name={`${item.lecture_name}`}
        id={`${item.lecture_name}`}
        checked={checked}
        onChange={() =>
          singleCheck(
            item.lecture_name,
            item.lecture_intro,
            item.lecture_price,
            item.lecture_thumbnail
          )
        }
      />
      <St.ContentBox htmlFor={`${item.lecture_name}`}>
        <St.ImgWrap>
          <St.Img src={item.lecture_thumbnail} alt="" />
        </St.ImgWrap>
        <St.TextBox>
          <St.TextLeft>
            <St.TitleText>{item.lecture_name}</St.TitleText>
            <St.SubText>{item.lecture_intro}</St.SubText>
            <St.Writer>
              강사명 · <St.Hours>무제한 수강</St.Hours>
            </St.Writer>
          </St.TextLeft>
          <St.TextRight>
            {item.lecture_name === name ? (
              <>
                <St.Discount>{dis}%</St.Discount>
                <St.DiscountNum>
                  {priceDot(item.lecture_price)}원
                </St.DiscountNum>
                <St.Money>
                  {priceDot(
                    item.lecture_price - (item.lecture_price * dis) / 100
                  )}
                  원
                </St.Money>
              </>
            ) : (
              <St.Money>{priceDot(item.lecture_price)}원</St.Money>
            )}
          </St.TextRight>
        </St.TextBox>
      </St.ContentBox>
    </St.ProductLi>
  );
}
  


export default Product;
