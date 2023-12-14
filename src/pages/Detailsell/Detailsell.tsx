import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from 'redux/store';
import YouTube from "react-youtube";
import { getCookie } from "utils/cookies";
import { useDate } from "hooks";
import { Comment, LectureCard, Content, Btn } from "components";
import {  Play } from "asset";
import * as St from "./style";
import {
  categorySearchLoading,
  LectureDetailLoading,
  LectureDetailTextLoading,
  categorySearchLoadingTwo,
} from "../../redux/reducer/learningReducer";
import { addCartLoading, freeCartLoading } from "../../redux/reducer/cartReducer";




const Detailsell = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const param = useParams();
  const { videoTime } = useDate();
  const {
    lectureDetail,
    content,
    lecture: mento,
    data: lectureBig,
  } = useSelector((state: RootState) => state.learningReducer);
  useEffect(() => {
    dispatch(LectureDetailLoading({ lectureid: param.lectureId }));
    dispatch(LectureDetailTextLoading({ lectureid: param.lectureId }));
    dispatch(
      categorySearchLoading({
        page: 1,
        bigcategory: "",
        order: "lecture_start",
        q: lectureDetail.mentoId.id,
      })
    );
    dispatch(
      categorySearchLoadingTwo({
        page: 1,
        bigcategory: lectureDetail.lectureCategory.lectureBigCategory,
        order: "lecture_start",
        q: "",
      })
    );
  }, []);
  console.log(lectureDetail);
  const [tapNum, setTapNum] = useState<number>(0);
  const onTap = (k: number) => {
    if (k === tapNum) return setTapNum(0);
    if (lectureDetail.lectureSections.find((v) => v.sectionNumber === k))
      return setTapNum(k);
  };
  const onBasket = () => {
    if (getCookie('accessToken')) {
      if (lectureDetail.lecturePrice === 0) {
        dispatch(freeCartLoading({lectureName: lectureDetail.lectureName}));
        alert('강의구매가 완료되었습니다.');
        navi('/learning');
      } else {
        dispatch(addCartLoading(lectureDetail.lectureid));
        alert('강의가 장바구니에 담겼습니다.');
        navi('/basket');
      }
    } else {
      alert('로그인 후 결제해주세요');
      navi('/login');
    }
  };
  const onBaskets = () => {
    if (getCookie('accessToken')) {
      alert("강의가 장바구니에 담겼습니다.");
      dispatch(addCartLoading(lectureDetail.lectureid));
    } else {
      alert('로그인 후 결제해주세요');
      navi('/login');
    }
  };
  const commentRef = useRef<HTMLDivElement>(null)
  const curriculumRef = useRef<HTMLDivElement>(null);
  const commentScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    if (name === "comment" && commentRef.current)
      commentRef.current.scrollIntoView({ behavior: "smooth" });
    if (name === "curriculum" && curriculumRef.current)
      curriculumRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <St.DetailWrap>
      <St.PreviewArea>
        <St.DetailThum>
          <YouTube
            videoId={lectureDetail.lectureSections[0]?.videos[0]?.videoId}
            title={lectureDetail.lectureSections[0]?.videos[0]?.videoTitle}
            // 이벤트 리스너
            onEnd={(e: any) => {
              e.target.stopVideo(0);
            }}
            opts={{
              playerVars: {
                // autoplay: 1,
                rel: 0,
                modestbranding: 1,
              },
            }}
          />
        </St.DetailThum>
        <St.DetailInfoTitle>
          <span>{lectureDetail.lectureIntro}</span>
          <em>{lectureDetail.lectureName}</em>
        </St.DetailInfoTitle>
        <St.DetailUtils>
          <St.DetailUtilsItem>
            {lectureDetail.lectureCategory.lectureBigCategory}
          </St.DetailUtilsItem>
          <St.DetailUtilsItem>{lectureDetail.mentoId.name}</St.DetailUtilsItem>
          <St.DetailUtilsItem>
            <span>{lectureDetail.buyCount}명의 수강생</span>
          </St.DetailUtilsItem>
          <St.DetailUtilsItem>
            {lectureDetail.lectureRating}의 평점
          </St.DetailUtilsItem>
          {/* <St.DetailUtilsItem>
            <LinkImg />
            공유하기
          </St.DetailUtilsItem> */}
        </St.DetailUtils>

        <St.DetailHash>
          {lectureDetail.lectureTag.map((v) => {
            return <St.DetailHashli key={v}>{v}</St.DetailHashli>;
          })}
        </St.DetailHash>
      </St.PreviewArea>
      <St.DetailTab>
        <St.DetailTabItem>강의소개</St.DetailTabItem>
        <St.DetailTabItem onClick={commentScroll} name="curriculum">
          커리큘럼
        </St.DetailTabItem>
        <St.DetailTabItem onClick={commentScroll} name="comment">
          수강평
        </St.DetailTabItem>
      </St.DetailTab>
      <St.DetailMainWrap>
        <St.LeftWrap>
          <Content content={content} />
          <St.Curriculum ref={curriculumRef}>
            <St.CurriculumTitle>
              커리큘럼
              <St.CurriculumCount>
                총{" "}
                <St.Curriculums>
                  {lectureDetail.lectureSections
                    .map((v) => v.videos.length)
                    .reduce((a, b) => a + b, 0)}
                </St.Curriculums>
                개 ·{" "}
                <St.Curriculums>
                  {videoTime(
                    lectureDetail.lectureSections
                      .map((v) =>
                        v.videos
                          .map((k) => k.totalPlayTime)
                          .reduce((a, b) => a + b, 0)
                      )
                      .reduce((a, b) => a + b, 0)
                  )}
                </St.Curriculums>
                의 수업
              </St.CurriculumCount>
            </St.CurriculumTitle>
            <St.CurriculumUl>
              {lectureDetail.lectureSections.map((v) => {
                return (
                  <St.CurriculumLi key={v.sectionid}>
                    <St.CurriculumTop onClick={() => onTap(v.sectionNumber)}>
                      <em>
                        섹션 {v.sectionNumber}. {v.sectionTitle}
                      </em>
                      <p>
                        {v.videos.length}강 ·{" "}
                        {videoTime(
                          v.videos
                            .map((k) => k.totalPlayTime)
                            .reduce((a, b) => a + b, 0)
                        )}
                        <St.Arr $active={tapNum === v.sectionNumber} />
                      </p>
                    </St.CurriculumTop>
                    {tapNum === v.sectionNumber && (
                      <St.CurriculumBottom>
                        {v.videos.map((s) => {
                          return (
                            <St.CurriculumBottomLi key={s.videoNo}>
                              <p>
                                <Play />
                                {s.videoTitle}
                              </p>
                              <em>{videoTime(s.totalPlayTime)}</em>
                            </St.CurriculumBottomLi>
                          );
                        })}
                      </St.CurriculumBottom>
                    )}
                  </St.CurriculumLi>
                );
              })}
            </St.CurriculumUl>
          </St.Curriculum>
          <div ref={commentRef}>
            <Comment
              text="수강평"
              sub=" · 수강생분들이 직접 작성하신 수강평입니다."
              path="/lectures"
              paramId={Number(param.lectureId)}
            />
          </div>
        </St.LeftWrap>
        <St.RightWrap>
          <St.Top>
            <St.TitleSub>
              {lectureDetail.lectureDiscountrate && (
                <p>{lectureDetail.lectureDiscountrate} %</p>
              )}
              <em>{lectureDetail.lecturePrice}원</em>
              {lectureDetail.lectureDiscount && (
                <span>{lectureDetail.lectureDiscount}원</span>
              )}
            </St.TitleSub>
            <St.Btn>
              <Btn text="수강신청 하기" color="full" onBtn={onBasket} />
              {lectureDetail.lecturePrice !== 0 && (
                <Btn text="장바구니에 담기" color="full2" onBtn={onBaskets} />
              )}
            </St.Btn>
          </St.Top>
          <St.Bottom>
            <ul>
              <St.ButtomLi>
                지식공유자 : {lectureDetail.mentoId.name}
              </St.ButtomLi>
              <St.ButtomLi>
                총{" "}
                {lectureDetail.lectureSections
                  .map((v) => v.videos.length)
                  .reduce((a, b) => a + b, 0)}
                개의 수업 (
                {videoTime(
                  lectureDetail.lectureSections
                    .map((v) =>
                      v.videos
                        .map((k) => k.totalPlayTime)
                        .reduce((a, b) => a + b, 0)
                    )
                    .reduce((a, b) => a + b, 0)
                )}
                )
              </St.ButtomLi>
              <St.ButtomLi>수강기한 : 무제한</St.ButtomLi>
              <St.ButtomLi>수료증: 발급</St.ButtomLi>
            </ul>
            <p>지식공유자 답변이 제공되는 강의입니다</p>
          </St.Bottom>
        </St.RightWrap>
      </St.DetailMainWrap>
      <St.OtherWrap>
        <div>
          <div>
            <St.CurriculumTitle>
              {lectureDetail.mentoId.name}님의 다른강의
              <St.CurriculumCount>
                지식공유자님의 다른 강의를 만나보세요!
              </St.CurriculumCount>
            </St.CurriculumTitle>
            <St.ListWrap>
              {mento &&
                mento?.dtolist
                  ?.slice(0, 4)
                  .map((v, index) => (
                    <LectureCard
                      key={index}
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
                  ))}
            </St.ListWrap>
          </div>
          <div>
            <St.CurriculumTitle>
              비슷한 강의
              <St.CurriculumCount>
                같은 분야의 다른 강의를 만나보세요!
              </St.CurriculumCount>
            </St.CurriculumTitle>
            <St.ListWrap>
              {lectureBig &&
                lectureBig?.dtolist
                  ?.slice(0, 4)
                  .map((v, index) => (
                    <LectureCard
                      key={index}
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
                  ))}
            </St.ListWrap>
          </div>
        </div>
      </St.OtherWrap>
    </St.DetailWrap>
  );
};

export default Detailsell;
