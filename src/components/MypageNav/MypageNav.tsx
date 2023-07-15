import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./style";

const MypageNav = () => {
  const navigate = useNavigate();
  const local = window.location.pathname;
  return (
    <St.Aside>
      <St.AsideUl>
        <St.AsideTit>학습 관리</St.AsideTit>
        <St.AsideBtn
          onClick={() => navigate("/dashboard")}
          active={local === "/dashboard"}
        >
          대쉬보드
        </St.AsideBtn>
        <St.AsideBtn
          onClick={() => navigate("/studymanage")}
          active={local === "/studymanage"}
        >
          내 학습 관리
        </St.AsideBtn>
        <St.AsideBtn
          onClick={() => navigate("/notes")}
          active={local === "/notes"}
        >
          강의 노트
        </St.AsideBtn>
        <St.AsideBtn
          onClick={() => navigate("/questions")}
          active={local === "/questions"}
        >
          작성한 질문
        </St.AsideBtn>
      </St.AsideUl>

      <St.AsideUl>
        <St.AsideTit>개인</St.AsideTit>
        <St.AsideBtn
          onClick={() => navigate("/profile")}
          active={local === "/profile" || local === "/profileupdate"}
        >
          프로필
        </St.AsideBtn>
        <St.AsideBtn
          onClick={() => navigate("/certificate")}
          active={local === "/certificate"}
        >
          수료증
        </St.AsideBtn>
        <St.AsideBtn
          onClick={() => navigate("/save")}
          active={local === "/save"}
        >
          스크랩
        </St.AsideBtn>
        <St.AsideBtn
          onClick={() => navigate("/coupon")}
          active={local === "/coupon"}
        >
          쿠폰함
        </St.AsideBtn>
        <St.AsideBtn
          onClick={() => navigate("/receipt")}
          active={local === "/receipt"}
        >
          구매 내역
        </St.AsideBtn>
        {/* <St.AsideBtn onClick={() => navigate("")}>문의 내역</St.AsideBtn> */}
      </St.AsideUl>
    </St.Aside>
  );
};
export default MypageNav;
