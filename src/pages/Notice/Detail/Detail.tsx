/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "components";
import * as S from "style/Common";
import * as St from "./style";

const Detail = (props:any) => {
  // const params = useParams();

  console.log(props);
  return (
    <S.Inner>
      <St.Title>공지사항</St.Title>
      <St.Top>
        <St.Left>ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ</St.Left>
        <St.Right>
          <St.Name>
            작성자 : ??? <St.NameCheack />
          </St.Name>
          <St.Date>작성일 : 123</St.Date>
        </St.Right>
      </St.Top>
      <St.Content />
      <Comment />
    </S.Inner>
  );
};
export default Detail;
