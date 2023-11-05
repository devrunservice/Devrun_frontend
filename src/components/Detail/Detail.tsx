import React, { useState } from "react";
import LectureCard from "components/LectureCard/LectureCard";
import { HeartFill, Link/* , Circle, MoreBtn */ } from "asset";
import Curriculum from "components/Curriculum/Curriculum";
import { Swiper, SwiperSlide } from "swiper/react";
import * as St from "./style";
import "swiper/swiper.css";

const Detail = () => {
  const [test, setTest] = useState([1, 2, 34, 1, 2, 3, 4]); // eslint-disable-line
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
          <St.DetailTabItem>커리큘럼</St.DetailTabItem>
          <St.DetailTabItem>수강평</St.DetailTabItem>
          {/* <St.DetailTabItem>질의응답</St.DetailTabItem> */}
          {/* <St.DetailTabItem>수강전 문의</St.DetailTabItem> */}
        </St.DetailTab>

        <div>여기 컴포넌트로 나눠야할듯</div>

        <St.DraftArea>에디터영역</St.DraftArea>
        <St.SectionAreaWrap>
          <St.SectionTitle>커리큘럼</St.SectionTitle>
          <ul>
            <Curriculum />
            <Curriculum />
            <Curriculum />
          </ul>
        </St.SectionAreaWrap>

        {/* <St.SectionAreaWrap>
          <St.SectionTitle>수강평</St.SectionTitle>
          <St.ReviewCreateArea>
            <textarea placeholder="수강평을 작성해 주세요." />
            <St.ReviewCreateBtnArea>
              <span>0 / 300</span>
              <St.ReviewCancelBtn>취소</St.ReviewCancelBtn>
              <St.ReviewCreateBtn>등록</St.ReviewCreateBtn>
            </St.ReviewCreateBtnArea>

            <St.CommentList>
              <St.CommentInfoWrap>
                <div>
                  <Circle />
                  <span>작성자명</span>
                </div>
                <span>
                  <MoreBtn />
                </span>
              </St.CommentInfoWrap>
              <St.CommentArea>
                댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성
              </St.CommentArea>
              <St.CommentUtils>
                <div>
                  <HeartFill />
                  <span>2</span>
                </div>
                <St.CommentTime>
                  2023.05.15 · <St.RecommentBtb>답글 작성</St.RecommentBtb>
                </St.CommentTime>
              </St.CommentUtils>

              <St.RecommentList>
                <St.CommentInfoWrap>
                  <div>
                    <Circle />
                    <span>작성자명</span>
                  </div>
                  <span>
                    <MoreBtn />
                  </span>
                </St.CommentInfoWrap>
                <St.CommentArea>
                  댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성
                </St.CommentArea>
                <St.CommentUtils>
                  <div>
                    <HeartFill />
                    <span>2</span>
                  </div>
                  <St.CommentTime>2023.05.15</St.CommentTime>
                </St.CommentUtils>
              </St.RecommentList>
            </St.CommentList>
            <St.CommentList>
              <St.CommentInfoWrap>
                <div>
                  <Circle />
                  <span>작성자명</span>
                </div>
                <span>
                  <MoreBtn />
                </span>
              </St.CommentInfoWrap>
              <St.CommentArea>
                댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성
              </St.CommentArea>
              <St.CommentUtils>
                <div>
                  <HeartFill />
                  <span>2</span>
                </div>
                <St.CommentTime>
                  2023.05.15 · <St.RecommentBtb>답글 작성</St.RecommentBtb>
                </St.CommentTime>
              </St.CommentUtils>

              <St.RecommentList>
                <St.CommentInfoWrap>
                  <div>
                    <Circle />
                    <span>작성자명</span>
                  </div>
                  <span>
                    <MoreBtn />
                  </span>
                </St.CommentInfoWrap>
                <St.CommentArea>
                  댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성
                </St.CommentArea>
                <St.CommentUtils>
                  <div>
                    <HeartFill />
                    <span>2</span>
                  </div>
                  <St.CommentTime>2023.05.15</St.CommentTime>
                </St.CommentUtils>
              </St.RecommentList>
            </St.CommentList>
            <St.CommentList>
              <St.CommentInfoWrap>
                <div>
                  <Circle />
                  <span>작성자명</span>
                </div>
                <span>
                  <MoreBtn />
                </span>
              </St.CommentInfoWrap>
              <St.CommentArea>
                댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성
              </St.CommentArea>
              <St.CommentUtils>
                <div>
                  <HeartFill />
                  <span>2</span>
                </div>
                <St.CommentTime>
                  2023.05.15 · <St.RecommentBtb>답글 작성</St.RecommentBtb>
                </St.CommentTime>
              </St.CommentUtils>

              <St.RecommentList>
                <St.CommentInfoWrap>
                  <div>
                    <Circle />
                    <span>작성자명</span>
                  </div>
                  <span>
                    <MoreBtn />
                  </span>
                </St.CommentInfoWrap>
                <St.CommentArea>
                  댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성댓글작성
                </St.CommentArea>
                <St.CommentUtils>
                  <div>
                    <HeartFill />
                    <span>2</span>
                  </div>
                  <St.CommentTime>2023.05.15</St.CommentTime>
                </St.CommentUtils>
              </St.RecommentList>
            </St.CommentList>
            <St.MoreLectureBtn>수강평 더보기</St.MoreLectureBtn>
          </St.ReviewCreateArea>
        </St.SectionAreaWrap> */}
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
