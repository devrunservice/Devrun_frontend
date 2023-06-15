import styled from "styled-components";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SubAdv1 } from "asset";
import MainEvent from "./MainEvent";
import LectureCard from "components/LectureCard/LectureCard";
const Main = () => {
  const [num, setNum] = useState([1, 2, 34, 1, 2, 3, 4, 5, 6, 77, 8, 8]);
  return (
    <>
      <MainEvent />
      <MainBg>
        <ListEachArea>
          <ListTitle>실시간 인기 클래스</ListTitle>
          <SwiperBox>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <ListWrap>
                {num.map((list, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <LectureCard />
                    </SwiperSlide>
                  );
                })}
              </ListWrap>
            </Swiper>
          </SwiperBox>
        </ListEachArea>
        <SubAdv1 style={{ margin: "60px 0" }} />

        <ListEachArea>
          <ListTitle>추천 클래스</ListTitle>
          <SwiperBox>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <ListWrap>
                {num.map((list, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <LectureCard />
                    </SwiperSlide>
                  );
                })}
              </ListWrap>
            </Swiper>
          </SwiperBox>
        </ListEachArea>

        <ListEachArea>
          <ListTitle>찾고 있는 클래스가 있나요?</ListTitle>
          <RecommendClassWrap>
            <RecommendClass>HTML/CSS</RecommendClass>
            <RecommendClass>Javascript</RecommendClass>
            <RecommendClass>React</RecommendClass>
            <RecommendClass>Spring</RecommendClass>
            <RecommendClass>Node.js</RecommendClass>
            <RecommendClass>Java</RecommendClass>
            <RecommendClass>Python</RecommendClass>
            <RecommendClass>Vue.js</RecommendClass>
            <RecommendClass>JQuery</RecommendClass>
            <RecommendClass>Spring Boot</RecommendClass>
            <RecommendClass>Django</RecommendClass>
            <RecommendClass>웹엡</RecommendClass>
          </RecommendClassWrap>
        </ListEachArea>
      </MainBg>
    </>
  );
};

const MainBg = styled.div`
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  background: ${(props) => props.color};
`;
const SwiperBox = styled.div`
  border: 1px solid yellow;
`;
const ListWrap = styled.div`
  display: grid;
  align-items: center;
`;
const ListTitle = styled.h3`
  color: ${(props) => props.theme.textBlack};
  font-weight: ${(props) => props.theme.fontSemiBold};
  font-size: ${(props) => props.theme.fontSize18px};
  margin-bottom: 20px;
`;
const ListEachArea = styled.div`
  margin-bottom: 30px;
`;
const RecommendClassWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 18px;
`;
const RecommendClass = styled.li`
  background: ${(props) => props.theme.bgGrayColor};
  color: ${(props) => props.theme.textBlack};
  list-style: none;
  font-size: ${(props) => props.theme.fontSize16px};
  font-weight: ${(props) => props.theme.fontSemiBold};
  text-align: center;
  border-radius: 10px;
  padding: 18px 0;
  &:hover {
    background: ${(props) => props.theme.mainColor};
    color: #fff;
  }
`;

export default Main;
