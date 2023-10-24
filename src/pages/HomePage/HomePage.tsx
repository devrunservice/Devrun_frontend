/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, ChangeEvent } from "react";
import { LectureCard } from "components";
import { useInput } from "hooks";
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

const HomePage = () => {
  const [test, setTest] = useState([1, 2, 3, 4, 1, 2, 3, 4]);
  const [search, onSearch] = useInput("");
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
          <St.SearchTitle>원하시는 강의를 찾아보세요!</St.SearchTitle>
          <St.SearchBox>
            <St.SearchInput
              type="text"
              onChange={onSearch}
              value={search}
              placeholder="찾고 싶은 강의 주제를 입력해주세요"
              id="search"
            />
            <label htmlFor="search">
              <St.SearchIcon />
            </label>
          </St.SearchBox>
          <St.Section>
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

            <St.SectionLi>
              <St.CategoryIcon>
                <GameIcon />
              </St.CategoryIcon>
              <p># 데프옵스</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <GameIcon />
              </St.CategoryIcon>
              <p># AI</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <GameIcon />
              </St.CategoryIcon>
              <p># 블록체인</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <CertIcon />
              </St.CategoryIcon>
              <p># 자격증</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <NetworkIcon />
              </St.CategoryIcon>
              <p># 코딩테스트</p>
            </St.SectionLi>
          </St.Section>
        </St.ListEachArea>
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
      <St.NoticeBg>
        <St.Notice>
          <St.NoticeLeft>공지사항</St.NoticeLeft>
          <St.NoticeRightUl>
            <St.NoticeRightLi>
              <p>제목</p>
              <span>
                2023-10-13 <St.Arr />
              </span>
            </St.NoticeRightLi>
            <St.NoticeRightLi>
              <p>제목</p>
              <span>
                2023-10-13 <St.Arr />
              </span>
            </St.NoticeRightLi>
            <St.NoticeRightLi>
              <p>제목</p>
              <span>
                2023-10-13 <St.Arr />
              </span>
            </St.NoticeRightLi>
          </St.NoticeRightUl>
        </St.Notice>
      </St.NoticeBg>
    </>
  );
};
export default HomePage;
