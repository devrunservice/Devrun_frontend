import React, { useState } from "react";
import { LectureCard } from "components";
import { SildeImg } from "asset";
import { Swiper, SwiperSlide } from "swiper/react";

import * as St from "./style";
import "swiper/swiper.css";

const Home = () => {
  const [test, setTest] = useState([1, 2, 34, 1, 2, 3, 4]); // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <>
      <St.EventBanner>
        <Swiper slidesPerView={1}>
          {test.map((list, index) => (
            <SwiperSlide key={index}>
              <St.FullWidthImg />
            </SwiperSlide>
          ))}
        </Swiper>
      </St.EventBanner>
      <St.MainBg>
        <St.ListEachArea>
          <St.ListTitle>실시간 인기 클래스</St.ListTitle>
          <St.SwiperBox>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
            >
              <St.ListWrap>
                {test.map((list, index) => (
                  <SwiperSlide key={index}>
                    <LectureCard category="home" />
                  </SwiperSlide>
                ))}
              </St.ListWrap>
            </Swiper>
          </St.SwiperBox>
        </St.ListEachArea>

        {/* onSlideChange={() => console.log('slide change')} */}
        {/* onSwiper={(swiper) => console.log(swiper)} */}
        <Swiper slidesPerView={1}>
          {test.map((list, index) => (
            <SwiperSlide key={index}>
              <SildeImg style={{ margin: "30px 0 60px" }} />
            </SwiperSlide>
          ))}
        </Swiper>

        <St.ListEachArea>
          <St.ListTitle>추천 클래스</St.ListTitle>
          <St.SwiperBox>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
            >
              <St.ListWrap>
                {test.map((list, index) => (
                  <SwiperSlide key={index}>
                    <LectureCard category="home" />
                  </SwiperSlide>
                ))}
              </St.ListWrap>
            </Swiper>
          </St.SwiperBox>
        </St.ListEachArea>

        <St.ListEachArea>
          <St.ListTitle>찾고 있는 클래스가 있나요?</St.ListTitle>
          <St.RecommendClassWrap>
            <St.RecommendClass>HTML/CSS</St.RecommendClass>
            <St.RecommendClass>Javascript</St.RecommendClass>
            <St.RecommendClass>React</St.RecommendClass>
            <St.RecommendClass>Spring</St.RecommendClass>
            <St.RecommendClass>Node.js</St.RecommendClass>
            <St.RecommendClass>Java</St.RecommendClass>
            <St.RecommendClass>Python</St.RecommendClass>
            <St.RecommendClass>Vue.js</St.RecommendClass>
            <St.RecommendClass>JQuery</St.RecommendClass>
            <St.RecommendClass>Spring Boot</St.RecommendClass>
            <St.RecommendClass>Django</St.RecommendClass>
            <St.RecommendClass>웹엡</St.RecommendClass>
          </St.RecommendClassWrap>
        </St.ListEachArea>
      </St.MainBg>
    </>
  );
};
export default Home;
