/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import NoImg from "asset/images/NoImg.jpg";
import Modal from "components/Login/Modal/Modal";
import * as St from "./style";
import { userTmiPending } from "../../redux/reducer/userReducer";
import { logoutLoading } from "../../redux/reducer/loginReducer";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookie, setCookie] = useState<boolean>(false);

  const userId = localStorage.getItem("userId");
  const userData = useSelector((state: RootState) => state.userReducer.data);
  const isLogin = useSelector((state: RootState) => state.loginReducer.isLogin);

  useEffect(() => {
    if (isLogin === true) {
      dispatch(userTmiPending(userId));
    }
  }, []);

  const handleLogout = () => {
    dispatch(logoutLoading());
  };

  return (
    <St.HeaderWrap>
      <Modal page="home" />
      <St.InnerHeader>
        <St.NavWrap>
          <St.LogoIcon onClick={() => navigate("/")} />
          <St.CategoryWrap>
            <St.CategoryLi>
              <St.CategoryIcon />
              카테고리
            </St.CategoryLi>
            <St.CategoryLi>DEVRUN 깜짝특가</St.CategoryLi>
            <St.CategoryLi>BEST</St.CategoryLi>
            <St.CategoryLi>고객센터</St.CategoryLi>
          </St.CategoryWrap>
        </St.NavWrap>
        <St.NavWrap>
          <St.SearchBox>
            <St.SearchInput
              type="text"
              placeholder="찾고 싶은 강의 주제를 입력해주세요"
            />
            <St.SearchIcon />
          </St.SearchBox>
          {isLogin === true ? (
            <St.NavWrap>
              <St.HeaderIcon>
                <St.Icon>
                  <St.Cart />
                </St.Icon>
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
                        <St.Img src={NoImg} alt="" />
                      </St.ImgWrap>
                      <St.TextWrap>
                        <St.LectureTitle>
                          제목입니다 제목입니다잇
                        </St.LectureTitle>
                        <St.LectureSub>제목입니다 제목입니다잇</St.LectureSub>
                        <St.LecturePrice>123</St.LecturePrice>
                      </St.TextWrap>
                    </St.CartLi>
                  </St.CartUl>
                  <St.CartButton onClick={() => navigate("/basket")}>
                    장바구니에서 전체보기
                  </St.CartButton>
                </St.CartHover>
              </St.HeaderIcon>
              <St.HeaderIcon>
                <St.Icon>
                  <St.Person />
                </St.Icon>
                <St.Dropdown>
                  <St.DropdownTop>
                    <St.DropdownItemWrapper>
                      <St.DropdownItemBtn onClick={() => navigate("/profile")}>
                        {userData.id}
                      </St.DropdownItemBtn>
                      <p>{userData.role}</p>
                    </St.DropdownItemWrapper>
                    <St.DropdownItemBtn onClick={handleLogout}>
                      로그아웃
                    </St.DropdownItemBtn>
                  </St.DropdownTop>
                </St.Dropdown>
              </St.HeaderIcon>
            </St.NavWrap>
          ) : (
            <St.ButtonWrap>
              <St.Button
                onClick={() => navigate("/login")}
                type="button"
                active
              >
                로그인
              </St.Button>
              <St.Button
                onClick={() => navigate("/signup")}
                type="button"
                active={false}
              >
                회원가입
              </St.Button>
            </St.ButtonWrap>
          )}
        </St.NavWrap>
      </St.InnerHeader>
    </St.HeaderWrap>
  );
};

export default Header;
/* eslint-disable @typescript-eslint/no-unused-vars */
