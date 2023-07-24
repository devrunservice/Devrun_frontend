/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IRequestPayParams, RequestPayResponse, ICoupon, IBasket } from "types";
import { RootState } from "redux/store";
import { Cart } from "utils";
import NoImg from "asset/images/NoImg.jpg";
import * as S from "style/Common";
import * as St from "./style";

const Basket = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.userReducer.data);

  const [price, setPrice] = useState<IBasket>({
    price: 0,
    couponBoolean: false,
    coupon: "쿠폰을 선택해주세요",
  });

  const [point, setPoint] = useState(0);
  const couponBtn = async (item: string) => {
    if (item !== "쿠폰을 선택해주세요") {
      const data: ICoupon = {
        couponCode: item,
        amount: 100,
      };
      const res = await Cart.coupon(data);
      setPrice({
        ...price,
        price: res.data,
        coupon: item,
        couponBoolean: !price.couponBoolean,
      });
    } else if (item === "쿠폰을 선택해주세요") {
      setPrice({ ...price, coupon: item, couponBoolean: !price.couponBoolean,price:100 }); // 총금액으로 바꿀것.
    }
  };
  
  // 셀렉트박스 닫을때.
  const couponOption = useRef<HTMLDivElement>(null);
  const couponOptionUi = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const couponOut = (e: MouseEvent) => {
      if (
        couponOption.current &&
        couponOptionUi.current &&
        !couponOptionUi.current.contains(e.target as Node) &&
        !couponOption.current.contains(e.target as Node)
      ) {
        setPrice({ ...price, couponBoolean: false });
      }
    };
    document.addEventListener("mousedown", couponOut);
    return () => {
      document.removeEventListener("mousedown", couponOut);
    };
  }, []);

  const priceDot = (num: number) => {
    const returnString = num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const pointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pointValue = parseFloat(e.target.value.replace(/[^\d.]/g, ""));
    const value = isNaN(pointValue) ? 0 : Math.max(0, pointValue);
    setPoint(value);
  };
  const stringPoint =
    point >= 1000
      ? point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : point.toString();

  /* 콜백 함수 정의  */
  const callback = async (response: RequestPayResponse) => {
    const {
      imp_uid,
      paid_amount,
      buyer_email,
      buyer_name,
      buyer_tel,
      pay_method,
      name,
      merchant_uid,
      pg_provider,
    } = response;
    const res = await Cart.callbak({ imp_uid });

    if (paid_amount === res.data.response.amount) {
      // 저장에 성공했을때
      await Cart.save({
        buyer_email,
        buyer_name,
        buyer_tel,
        pay_method,
        name,
        merchant_uid,
        imp_uid,
        paid_amount,
        pg_provider,
      });
      navigate("/learning");
    } else {
      // 저장에 실패했을떄
      alert("결제를 취소했습니다.");
    }
  };

  const basketBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 가맹점 식별코드
    if (!window.IMP) return;
    const { IMP } = window;
    IMP.init("imp75220550");
    /* 2. 결제 데이터 정의하기 */
    const data: IRequestPayParams = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `merchant_${new Date().getTime()}`, // 주문번호
      amount: price.price - point, // 결제금액
      name: "아임포트 결제", // 주문명
      buyer_name: userData.name, // 구매자 이름
      buyer_tel: userData.phonenumber, // 구매자 전화번호
      buyer_email: userData.email, // 구매자 이메일
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };
  return (
    <S.Inner>
      <St.BasketForm onSubmit={basketBtn}>
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
                  <St.Img src={NoImg} alt="" />
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
            이름 <St.Info>{userData.name}</St.Info>
          </St.InfoWrap>
          <St.InfoWrap>
            이메일 <St.Info>{userData.email}</St.Info>
          </St.InfoWrap>
          <St.InfoWrap>
            휴대폰 번호 <St.Info>{userData.phonenumber}</St.Info>
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
          <St.SelectBox ref={couponOption}>
            <St.SelectLabel
              onClick={() =>
                setPrice({ ...price, couponBoolean: !price.couponBoolean })
              }
              active={price.couponBoolean}
            >
              {price.coupon || "쿠폰을 선택해주세요"}
            </St.SelectLabel>
            <St.Arr active={price.couponBoolean} />
            {price.couponBoolean && (
              <St.SelectBoxUi ref={couponOptionUi}>
                <St.SelectBoxLi
                  onClick={() => couponBtn("쿠폰을 선택해주세요")}
                >
                  ------------------------------------------------------------
                  쿠폰 취소
                  ------------------------------------------------------------
                </St.SelectBoxLi>
                <St.SelectBoxLi onClick={() => couponBtn("55519-Vww0UMMKPZue")}>
                  55519-Vww0UMMKPZue
                </St.SelectBoxLi>
              </St.SelectBoxUi>
            )}
          </St.SelectBox>
          <St.SelectWarp>
            <St.SubTitle>포인트</St.SubTitle>
            <St.Count>
              보유 <St.CountSpan>100</St.CountSpan>
            </St.Count>
          </St.SelectWarp>
          <St.PointInput
            type="text"
            placeholder="1000포인트 이상 사용가능"
            onChange={pointChange}
            value={stringPoint}
          />

          {price.coupon !== "쿠폰을 선택해주세요" && (
            <St.DisCountInfo>
              <St.DisCountInfoLeft>
                <St.CouponDisCount />
                할인쿠폰
              </St.DisCountInfoLeft>
              <St.DisCountInfoRight>
                - {priceDot(price.price)}원
              </St.DisCountInfoRight>
            </St.DisCountInfo>
          )}
          {point !== 0 && (
            <St.DisCountInfo>
              <St.DisCountInfoLeft>
                <St.CouponDisCount />
                포인트
              </St.DisCountInfoLeft>
              <St.DisCountInfoRight>- {priceDot(point)}원</St.DisCountInfoRight>
            </St.DisCountInfo>
          )}
          <St.TotalWrap>
            <St.Total>총 결제 금액</St.Total>
            <St.Total>{priceDot(price.price - point)}원</St.Total>
          </St.TotalWrap>
          <St.Privacy>
            회원 본인은 주문내용을 확인했으며,
            <span>구매조건 및 개인정보처리방침</span>과 결제에 동의합니다.
          </St.Privacy>
        </St.WhiteSmallBg>
        <St.Button>결제하기</St.Button>
      </St.BasketForm>
    </S.Inner>
  );
};

export default Basket;
/* eslint-disable @typescript-eslint/no-unused-vars */
