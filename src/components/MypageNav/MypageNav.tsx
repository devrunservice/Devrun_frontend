/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "redux/store";
import * as St from "./style";

const MypageNav = () => {
  const navigate = useNavigate();
  const local = window.location.pathname;

  return (
    <St.Aside>
      {local.split("/")[1] === "lecture" && (
        <St.AsideUl>
          <St.AsideTit>Devrun 강의</St.AsideTit>
          <St.AsideBtn
            onClick={() =>
              navigate(`/lecture/${encodeURIComponent("전체강의")}`)
            }
            $active={local === `/lecture/${encodeURIComponent("전체강의")}`}
          >
            전체강의
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() =>
              navigate(`/lecture/${encodeURIComponent("개발기초")}`)
            }
            $active={local === `/lecture/${encodeURIComponent("개발기초")}`}
          >
            개발기초
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() =>
              navigate(`/lecture/${encodeURIComponent("프론트엔드")}`)
            }
            $active={local === `/lecture/${encodeURIComponent("프론트엔드")}`}
          >
            프론트엔드
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() => navigate(`/lecture/${encodeURIComponent("데이터")}`)}
            $active={local === `/lecture/${encodeURIComponent("데이터")}`}
          >
            데이터
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() => navigate(`/lecture/${encodeURIComponent("백엔드")}`)}
            $active={local === `/lecture/${encodeURIComponent("백엔드")}`}
          >
            백엔드
          </St.AsideBtn>

          <St.AsideBtn
            onClick={() => navigate(`/lecture/${encodeURIComponent("모바일")}`)}
            $active={local === `/lecture/${encodeURIComponent("모바일")}`}
          >
            모바일
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() => navigate(`/lecture/${encodeURIComponent("보안")}`)}
            $active={local === `/lecture/${encodeURIComponent("보안")}`}
          >
            보안
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() =>
              navigate(`/lecture/${encodeURIComponent("게임개발")}`)
            }
            $active={local === `/lecture/${encodeURIComponent("게임개발")}`}
          >
            게임개발
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() =>
              navigate(`/lecture/${encodeURIComponent("데브옵스")}`)
            }
            $active={local === `/lecture/${encodeURIComponent("데브옵스")}`}
          >
            데브옵스
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() => navigate(`/lecture/${encodeURIComponent("AI")}`)}
            $active={local === `/lecture/${encodeURIComponent("AI")}`}
          >
            AI
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() =>
              navigate(`/lecture/${encodeURIComponent("블록체인")}`)
            }
            $active={local === `/lecture/${encodeURIComponent("블록체인")}`}
          >
            블록체인
          </St.AsideBtn>

          <St.AsideBtn
            onClick={() => navigate(`/lecture/${encodeURIComponent("자격증")}`)}
            $active={local === `/lecture/${encodeURIComponent("자격증")}`}
          >
            자격증
          </St.AsideBtn>
          <St.AsideBtn
            onClick={() =>
              navigate(`/lecture/${encodeURIComponent("코딩테스트")}`)
            }
            $active={local === `/lecture/${encodeURIComponent("코딩테스트")}`}
          >
            코딩테스트
          </St.AsideBtn>
        </St.AsideUl>
      )}
      {local.slice(1, 7) !== "create" && local.split("/")[1] !== "lecture" && (
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
