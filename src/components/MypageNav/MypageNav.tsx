import React from "react";
import AsideBtn from "./AsideBtn";
import * as St from "./style";

const MypageNav = () => {
  const local = window.location.pathname;

  const lectureCategories = [
    { name: "전체강의", path: "전체강의" },
    { name: "개발기초", path: "개발기초" },
    { name: "프론트엔드", path: "프론트엔드" },
    { name: "데이터", path: "데이터" },
    { name: "백엔드", path: "백엔드" },
    { name: "모바일", path: "모바일" },
    { name: "보안", path: "보안" },
    { name: "게임개발", path: "게임개발" },
    { name: "데브옵스", path: "데브옵스" },
    { name: "AI", path: "AI" },
    { name: "블록체인", path: "블록체인" },
    { name: "자격증", path: "자격증" },
    { name: "코딩테스트", path: "코딩테스트" },
  ];

  const learningManagementLinks = [
    { name: "대쉬보드", path: "/dashboard" },
    { name: "내 학습 관리", path: "/learning" },
    { name: "강의 노트", path: "/notes" },
    { name: "작성한 질문", path: "/questions" },
  ];

  const personalLinks = [
    { name: "내정보", path: "/profile" },
    { name: "수료증", path: "/cert" },
    { name: "쿠폰함", path: "/coupon" },
    { name: "포인트", path: "/point" },
    { name: "구매 내역", path: "/receipt" },
  ];

  const lectureManagementLinks = [
    { name: "강의등록", path: "/createVideo" },
    { name: "쿠폰관리", path: "/createcoupon" },
  ];

  

  return (
    <St.Aside>
      {local.split("/")[1] === "lecture" && (
        <St.AsideUl>
          <St.AsideTit>Devrun 강의</St.AsideTit>
          {lectureCategories.map((v) => (
            <AsideBtn name={v.name} path={v.path} key={v.name} />
          ))}
        </St.AsideUl>
      )}
      {local.slice(1, 7) !== "create" && local.split("/")[1] !== "lecture" && (
        <>
          <St.AsideUl>
            <St.AsideTit>학습 관리</St.AsideTit>
            {learningManagementLinks.map((v) => (
              <AsideBtn name={v.name} path={v.path} key={v.name} />
            ))}
          </St.AsideUl>
          <St.AsideUl>
            <St.AsideTit>개인</St.AsideTit>
            {personalLinks.map((v) => (
              <AsideBtn name={v.name} path={v.path} key={v.name} />
            ))}
          </St.AsideUl>
        </>
      )}
      {(local === "/createcoupon" || local === "/createVideo") && (
        <St.AsideUl>
          <St.AsideTit>강의관리</St.AsideTit>
          {lectureManagementLinks.map((v) => (
            <AsideBtn name={v.name} path={v.path} key={v.name} />
          ))}
        </St.AsideUl>
      )}
    </St.Aside>
  );
};

export default MypageNav;
