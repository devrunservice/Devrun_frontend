import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./style"



const MypageNav = () => {
  const navigate = useNavigate();
  const local = window.location.pathname
  return (
    <St.Aside>
      <St.AsideUl>
        <St.AsideTit>학습 관리</St.AsideTit>
        {/* <St.AsideBtn onClick={() => navigate("")}>대쉬보드</St.AsideBtn> */}
        <St.AsideBtn
          onClick={() => navigate("/learning")}
          active={local === "/learning"}
        >
          내 학습 관리
        </St.AsideBtn>
        {/* <St.AsideBtn onClick={() => navigate("")}>강의 노트</St.AsideBtn>
        <St.AsideBtn onClick={() => navigate("")}>작성한 질문</St.AsideBtn>  */}
      </St.AsideUl>

      <St.AsideUl>
        <St.AsideTit>개인</St.AsideTit>
        <St.AsideBtn
          onClick={() => navigate("/profile")}
          active={local === "/profile"}
        >
          프로필
        </St.AsideBtn>
        <St.AsideBtn
          onClick={() => navigate("/certificate")}
          active={local === "/certificate"}
        >
          수료증
        </St.AsideBtn>
        {/* <St.AsideBtn onClick={() => navigate("")}>스크랩</St.AsideBtn>
        <St.AsideBtn onClick={() => navigate("")}>쿠폰함</St.AsideBtn>
        <St.AsideBtn onClick={() => navigate("")}>구매 내역</St.AsideBtn>
        <St.AsideBtn onClick={() => navigate("")}>문의 내역</St.AsideBtn> */}
      </St.AsideUl>
    </St.Aside>
  );
};
export default MypageNav;