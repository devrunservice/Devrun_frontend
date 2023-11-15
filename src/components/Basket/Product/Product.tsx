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
    lectureName: string,
    lectureIntro: string,
    lecturePrice: number,
    lectureThumbnail: string,
    lectureId: number,
  ) => void;
}

const Product = ({ name, item, dis, checked, singleCheck }: basketProduct) => {
  const priceDot = (num: number) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <St.ProductLi>
      <St.CheckBox
        type="checkbox"
        name={`${item.lectureName}`}
        id={`${item.lectureName}`}
        checked={checked}
        onChange={() =>
          singleCheck(
            item.lectureName,
            item.lectureIntro,
            item.lecturePrice,
            item.lectureThumbnail,
            item.lectureId
          )
        }
      />
      <St.ContentBox htmlFor={`${item.lectureName}`}>
        <St.ImgWrap>
          <St.Img src={item.lectureThumbnail} alt="" />
        </St.ImgWrap>
        <St.TextBox>
          <St.TextLeft>
            <St.TitleText>{item.lectureName}</St.TitleText>
            <St.SubText>{item.lectureIntro}</St.SubText>
            <St.Writer>
              강사명 · <St.Hours>무제한 수강</St.Hours>
            </St.Writer>
          </St.TextLeft>
          <St.TextRight>
            {item.lectureName === name ? (
              <>
                <St.Discount>{dis}%</St.Discount>
                <St.DiscountNum>{priceDot(item.lecturePrice)}원</St.DiscountNum>
                <St.Money>
                  {priceDot(
                    item.lecturePrice - (item.lecturePrice * dis) / 100
                  )}
                  원
                </St.Money>
              </>
            ) : (
              <St.Money>{priceDot(item.lecturePrice)}원</St.Money>
            )}
          </St.TextRight>
        </St.TextBox>
      </St.ContentBox>
    </St.ProductLi>
  );
}
  


export default Product;
