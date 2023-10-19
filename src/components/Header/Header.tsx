/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {getCookie} from 'utils/cookies';
import Logo from 'asset/images/Logo.png';
import Modal from 'components/Login/Modal/Modal';
import {Button} from 'style/Common';
import * as St from './style';
import {userInfoLoading} from '../../redux/reducer/userReducer';
import {logoutLoading} from '../../redux/reducer/loginReducer';
import { cartInfoLoading } from "../../redux/reducer/cartReducer";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cookie, setCookie] = useState<boolean>(false);

  const {data} = useSelector((state: RootState) => state.userReducer);
  useEffect(() => {
    if (getCookie('accessToken')) {
      dispatch(userInfoLoading(null));
      dispatch(cartInfoLoading(null));
      setCookie(true);
    }
  }, []);

  const handleLogout = () => {
    dispatch(logoutLoading());
    setCookie(false);
  };


  return (
    <St.HeaderWrap>
      <Modal page="home" />
      <St.InnerHeader>
        <St.NavWrap>
          <St.LogoIcon onClick={() => navigate("/")}>
            <img src={Logo} alt="로고" />
          </St.LogoIcon>
          <St.CategoryWrap>
            <St.CategoryLi>
              <St.CategoryIcon />
              카테고리
            </St.CategoryLi>
            <St.CategoryLi onClick={() => navigate("/notice")}>
              공지사항
            </St.CategoryLi>
            <St.CategoryLi onClick={() => navigate("/createVideo")}>
              강의 등록
            </St.CategoryLi>
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
          {cookie ? (
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
                      {/* <St.ImgWrap>
                        <St.Img src={NoImg} alt="" />
                      </St.ImgWrap> */}
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
                        {data.id}
                      </St.DropdownItemBtn>
                      <p>{data.role}</p>
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
              <Button onClick={() => navigate("/login")} type="button" $active>
                로그인
              </Button>
              <Button
                onClick={() => navigate("/signup")}
                type="button"
                $active={false}
              >
                회원가입
              </Button>
            </St.ButtonWrap>
          )}
        </St.NavWrap>
      </St.InnerHeader>
    </St.HeaderWrap>
  );
};

export default Header;
/* eslint-disable @typescript-eslint/no-unused-vars */
