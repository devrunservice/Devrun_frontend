import React from "react";
import * as St from "./style";

const Learn = () => (
  <St.LearnLi>
    <St.ImgWrap>
      <St.Img src="" alt="강의제목" />
    </St.ImgWrap>

    <St.TitleText>
      제목일까요 제목일까용?제목일까요 제목일까용? 제목일까요
      제목일까용?제목일까요 제목일까용?제목일까요 제목일까용?제목일까요
      제목일까용?제목일까요 제목일까용? 제목일까요 제목일까용? 제목일까요
      제목일까용? 제목일까요 제목일까용? 제목일까요 제목일까용?
    </St.TitleText>

    <St.TextWrap>
      <p>진도율 ( 55% )</p>
      <p>기한 : 2023-12-31</p>
    </St.TextWrap>
    <St.Gauge>
      <span style={{ background: "#5F4B8B", width: "50%" }} />
    </St.Gauge>
  </St.LearnLi>
);


export default Learn;