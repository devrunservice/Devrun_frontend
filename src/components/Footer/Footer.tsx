import React from 'react';
import {FooterLogo} from 'asset';
import * as St from './style';

const Footer = () => (
  <St.FooterBg>
    <St.Inner>
      <St.Top>
        <St.Left>
          <FooterLogo />
          <St.Slogan>최고에게 배우는 최상의 가치</St.Slogan>
        </St.Left>
        <St.Right>
          <St.Link>
            <St.Title>고객센터</St.Title>
            <St.LinkLi>공지사항</St.LinkLi>
            <St.LinkLi>Q&A</St.LinkLi>
            <St.LinkLi>수료증</St.LinkLi>
          </St.Link>
          <St.Link >
            <St.Title>카테고리</St.Title>
            <St.LinkLi>개발기초</St.LinkLi>
            <St.LinkLi>프론트엔드</St.LinkLi>
            <St.LinkLi>데이터</St.LinkLi>
            <St.LinkLi>백엔드</St.LinkLi>
            <St.LinkLi>모바일</St.LinkLi>
            <St.LinkLi>보안</St.LinkLi>
            <St.LinkLi>게임개발</St.LinkLi>
            <St.LinkLi>데프옵스</St.LinkLi>
            <St.LinkLi>AI</St.LinkLi>
            <St.LinkLi>블록체인</St.LinkLi>
            <St.LinkLi>자격증</St.LinkLi>
            <St.LinkLi>코딩테스트</St.LinkLi>
          </St.Link>
        </St.Right>
      </St.Top>
      <St.Bottom>
        <St.Info>(주) 데브런</St.Info>
        <St.Info>주소 : 서울시 강남구 어딘가 가고 싶다 </St.Info>
        <St.Info>E-mail : devrun66@gmail.com</St.Info>
        <St.Info>©2023 DEVRUN All rights reserved</St.Info>
      </St.Bottom>
    </St.Inner>
  </St.FooterBg>
);
export default Footer;
