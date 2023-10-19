/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useState } from "react";
import { LectureCard } from "components";
import {
  SQLIcon,
  JavaIcon,
  MobileIcon,
  CertIcon,
  GameIcon,
  JsIcon,
  NetworkIcon,
  ReactIcon,
} from "asset";
import { Swiper, SwiperSlide } from "swiper/react";
import * as St from "./style";
import "swiper/swiper.css";


const Home = () => {
  const [test, setTest] = useState([1, 2, 3,4, 1, 2, 3, 4]); 

  // html0 react0 css0 스위프트0 루비0 파이썬0 c#0 자바0 SQL0 자스0 유니티  vue
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
        <St.Section>
          <St.SectionLi>
            <St.CategoryIcon>
              <CertIcon />
            </St.CategoryIcon>
            <p># 자격증</p>
          </St.SectionLi>

          <St.SectionLi>
            <St.CategoryIcon>
              <JsIcon />
            </St.CategoryIcon>
            <p># 개발기초</p>
          </St.SectionLi>
          <St.SectionLi>
            <St.CategoryIcon>
              <ReactIcon />
            </St.CategoryIcon>
            <p># 프론트엔드</p>
          </St.SectionLi>
          <St.SectionLi>
            <St.CategoryIcon>
              <SQLIcon />
            </St.CategoryIcon>
            <p># 데이터</p>
          </St.SectionLi>
          <St.SectionLi>
            <St.CategoryIcon>
              <JavaIcon />
            </St.CategoryIcon>
            <p># 백엔드</p>
          </St.SectionLi>

          <St.SectionLi>
            <St.CategoryIcon>
              <MobileIcon />
            </St.CategoryIcon>
            <p># 모바일</p>
          </St.SectionLi>
          <St.SectionLi>
            <St.CategoryIcon>
              <NetworkIcon />
            </St.CategoryIcon>
            <p># 보안</p>
          </St.SectionLi>
          <St.SectionLi>
            <St.CategoryIcon>
              <GameIcon />
            </St.CategoryIcon>
            <p># 게임개발</p>
          </St.SectionLi>
        </St.Section>
        <St.ListEachArea>
          <St.ListTitle>학습중인 클래스</St.ListTitle>
          <St.ListUl>
            <St.Listli>
              <St.ListImg>
                <St.Img src="" alt="강의제목" />
              </St.ListImg>
              <St.ListTextBox>
                <St.ListEm>제목</St.ListEm>
                <St.ListText>
                  <span>진도율 ( 55% )</span>
                  <span>기한 : 2023-12-31</span>
                  <St.Gauge>
                    <span style={{ background: "#5F4B8B", width: "50%" }} />
                  </St.Gauge>
                </St.ListText>
              </St.ListTextBox>
            </St.Listli>
            <St.Listli>
              <St.ListImg>
                <St.Img src="" alt="강의제목" />
              </St.ListImg>
              <St.ListTextBox>
                <St.ListEm>제목</St.ListEm>
                <St.ListText>
                  <span>진도율 ( 55% )</span>
                  <span>기한 : 2023-12-31</span>
                  <St.Gauge>
                    <span style={{ background: "#5F4B8B", width: "50%" }} />
                  </St.Gauge>
                </St.ListText>
              </St.ListTextBox>
            </St.Listli>
          </St.ListUl>
        </St.ListEachArea>
        <St.ListEachArea>
          <St.ListTitle>실시간 인기 클래스</St.ListTitle>
          <St.SwiperBox>
            <Swiper spaceBetween={20} slidesPerView={4}>
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
        {/* <Swiper slidesPerView={1}>
          {test.map((list, index) => (
            <SwiperSlide key={index}>
              <SildeImg />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <St.ListEachArea>
          <St.ListTitle>추천 클래스</St.ListTitle>
          <St.SwiperBox>
            <Swiper spaceBetween={20} slidesPerView={4}>
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
      </St.MainBg>
    </>
  );
};
export default Home;
