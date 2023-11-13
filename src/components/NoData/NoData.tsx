import React from "react";
import { AsideBtn } from "components";
import * as St from "./style"

interface Data {
  title: string;
  span: string;
  img: JSX.Element;
}


const NoData = ({ title, img, span }: Data) => {

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

  return (
    <St.NoWrap>
      <St.Img>{img}</St.Img>
      <St.Title>
        {title}
        <St.P>{span}</St.P>
      </St.Title>
      <St.Lectures>
        {lectureCategories.map((v) => (
          <St.Lectureli key={v.name}>
            <AsideBtn name={v.name} path={v.path} />
          </St.Lectureli>
        ))}
      </St.Lectures>
    </St.NoWrap>
  );
};

export default NoData;