/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";

import { Cart } from "api";
import { IRequestPayParams, RequestPayResponse } from "types";
import NoImg from "asset/images/NoImg.jpg";
import * as St from "./style";
import { userTmiPending } from "../../redux/reducer/userReducer";

const Basket = () => {
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
      pg_tid,
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
      alert("결제 성공");
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
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 10, // 결제금액
      name: "아임포트 결제", // 주문명
      buyer_name: "송진환", // 구매자 이름
      buyer_tel: "01032633143", // 구매자 전화번호
      buyer_email: "song7022556@gmail.com", // 구매자 이메일
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.userReducer.data);

  const [id, setId] = useState("");
  const idChange = (e: ChangeEvent<HTMLInputElement>) => setId(e.target.value);
  const idFind = () => {
    dispatch(userTmiPending(id));
  };
  return (
    <>
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
        <St.Button>결제하기</St.Button>
      </St.BasketForm>
      <input type="text" onChange={idChange} />
      <button type="button" onClick={idFind}>
        버튼
      </button>
    </>
  );
};

export default Basket;
/* eslint-disable @typescript-eslint/no-unused-vars */
