import React, { useState } from "react";
import LectureCard from "components/LectureCard/LectureCard";
// import { ListWrap } from "components/Home/style";
import { HeartFill, Link/* , Circle, MoreBtn */ } from "asset";
import DetailCurriculum from "components/DetailCurriculum/DetailCurriculum";
import DetailComment from "components/DetailComment/DetailComment"
import { Swiper, SwiperSlide } from "swiper/react";
import * as St from "./style";
import "swiper/swiper.css";

const Detail = () => {
  const [test, setTest] = useState([1, 2, 34, 1, 2, 3, 4]); // eslint-disable-line
  const [category, setCategory] = useState(1)
  const changeCategory = (num:number) => {
    setCategory(num)
  }
  return (
    <St.DetailWrap>
      <St.PreviewArea>
        <St.DetailThum>
          아무래도 여기는 강의 썸네일이 들어가고 재생버튼을 가운데 둬야
          할듯합니다. 재생버튼 클릭하면 미리보기 시작
        </St.DetailThum>
        <St.DetailInfo>
          <St.DetailInfoTitle>제목들어갈곳</St.DetailInfoTitle>
          <St.DetailUtils>
            <St.DetailUtilsItem>카테고리</St.DetailUtilsItem>
            <St.DetailUtilsItem>강사명</St.DetailUtilsItem>
            <St.DetailUtilsItem>
              <HeartFill /> 2
            </St.DetailUtilsItem>
            <St.DetailUtilsItem>
              <Link href="/" />
              공유하기
            </St.DetailUtilsItem>
          </St.DetailUtils>

          <St.ShortSpacer />

          <St.DetailHashWrap>
            <St.DetailHash>#</St.DetailHash>
            <St.DetailHash>#</St.DetailHash>
            <St.DetailHash>#</St.DetailHash>
          </St.DetailHashWrap>
        </St.DetailInfo>
      </St.PreviewArea>

      <St.DetailMainWrap>
        <St.DetailTab>
          {/* <St.DetailTabItem>카테고리</St.DetailTabItem> */}
          <St.DetailTabItem style={{fontWeight: category === 1 ? 'bold' : 'normal'}} onClick={()=>changeCategory(1)}>커리큘럼</St.DetailTabItem>
          <St.DetailTabItem style={{fontWeight: category === 2 ? 'bold' : 'normal'}} onClick={()=>changeCategory(2)}>수강평</St.DetailTabItem>
          {/* <St.DetailTabItem>질의응답</St.DetailTabItem> */}
          {/* <St.DetailTabItem>수강전 문의</St.DetailTabItem> */}
        </St.DetailTab>
        {
          category === 1 ? <DetailCurriculum /> : <DetailComment />
        }
        <St.SectionAreaWrap>
          <St.SectionTitle>다른 강의 함께 보기</St.SectionTitle>
          <Swiper spaceBetween={20} slidesPerView={4}>
            <St.ListWrap>
              {test.map((list, index) => (
                <SwiperSlide key={index}>
                  <LectureCard />
                </SwiperSlide>
              ))}
            </St.ListWrap>
          </Swiper>
        </St.SectionAreaWrap>
      </St.DetailMainWrap>
    </St.DetailWrap>
  );
};

export default Detail;
