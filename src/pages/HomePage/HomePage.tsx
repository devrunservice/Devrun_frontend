/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { LectureCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux/store";
import { Swiper, SwiperSlide } from "swiper/react";

import { useInput } from "hooks";
import * as Img from "asset";
import * as St from "./style";
import "swiper/swiper.css";
import { noticeListLoading } from "../../redux/reducer/noticeReducer";

const HomePage = () => {
  const [test, setTest] = useState([1, 2, 3, 4, 1, 2, 3, 4]);
  const [search, onSearch] = useInput("");
 
  const dispatch = useDispatch();
  const { data } = useSelector( (state: RootState) => state.noticeReducer);
  useEffect(() => {
    dispatch(noticeListLoading(1));
  }, []);
  const navigate = useNavigate();
  const navi = useCallback(
    (v: number) => {
      navigate(`/notice/${v}`);
    },
    [navigate]
  );
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
                <Img.JsIcon />
              </St.CategoryIcon>
              <p># 개발기초</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <Img.ReactIcon />
              </St.CategoryIcon>
              <p># 프론트엔드</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <Img.SQLIcon />
              </St.CategoryIcon>
              <p># 데이터</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <Img.JavaIcon />
              </St.CategoryIcon>
              <p># 백엔드</p>
            </St.SectionLi>

            <St.SectionLi>
              <St.CategoryIcon>
                <Img.MobileIcon />
              </St.CategoryIcon>
              <p># 모바일</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <Img.ScureIcon />
              </St.CategoryIcon>
              <p># 보안</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <Img.GameIcon />
              </St.CategoryIcon>
              <p># 게임개발</p>
            </St.SectionLi>

            <St.SectionLi>
              <St.CategoryIcon>
                <Img.DevIcon />
              </St.CategoryIcon>
              <p># 데프옵스</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <Img.AIIcon />
              </St.CategoryIcon>
              <p># AI</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <Img.BlockIcon />
              </St.CategoryIcon>
              <p># 블록체인</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <Img.CertIcon />
              </St.CategoryIcon>
              <p># 자격증</p>
            </St.SectionLi>
            <St.SectionLi>
              <St.CategoryIcon>
                <Img.TestIcon />
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
                    <LectureCard  />
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
                    <LectureCard />
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
            {data.content.slice(0,3).map((v)=>{
              return (
                <St.NoticeRightLi
                  key={v.noticeNo}
                  onClick={() => navi(v.noticeNo)}
                >
                  <p>{v.title}</p>
                  <span>
                    {v.createdDate.slice(0, 10)} <St.Arr />
                  </span>
                </St.NoticeRightLi>
              );
            })}
           
          </St.NoticeRightUl>
        </St.Notice>
      </St.NoticeBg>
    </>
  );
};
export default HomePage;
