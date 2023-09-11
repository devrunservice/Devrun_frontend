import React from "react";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { RootState } from "redux/store";
import * as St from "./style";

const MypageNav = () => {
  const navigate = useNavigate();
  const local = window.location.pathname;
  const userData = useSelector((state: RootState) => state.userReducer.data);
  return (
    <St.Aside>
      {userData.role === "STUDENT" && (
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
              $active={local === "/profile" || local === "/profileupdate"}
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

      {userData.role === "MENTO" && (
        <St.AsideUl>
          <St.AsideTit>강의관리</St.AsideTit>
          <St.AsideBtn
            onClick={() => navigate("/createcoupon")}
            $active={local === "/createcoupon"}
          >
            쿠폰 관리
          </St.AsideBtn>
        </St.AsideUl>
      )}
    </St.Aside>
  );
};
export default MypageNav;
