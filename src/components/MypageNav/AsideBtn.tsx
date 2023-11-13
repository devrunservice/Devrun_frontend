import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./style";

interface Btn {
  name: string;
  path: string;
  key?: string;
}

const AsideBtn = ({ name, path }: Btn) => {
  const navigate = useNavigate();
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
  const navi = (n: string) => {
    const caregory = lectureCategories.find((v)=>v.name === n)
    if (caregory) return navigate(`/lecture/${encodeURIComponent(path)}`);
    return navigate(`${path}`);
  };


  return (
    <St.AsideBtn onClick={()=>navi(name)} $active={local === `/lecture/${encodeURIComponent(path)}` || local === `${path}`}>
      {name}
    </St.AsideBtn>
  );
};
export default AsideBtn;
