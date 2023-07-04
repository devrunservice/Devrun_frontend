import React from 'react';
import * as St from "./style"

const NoticeDetail = () => (
  <>
    <St.Title>공지사항</St.Title>
    <St.Top>
      <St.Left>ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ</St.Left>
      <St.Right>
        <St.Name>
          작성자 : ??? <St.NameCheack />
        </St.Name>
        <St.Date>1일전</St.Date>
      </St.Right>
    </St.Top>
    <St.Content />
  </>
);
     
export default NoticeDetail;