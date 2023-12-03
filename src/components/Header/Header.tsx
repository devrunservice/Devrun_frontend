/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {getCookie} from 'utils/cookies';
import Logo from 'asset/images/Logo.png';
import {Modal} from 'components';
import {useInput} from 'hooks';
import {Button} from 'style/Common';
import * as St from './style';
import {userInfoLoading} from '../../redux/reducer/userReducer';
import {logoutLoading} from '../../redux/reducer/loginReducer';
import {cartInfoLoading} from '../../redux/reducer/cartReducer';
import {categorySearchLoading} from '../../redux/reducer/learningReducer';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, onSearch, setSearch] = useInput('');
  const [cookie, setCookie] = useState<boolean>(false);

  const {data} = useSelector((state: RootState) => state.userReducer);
  const {data: cart, addCart} = useSelector(
    (state: RootState) => state.cartReducer
  );
  const {modalMessage1} = useSelector((state: RootState) => state.modalReducer);

  useEffect(() => {
    if (getCookie('accessToken')) {
      dispatch(userInfoLoading(null));
      setCookie(true);
    }
  }, []);  
  useEffect(() => {
    if (getCookie("accessToken")) {
      dispatch(cartInfoLoading(null));
    }
  }, [addCart]);
  const handleLogout = () => {
    dispatch(logoutLoading());
    setCookie(false);
  };

  const handleConfirm = () => {
    if (
      modalMessage1 === '알 수 없는 오류가 발생했습니다.' ||
      modalMessage1 === '이미 로그인 된 다른 기기가 있습니다.' ||
      modalMessage1 === '오류가 감지되었습니다.'
    ) {
      dispatch(logoutLoading());
    }
  };

  const searchBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim === '') return alert('검색어를 적어주세요');
    dispatch(
      categorySearchLoading({
        page: 1,
        bigcategory: '',
        order: 'lecture_start',
        q: search,
      })
    );
    navigate(`/lecture/${search}`);
    setSearch('');
  };

  const priceDot = (num: number) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <St.HeaderWrap>
      <Modal onConfirm={handleConfirm} />
      <St.InnerHeader>
        <St.NavWrap>
          <St.LogoIcon onClick={() => navigate('/')}>
            <img src={Logo} alt="로고" />
          </St.LogoIcon>
          <St.CategoryWrap>
            <St.CategoryLi
              onClick={() =>
                navigate(`/lecture/${encodeURIComponent('전체강의')}`)
              }
            >
              전체강의
            </St.CategoryLi>
            <St.CategoryLi onClick={() => navigate('/notice')}>
              공지사항
            </St.CategoryLi>
            <St.CategoryLi onClick={() => navigate('/createVideo')}>
              강의 등록
            </St.CategoryLi>
          </St.CategoryWrap>
        </St.NavWrap>
        <St.NavWrap>
          <St.SearchBox onSubmit={searchBtn}>
            <St.SearchInput
              type="text"
              onChange={onSearch}
              value={search}
              placeholder="찾고 싶은 강의 주제를 입력해주세요"
            />
            <St.SearchIcon />
          </St.SearchBox>
          {cookie ? (
            <St.NavWrap>
              <St.HeaderIcon>
                <St.Icon onClick={() => navigate('/basket')}>
                  <St.Cart />
                </St.Icon>
                <St.CartHover>
                  <St.CartTop>
                    <St.CartTitle>
                      수강바구니{' '}
                      <St.CartNum>{cart?.lectureInfoList.length}</St.CartNum>
                    </St.CartTitle>
                    <St.CartPrice>
                      총 결제금액{' '}
                      <St.CartNum>
                        {priceDot(
                          cart.lectureInfoList
                            .map((v) => v.lecturePrice)
                            .reduce((a, b) => a + b, 0)
                        )}
                      </St.CartNum>
                      원
                    </St.CartPrice>
                  </St.CartTop>
                  {cart?.lectureInfoList.length !== 0 ? (
                    <>
                      <St.CartUl>
                        {cart?.lectureInfoList.map((v, index) => {
                          return (
                            <St.CartLi
                              key={index}
                              onClick={() =>
                                navigate(`/lectures/${v.lectureId}`)
                              }
                            >
                              <St.ImgWrap>
                                <St.Img
                                  src={v.lectureThumbnail}
                                  alt={v.lectureIntro}
                                />
                              </St.ImgWrap>
                              <St.TextWrap>
                                <St.LectureTitle>
                                  {v.lectureName}
                                </St.LectureTitle>
                                <St.LecturePrice>
                                  <span>{priceDot(v.lecturePrice)}</span>원
                                </St.LecturePrice>
                              </St.TextWrap>
                            </St.CartLi>
                          );
                        })}
                      </St.CartUl>
                      <St.CartButton onClick={() => navigate('/basket')}>
                        장바구니에서 전체보기
                      </St.CartButton>
                    </>
                  ) : (
                    <St.NoCart>
                      <p>담긴 강의가 없습니다.</p>
                      <span>나를 성장 시켜줄 좋은 지식들을 찾아보세요.</span>
                      <button
                        onClick={() =>
                          navigate(`/lecture/${encodeURIComponent('전체강의')}`)
                        }
                      >
                        전체강의 보기
                      </button>
                    </St.NoCart>
                  )}
                </St.CartHover>
              </St.HeaderIcon>
              <St.HeaderIcon>
                <St.Icon>
                  <St.Person />
                </St.Icon>
                <St.Dropdown>
                  <St.DropdownTop>
                    <St.DropdownItemWrapper>
                      <St.DropdownItemBtn
                        onClick={() => navigate('/dashboard')}
                      >
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
              <Button onClick={() =>  navigate('/login')} type="button" $active>
                로그인
              </Button>
              <Button
                onClick={() => navigate('/signup')}
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
