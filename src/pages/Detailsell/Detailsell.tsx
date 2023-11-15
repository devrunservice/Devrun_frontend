import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from 'redux/store';
import YouTube from "react-youtube";
import DOMPurify from "dompurify";
import { getCookie } from "utils/cookies";
import { useDate } from "hooks";
import { Comment } from "components";
import {  Play } from "asset";
import * as St from "./style";
import {
  LectureDetailLoading,
  LectureDetailTextLoading,
} from "../../redux/reducer/learningReducer";
import { addCartLoading } from "../../redux/reducer/cartReducer";




const Detailsell = () => {
  const dispatch = useDispatch();
  const navi = useNavigate()
  const param = useParams();
  const { videoTime } = useDate();
  const { lectureDetail, content } = useSelector(
    (state: RootState) => state.learningReducer
  );
  useEffect(() => {
    dispatch(LectureDetailLoading({ lectureid: param.lectureId }));
    dispatch(LectureDetailTextLoading({ lectureid: 25 }));
  }, [param.lectureId]);
  const [tapNum, setTapNum] = useState<number>(0);
  const onTap = (k: number) => {
     if (k === tapNum) return setTapNum(0);
     if (lectureDetail.lectureSections.find((v) => v.sectionNumber === k))
       return setTapNum(k);
  };
  const onBasket = ()=>{
    if (getCookie('accessToken')) { 
      dispatch(addCartLoading(lectureDetail.lectureid));
      alert("강의가 장바구니에 담겼습니다.");
      navi("/basket")
    }else{
      alert("로그인 후 결제해주세요")
      navi("/login");
    }
  }
  const onBaskets = () => {
    if (getCookie("accessToken")) {
      alert("강의가 장바구니에 담겼습니다.")
      dispatch(addCartLoading(lectureDetail.lectureid));
    } else {
      alert("로그인 후 결제해주세요");
      navi("/login");
    }
    
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
            return (
              <St.DetailHashli key={v}>
                <button>{v}</button>
              </St.DetailHashli>
            );
          })}
        </St.DetailHash>
      </St.PreviewArea>
      <St.DetailTab>
        <St.DetailTabItem>강의소개</St.DetailTabItem>
        <St.DetailTabItem>커리큘럼</St.DetailTabItem>
        <St.DetailTabItem>수강평</St.DetailTabItem>
      </St.DetailTab>
      <St.DetailMainWrap>
        <St.LeftWrap>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content),
            }}
          />
          <St.Curriculum>
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
          <Comment
            text="수강평"
            sub=" · 수강생분들이 직접 작성하신 수강평입니다."
            path="lectures"
          />
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
            <St.Button $active={false} onClick={() => onBasket()}>
              수강신청 하기
            </St.Button>
            <St.Button $active onClick={() => onBaskets()}>
              장바구니에 담기
            </St.Button>
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
    </St.DetailWrap>
  );
};

export default Detailsell;