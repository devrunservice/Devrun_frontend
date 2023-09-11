/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "redux/store";
import { useNavigate } from "react-router-dom";
import { usePrice, useSelet, useCheck } from "hooks";
import { decode } from "utils/decode";
import { Cart } from "utils/api";
import { Product, UserInfo } from "components";
import * as I from "types";
import * as S from "style/Common";
import * as St from "./style";


interface BasketState {
  price: number;
  discount: number;
  discounts: number;
}

const dataLists = [
  { id: 1, name: "aaa", paid_amount: 80 },
  { id: 2, name: "bbb", paid_amount: 20 },
  { id: 3, name: "ccc", paid_amount: 40 },
];

const Basket = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.mypageReducer.data);
  const userNum = useSelector((state: RootState) => state.userReducer.data);
  console.log(userData);
  const { mypoint,setMypoint, priceDot,  stringPoint } = usePrice();
  const { seletRef, selets, setSelets, seletLabelRef } = useSelet();
  const {
    singleCheck,
    checkList,
    setPrevList,
    setCheckList,
    addlist,
    removelist,
  } = useCheck(dataLists);

 const checkPrice: number = checkList.reduce(
   (item, num) => num.paid_amount + item,
   0
 );
  
 const [price, setPrice] = useState<BasketState>({
   price: checkPrice,
   discount: 0,
   discounts: 0,
 });
   const pointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const pointValue = parseFloat(e.target.value.replace(/[^\d.]/g, ""));
     const value = isNaN(pointValue)
       ? 0
       : Math.max(0, Math.min(pointValue, price.price - price.discounts));
     setMypoint(value);
   };
  
 


  useEffect(() => {
    setPrice({
      ...price,
      price: checkPrice,
      discounts: price.discount > 0 ? price.price - price.discount : 0,
    });

    if (
      (addlist || removelist || selets.seletes !== "쿠폰을 선택해주세요") &&
      price.discount > 0
    )
      setMypoint(0);

    // 체크가 안되잇을시
    if (checkList.length === 0) {
      setPrice({
        ...price,
        discounts: 0,
        discount: 0,
        price: 0,
      });
      setSelets({
        ...selets,
        seletes: "쿠폰을 선택해주세요",
        seletsBoolean: false,
      });
      setMypoint(0);
    }
  }, [checkList, price.price, price.discount]); 

  // 쿠폰관련 지워도됨
  useEffect(() => {
    const reselectionList = async () => {
      if (
        (removelist || addlist) &&
        price.discount > 0 &&
        selets.seletes !== "쿠폰을 선택해주세요"
      ) {
        const data: I.Coupon = {
          couponCode: selets.seletes,
          amount: price.price,
        };
        const res = await Cart.coupon(data);
        setPrice({
          ...price,
          discount: res.data,
        });
      }
    };
    reselectionList();
    setPrevList(checkList);
  }, [price.price]);
  
  
  

  // 콜백 함수 정의
  const callback = async (response: I.RequestPayResponse) => {
    const { imp_uid, paid_amount, success } = response;

    const payload: I.bastetCheck[] = checkList.map((item, index) => {
      const baseData = {
        id: item.id,
        name: item.name,
        paid_amount: item.paid_amount,
        buyer_email: response.buyer_email,
        buyer_name: response.buyer_name,
        buyer_tel: response.buyer_tel,
        pay_method: response.pay_method,
        merchant_uid: response.merchant_uid,
        pg_provider: response.pg_provider,
        receipt_url: response.receipt_url,
        imp_uid: response.imp_uid,
        userno: userNum.userNo,
      };
      return index === 0 ? { ...baseData, mypoint: mypoint } : baseData;
    });
    const res = await Cart.callbak({ imp_uid });
    if (paid_amount === res.data.response.amount && success) {
      try {
         await Cart.save(payload);
         navigate("/learning");
      } catch (error) {
         alert("결제를 실패했습니다.");
      }
     
    } else {
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
    const data: I.RequestPayParams = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `merchant_${new Date().getTime()}`, // 주문번호
      amount: price.price - mypoint - price.discounts, // 결제금액
      name:
        checkList.length > 1
          ? `${checkList[0].name} 외 ${checkList.length - 1}개`
          : ` ${checkList[0].name}`, // 주문명
      buyer_name: userData.name, // 구매자 이름
      buyer_tel: "01032633143", // 구매자 전화번호
      buyer_email: userData.email, // 구매자 이메일
      
    };
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };
  const couponBtn = useCallback(
    async (item: string) => {
      if (checkList.length === 0 && item !== "쿠폰을 선택해주세요") {
        setSelets({
          ...selets,
          seletes: "쿠폰을 선택해주세요",
          seletsBoolean: false,
        });
        alert("상품을 선택해주세요");
      } else if (item !== "쿠폰을 선택해주세요") {
        const data: I.Coupon = {
          couponCode: item,
          amount: price.price,
        };
        const res = await Cart.coupon(data);
        setPrice({
          ...price,
          discount: res.data,
          price: price.price,
        });
        setSelets({
          seletes: item,
          seletsBoolean: !selets.seletsBoolean,
        });
      } else {
        setPrice({
          ...price,
          price: price.price,
          discount: 0,
        });
        setSelets({
          seletes: item,
          seletsBoolean: !selets.seletsBoolean,
        });
      }
    },
    [selets, checkList, price]
  );

  return (
    <S.Inner>
      <St.BasketForm onSubmit={basketBtn}>
        <St.WhiteSmallBg>
          <St.Title>수강바구니</St.Title>
          <St.SelectWarp>
            <St.Left>
              <St.CheckBox
                type="checkbox"
                name="selectAll"
                id="selectAll"
                checked={checkList.length === dataLists.length}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  e.target.checked ? setCheckList(dataLists) : setCheckList([])
                }
              />
              <St.CheckLabel htmlFor="selectAll">
                전체선택 <St.CheckAll>{checkList.length}</St.CheckAll> /
                {dataLists.length}
              </St.CheckLabel>
            </St.Left>
            <St.Right type="button">
              선택삭제
              <St.Deletes />
            </St.Right>
          </St.SelectWarp>
          <St.Product>
            {dataLists.map((item) => {
              return (
                <Product
                  checked={checkList.some((items) => items.id === item.id)}
                  item={item}
                  key={item.id}
                  singleCheck={singleCheck}
                />
              );
            })}
          </St.Product>
        </St.WhiteSmallBg>
        <St.WhiteSmallBg>
          <St.Title>구매자 정보</St.Title>
          <UserInfo user={userData} />
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
            <St.SelectLabel
              onClick={() =>
                setSelets({ ...selets, seletsBoolean: !selets.seletsBoolean })
              }
              $active={selets.seletsBoolean}
              ref={seletLabelRef}
            >
              {selets.seletes || "쿠폰을 선택해주세요"}
            </St.SelectLabel>
            <St.Arr $active={selets.seletsBoolean} />
            {selets.seletsBoolean && (
              <St.SelectBoxUi ref={seletRef}>
                <St.SelectBoxLi
                  onClick={() => couponBtn("쿠폰을 선택해주세요")}
                >
                  쿠폰 취소
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
          {selets.seletes !== "쿠폰을 선택해주세요" &&
            selets.seletes !== "" && (
              <St.DisCountInfo>
                <St.DisCountInfoLeft>
                  <St.CouponDisCount />
                  할인쿠폰
                </St.DisCountInfoLeft>
                <St.DisCountInfoRight>
                  - {priceDot(price.price - price.discount)}원
                </St.DisCountInfoRight>
              </St.DisCountInfo>
            )}
          {mypoint !== 0 && (
            <St.DisCountInfo>
              <St.DisCountInfoLeft>
                <St.CouponDisCount />
                포인트
              </St.DisCountInfoLeft>
              <St.DisCountInfoRight>
                - {priceDot(mypoint)}원
              </St.DisCountInfoRight>
            </St.DisCountInfo>
          )}
          <St.TotalWrap>
            <St.Total>총 결제 금액</St.Total>
            <St.Total>
              {priceDot(price.price - mypoint - price.discounts)}원
            </St.Total>
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
