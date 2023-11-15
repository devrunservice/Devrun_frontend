/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { LectureCard, MainCategory } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { mypage } from "utils/api";
import { getCookie } from "utils/cookies";
import { useInput } from "hooks";
import * as Img from "asset";
import * as St from "./style";
import "swiper/swiper.css";
import { noticeListLoading } from "../../redux/reducer/noticeReducer";
import {
  learningLoading
} from "../../redux/reducer/dashboardReducer";
import {
  categorySearchLoading,
  ratingLectureLoading,
  buyLectureLoading,
} from "../../redux/reducer/learningReducer";


const HomePage = () => {
  const [test, setTest] = useState([1, 2, 3, 4, 1, 2, 3, 4]);
  const [search, onSearch,setSearch] = useInput("");
 
  const dispatch = useDispatch();
  const { data,loading:noticeLoading } = useSelector( (state: RootState) => state.noticeReducer);
  const { learningData, loading: dashboardLoading } = useSelector(
    (state: RootState) => state.dashboardReducer
  );
  const {
    lecture: buy,
    data: rating,
    loading: learnLoading,
  } = useSelector((state: RootState) => state.learningReducer);
  
  useEffect(() => {
    dispatch(noticeListLoading(1));
    dispatch(ratingLectureLoading({ order: "lecture_rating" }));
    dispatch(buyLectureLoading({ order: "buy_count" }));
    if (getCookie("accessToken")) {
     dispatch(learningLoading({ page: "1", status: "all" }));
    }
  }, []);
  const navigate = useNavigate();

  const searchBtn = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (search.trim === "") return alert("검색어를 적어주세요")
     dispatch(
       categorySearchLoading({
         page: 1,
         bigcategory: "",
         order: "lecture_start",
         q: search,
       })
     );
     navigate(`/lecture/${search}`);
     setSearch("")
  }
  const handleClick = async (id:number) => {
    const response = await mypage.getVideoId(id);
    navigate(`/videoView/${id}/${response.data}`);
  };
  if (noticeLoading || learnLoading || dashboardLoading) return <div>asd</div>;
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
            <St.SearchBox onSubmit={searchBtn}>
              <St.SearchInput
                type="text"
                onChange={onSearch}
                value={search}
                placeholder="찾고 싶은 강의 주제를 입력해주세요"
              />
              <button>
                <St.SearchIcon />
              </button>
            </St.SearchBox>
            <St.Section>
              <MainCategory
                icon={<Img.JsIcon />}
                label="# 개발기초"
                location="개발기초"
              />
              <MainCategory
                icon={<Img.ReactIcon />}
                label="# 프론트엔드"
                location="프론트엔드"
              />
              <MainCategory
                icon={<Img.SQLIcon />}
                label="# 데이터"
                location="데이터"
              />
              <MainCategory
                icon={<Img.JavaIcon />}
                label="# 백엔드"
                location="백엔드"
              />
              <MainCategory
                icon={<Img.MobileIcon />}
                label="# 모바일"
                location="모바일"
              />
              <MainCategory
                icon={<Img.ScureIcon />}
                label="# 보안"
                location="보안"
              />
              <MainCategory
                icon={<Img.GameIcon />}
                label="# 게임개발"
                location="게임개발"
              />
              <MainCategory
                icon={<Img.DevIcon />}
                label="# 데프옵스"
                location="데프옵스"
              />
              <MainCategory icon={<Img.AIIcon />} label="# AI" location="AI" />
              <MainCategory
                icon={<Img.BlockIcon />}
                label="# 블록체인"
                location="블록체인"
              />
              <MainCategory
                icon={<Img.CertIcon />}
                label="# 자격증"
                location="자격증"
              />
              <MainCategory
                icon={<Img.TestIcon />}
                label="# 코딩테스트"
                location="코딩테스트"
              />
            </St.Section>
          </St.ListEachArea>
          {learningData && learningData?.dtolist.length !== 0 ? (
            <St.ListEachArea>
              <St.ListTitle>학습중인 클래스</St.ListTitle>
              <St.ListUl>
                {learningData &&
                  learningData?.dtolist.slice(0, 2).map((v, index) => {
                    return (
                      <St.Listli key={index} onClick={() => handleClick(v.id)}>
                        <St.ListImg>
                          <St.Img src={v.thumbnail} alt={v.title} />
                        </St.ListImg>
                        <St.ListTextBox>
                          <St.ListEm>제목</St.ListEm>
                          <St.ListText>
                            <span>진도율 ( {v.progressRate}% )</span>
                            <span>기한 : 무제한</span>
                            <St.Gauge>
                              <span
                                style={{
                                  background: "#5F4B8B",
                                  width: `${v.progressRate}%`,
                                }}
                              />
                            </St.Gauge>
                          </St.ListText>
                        </St.ListTextBox>
                      </St.Listli>
                    );
                  })}
              </St.ListUl>
            </St.ListEachArea>
          ) : (
            ""
          )}

          <St.ListEachArea>
            <St.ListTitle>실시간 인기 클래스</St.ListTitle>
            <St.SwiperBox>
              <Swiper spaceBetween={20} slidesPerView={4}>
                <St.ListWrap>
                  {buy &&
                    buy?.dtolist?.map((v, index) => (
                      <SwiperSlide key={index}>
                        <LectureCard
                          lectureBigCategory={v.lectureBigCategory}
                          lectureName={v.lectureName}
                          lectureIntro={v.lectureIntro}
                          lectureThumbnail={v.lectureThumbnail}
                          lectureMidCategory={v.lectureMidCategory}
                          mentoId={v.mentoId}
                          lecturePrice={v.lecturePrice}
                          buyCount={v.buyCount}
                          rating={v.rating}
                          lectureId={v.lectureId}
                        />
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
                  {rating.dtolist.map((v, index) => (
                    <SwiperSlide key={index}>
                      <LectureCard
                        lectureBigCategory={v.lectureBigCategory}
                        lectureName={v.lectureName}
                        lectureIntro={v.lectureIntro}
                        lectureThumbnail={v.lectureThumbnail}
                        lectureMidCategory={v.lectureMidCategory}
                        mentoId={v.mentoId}
                        lecturePrice={v.lecturePrice}
                        buyCount={v.buyCount}
                        rating={v.rating}
                        lectureId={v.lectureId}
                      />
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
              {data &&
                data?.content.slice(0, 3).map((v) => {
                  return (
                    <St.NoticeRightLi
                      key={v.noticeNo}
                      onClick={() => navigate(`/notice/${v.noticeNo}`)}
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
