import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Cart, Person } from "asset";
import NoImg from "asset/images/NoImg.jpg";

import * as St from "./style";

const Header = () => {
  const navigate = useNavigate()
  const basketBtn = () => navigate("/basket");
  const mainBtn = () => navigate("/");
  return (
    <St.HeaderWrap>
      <St.InnerHeader>
        <St.Left>
          <St.LogoIcon onClick={() => mainBtn()} />
          <St.CategoryWrap>
            <St.CategoryLi>
              <St.CategoryIcon />
              카테고리
            </St.CategoryLi>
            <St.CategoryLi>DEVRUN 깜짝특가</St.CategoryLi>
            <St.CategoryLi>BEST</St.CategoryLi>
            <St.CategoryLi>고객센터</St.CategoryLi>
          </St.CategoryWrap>
        </St.Left>
        <St.Right>
          <St.SearchBox>
            <St.SearchInput
              type="text"
              placeholder="찾고 싶은 강의 주제를 입력해주세요"
            />
            <St.SearchIcon />
          </St.SearchBox>
          <St.HeaderIcon>
            <Cart />
            <St.CartHover>
              <St.CartTop>
                <St.CartTitle>
                  수강바구니 <St.CartNum>1</St.CartNum>
                </St.CartTitle>
                <St.CartPrice>
                  총 결제금액 <St.CartNum>29,700</St.CartNum>원
                </St.CartPrice>
              </St.CartTop>

              <St.CartUl>
                <St.CartLi>
                  <St.ImgWrap>
                    <St.ImgBox>
                      <St.Img src={NoImg} alt="" />
                    </St.ImgBox>
                  </St.ImgWrap>
                  <St.TextWrap>
                    <St.LectureTitle>제목입니다 제목입니다잇</St.LectureTitle>
                    <St.LectureSub>제목입니다 제목입니다잇</St.LectureSub>
                    <St.LecturePrice>123</St.LecturePrice>
                  </St.TextWrap>
                </St.CartLi>
              </St.CartUl>
              <St.Button onClick={() => basketBtn()}>
                장바구니에서 전체보기
              </St.Button>
            </St.CartHover>
          </St.HeaderIcon>
          <St.HeaderIcon>
            <Person />
          </St.HeaderIcon>
        </St.Right>
      </St.InnerHeader>
    </St.HeaderWrap>
  );
}

export default Header;
