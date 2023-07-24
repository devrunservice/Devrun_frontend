import React from 'react';
import { FooterLogo } from "asset"
import * as St from "./style";

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
              <St.Link>
                <St.Title>카테고리</St.Title>
                <St.LinkLi>HTML</St.LinkLi>
                <St.LinkLi>JavaScript</St.LinkLi>
                <St.LinkLi>React</St.LinkLi>
                <St.LinkLi>Spring</St.LinkLi>
                <St.LinkLi>Node.js</St.LinkLi>
                <St.LinkLi>Java</St.LinkLi>
                <St.LinkLi>Python</St.LinkLi>
                <St.LinkLi>Vue.js</St.LinkLi>
                <St.LinkLi>jQuery</St.LinkLi>
                <St.LinkLi>Spring Boot</St.LinkLi>
                <St.LinkLi>Django</St.LinkLi>
                <St.LinkLi>웹앱</St.LinkLi>
              </St.Link>
            </St.Right>
          </St.Top>
          <St.Bottom>
            <St.Info>(주) 데브런 대표자 : 박호연</St.Info>
            <St.Info>주소 : 서울시 강남구 어딘가 가고 싶다 </St.Info>
            <St.Info>E-mail : DevRun@gmail.com</St.Info>
            <St.Info>©2023 DEVRUN All rights reserved</St.Info>
          </St.Bottom>
        </St.Inner>
      </St.FooterBg>
    )
export default Footer