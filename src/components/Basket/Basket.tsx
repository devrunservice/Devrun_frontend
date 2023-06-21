import * as St from './style';
import { CartLecture } from "components";
const ShoppingBasket = () => {
  return (
    <>
      <St.WhiteSmallBg>
        <St.Title>수강바구니</St.Title>
        <St.SelectWarp>
          <St.Left>
            <St.CheckBox type="checkbox" id="allCheck" name="allCheck" />
            <St.CheckLabel htmlFor="allCheck">
              전체선택 <St.CheckAll>2</St.CheckAll> / 2
            </St.CheckLabel>
          </St.Left>
          <St.Right>
            선택삭제
            <St.Deletes />
          </St.Right>
        </St.SelectWarp>
        <St.Product>
          <St.ProductLi>
            <St.CheckBox type="checkbox" id="listCheck" name="listCheck" />
            <St.ContentBox>
              <St.ImgWrap>
                <CartLecture />
              </St.ImgWrap>
              <St.TextBox>
                <St.TextLeft>
                  <St.TitleText>
                    제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다
                  </St.TitleText>
                  <St.SubText>
                    제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다
                  </St.SubText>
                  <St.Writer>
                    강사명 · <St.Hours>무제한 수강</St.Hours>
                  </St.Writer>
                </St.TextLeft>
                <St.TextRight>
                  <St.Discount>25%</St.Discount>
                  <St.DiscountNum>88,000원</St.DiscountNum>
                  <St.Money>66,000원</St.Money>
                </St.TextRight>
              </St.TextBox>
            </St.ContentBox>
          </St.ProductLi>
        </St.Product>
      </St.WhiteSmallBg>
      <St.WhiteSmallBg>
        <St.Title>구매자 정보</St.Title>
        <St.InfoWrap>
          이름 <St.Info>123123</St.Info>
        </St.InfoWrap>
        <St.InfoWrap>
          이메일 <St.Info>123123</St.Info>
        </St.InfoWrap>
        <St.InfoWrap>
          휴대폰 번호 <St.Info>123123</St.Info>
        </St.InfoWrap>
      </St.WhiteSmallBg>
      <St.WhiteSmallBg>
        <St.Title>할인정보</St.Title>
        <St.SelectWarp>
          <St.SubTitle>쿠폰</St.SubTitle>
          <St.Count>
            사용가능 <St.CountSpan>0</St.CountSpan>
          </St.Count>
        </St.SelectWarp>
        <St.SelectBox>
          <St.SelectLabel>쿠폰을 선택해주세요</St.SelectLabel>
          <St.Arr />
          {/* <St.SelectBoxUi>
            <St.SelectBoxLi>내용을 적어주세요</St.SelectBoxLi>
            <St.SelectBoxLi>내용을 적어주세요</St.SelectBoxLi>
            <St.SelectBoxLi>내용을 적어주세요</St.SelectBoxLi>
          </St.SelectBoxUi> */}
        </St.SelectBox>
        <St.SelectWarp>
          <St.SubTitle>포인트</St.SubTitle>
          <St.Count>
            보유 <St.CountSpan>100</St.CountSpan>
          </St.Count>
        </St.SelectWarp>
        <St.PointInput type="text" placeholder="1000포인트 이상 사용가능" />
        <St.DisCountInfo>
          <St.DisCountInfoLeft>
            <St.CouponDisCount />
            할인쿠폰
          </St.DisCountInfoLeft>
          <St.DisCountInfoRight>-10,000</St.DisCountInfoRight>
        </St.DisCountInfo>
        <St.DisCountInfo>
          <St.DisCountInfoLeft>
            <St.CouponDisCount />
            포인트
          </St.DisCountInfoLeft>
          <St.DisCountInfoRight>-10,000</St.DisCountInfoRight>
        </St.DisCountInfo>
        <St.TotalWrap>
          <St.Total>총 결제 금액</St.Total>
          <St.Total>90,000원</St.Total>
        </St.TotalWrap>
        <St.Privacy>
          회원 본인은 주문내용을 확인했으며,
          <span>구매조건 및 개인정보처리방침</span>과 결제에 동의합니다.
        </St.Privacy>
      </St.WhiteSmallBg>
      <St.Btn text={"결제하기"} size={"lg"} color={"point"} />
    </>
  );
};
export default ShoppingBasket;
