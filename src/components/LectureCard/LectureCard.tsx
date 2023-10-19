/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import * as St from "./style";

interface LectureCardType {
  key?: number;
  title?: string;
  category: string;
  progress?: number;
}
const LectureCard = ({ category, title, progress }: LectureCardType) => {
  const priceDot = (num: number) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <St.List>
      <St.ListThumbnail />
      <St.ListTextArea>
        <St.ListTitle>
          제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다
        </St.ListTitle>
        {category === "dashboard" && (
          <>
            <St.Progress>
              <p>진도율</p>
              <div>
                <St.Star />
                <St.ListViewCount>2.8</St.ListViewCount>
              </div>
            </St.Progress>
            <div>{progress}</div>
          </>
        )}
        {category === "detail" ||
          (category === "home" && (
            <>
              <St.ListText>
                <St.ListTeacher>
                  강사명
                  <span>
                    <St.Star />
                    2.8
                  </span>
                </St.ListTeacher>
                <St.Price>
                  <span>{priceDot(500)}</span>원
                </St.Price>
              </St.ListText>
              <St.ListViewCount>카테고리명</St.ListViewCount>
              <St.ListViewCount>550명 수강</St.ListViewCount>
            </>
          ))}
      </St.ListTextArea>
    </St.List>
  );
};

export default LectureCard;
