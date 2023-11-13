/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./style";

interface LectureData {
  lectureBigCategory: string;
  lectureName: string;
  lectureIntro: string;
  lectureThumbnail: string;
  lectureMidCategory: string;
  mentoId: string;
  lectureprice: number;
  buycount: number;
  rating: number;
  lectureId:number
}

const LectureCard = ({
  lectureBigCategory,
  lectureName,
  lectureIntro,
  lectureThumbnail,
  lectureMidCategory,
  mentoId,
  lectureprice,
  buycount,
  rating,
  lectureId
}: LectureData) => {
  const priceDot = (num: number) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const navi = useNavigate()

  return (
    <St.List onClick={() => navi(`/lectures/${lectureId}`)}>
      <St.ListThumbnail>
        <St.ListThumbnailImg src={lectureThumbnail} alt={lectureIntro} />
      </St.ListThumbnail>
      <div>
        <St.ListTitle>{lectureName}</St.ListTitle>
        <St.ListText>
          <St.ListTeacher>
            {mentoId}
            <span>
              <St.Star />
              {rating}
            </span>
          </St.ListTeacher>
          <St.Price>
            <span>{priceDot(lectureprice)}</span>원
          </St.Price>
        </St.ListText>
        <St.ListViewCount>{lectureBigCategory}</St.ListViewCount>
        <St.ListViewCount>{lectureMidCategory}</St.ListViewCount>
        {buycount === 0 ? (
          ""
        ) : (
          <St.ListViewCount>{priceDot(buycount)}명 수강</St.ListViewCount>
        )}
      </div>
    </St.List>
  );
};

export default LectureCard;
