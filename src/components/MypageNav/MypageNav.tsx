/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./style";

const MypageNav = () => {
  const navigate = useNavigate();
  const local = window.location.pathname;
  return (
    <St.Aside>
      {local.split("/")[1] === "lecture" && (
        <St.AsideUl>
          <St.LectureTit>프론트엔드</St.LectureTit>
          <St.LectureBtn
            onClick={() => navigate("/lecture/1")}
            $active={local === "/lecture/2"}
          >
            개발기초ㅇ
            <span>2</span>
          </St.LectureBtn>
          <St.LectureBtn
            onClick={() => navigate("/lecture/2")}
            $active={local === "/lecture"}
          >
            프론트엔드
            <span>2</span>
          </St.LectureBtn>
          <St.LectureBtn
            onClick={() => navigate("/lecture/3")}
            $active={local === "/lecture/2"}
          >
            개발기초
            <span>2</span>
          </St.LectureBtn>
          <St.LectureBtn
            onClick={() => navigate("/lecture")}
            $active={local === "/lecture"}
          >
            프론트엔드
            <span>2</span>
          </St.LectureBtn>
        </St.AsideUl>
      )}
      {local !== "/createcoupon" &&
        local !== "/createVideo" &&
        local !== "/lecture" && (
          <>
            <St.AsideUl>
              <St.AsideTit>학습 관리</St.AsideTit>
              <St.AsideBtn
                onClick={() => navigate("/dashboard")}
                $active={local === "/dashboard"}
              >
                대쉬보드
              </St.AsideBtn>
              <St.AsideBtn
                onClick={() => navigate("/learning")}
                $active={local === "/learning"}
              >
                내 학습 관리
              </St.AsideBtn>
              <St.AsideBtn
                onClick={() => navigate("/notes")}
                $active={local === "/notes"}
              >
                강의 노트
              </St.AsideBtn>
              <St.AsideBtn
                onClick={() => navigate("/questions")}
                $active={local === "/questions"}
              >
                작성한 질문
              </St.AsideBtn>
            </St.AsideUl>
            <St.AsideUl>
              <St.AsideTit>개인</St.AsideTit>
              <St.AsideBtn
                onClick={() => navigate("/profile")}
                $active={local === "/profile"}
              >
                내정보
              </St.AsideBtn>
              <St.AsideBtn
                onClick={() => navigate("/cert")}
                $active={local === "/cert" || local === "/CertDetail"}
              >
                수료증
              </St.AsideBtn>

              <St.AsideBtn
                onClick={() => navigate("/coupon")}
                $active={local === "/coupon"}
              >
                쿠폰함
              </St.AsideBtn>
              <St.AsideBtn
                onClick={() => navigate("/point")}
                $active={local === "/point"}
              >
                포인트
              </St.AsideBtn>
              <St.AsideBtn
                onClick={() => navigate("/receipt")}
                $active={local === "/receipt"}
              >
                구매 내역
              </St.AsideBtn>
            </St.AsideUl>
          </>
        )}
      {(local === "/createcoupon" || local === "/createVideo") && (
        <St.AsideUl>
          <St.AsideTit>강의관리</St.AsideTit>
          <St.AsideBtn
            onClick={() => navigate("/createVideo")}
            $active={local === "/createVideo"}
          >
            강의등록
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() => navigate("/createcoupon")}
            $active={local === "/createcoupon"}
          >
            쿠폰관리
          </St.AsideBtn>
        </St.AsideUl>
      )}
    </St.Aside>
  );
};
export default MypageNav;
