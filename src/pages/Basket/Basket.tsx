/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useNavigate } from "react-router-dom";
import { Product, UserInfo, CouponPop } from "components";
import { Cart } from "utils/api";
import * as I from "types";
import * as S from "style/Common";
import * as St from "./style";



const Basket = () => {
  const navigate = useNavigate();
  const priceDot = (num: number) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const { data,couponPrice } = useSelector((state: RootState) => state.cartReducer)
  const [openCoupon, setOpenCoupon] = useState(false)
  
  const [checkList, setCheckList] = useState<I.LectureInfoList[]>(data.lectureInfoList); 
  const singleCheck = (
    lecture_name: string,
    lecture_intro: string,
    lecture_price: number,
    lecture_thumbnail: string
  ) => {
    setCheckList((prev) =>
      prev.some((item) => item.lecture_name === lecture_name)
        ? prev.filter((item) => item.lecture_name !== lecture_name)
        : [
            ...prev,
            { lecture_name, lecture_intro, lecture_price, lecture_thumbnail },
          ]
    );
  };
  // 무조건 전체 선택
  useEffect(() => {
    setCheckList(data.lectureInfoList);
  }, [data.lectureInfoList]);

  const total = checkList.reduce((current, account) => current + account.lecture_price, 0);

  const [price, setPrice] = useState<I.BasketState>({
    price: total,
    discount: 0,
    couponName: "",
    couponCode: "",
    discountrate: 0,
  });
    const couponList = checkList.some((c) => c.lecture_name === price.couponName ); 
  // 가격
  useEffect(() => {
    setPrice({ ...price, price: total });
    if (price.couponName === "" || !couponList) {
      setPrice({ ...price, price: total, discount: 0, couponName: "" });
    } else if (couponPrice.discountprice) {
      setPrice({
        ...price,
        price: total,
        discount: couponPrice.discountprice[0],
      });
    }
  }, [total, price.couponName, checkList, couponPrice]);
  // 포인트
  const [point, setPoint] = useState(0);
  const onPoint = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value.replace(/[^\d.]/g, ""));
      const v = isNaN(value)
        ? 0
        : Math.min(
            value,
            Math.min(data.buyerInfo.userPoint, price.price - price.discount)
          );
      setPoint(v);
    },
    [price.price, price.discount, data]
  );
  useEffect(() => {
    if (price.couponName !== "" || checkList.length < 0) setPoint(0);
  }, [price.couponName, checkList]);

  // 삭제 
  const onDelete = useCallback(async() => {
    if (window.confirm("해당강의를 삭제하시겠습니까?")) {
      const response = await Cart.delete(checkList);
      alert(response);
    }else{
      alert("취소되었습니다.");
    }
  }, [checkList]);


  // 콜백 함수 정의
  const callback = async (response: I.RequestPayResponse) => {
    const { imp_uid, paid_amount, success } = response;

    const payload: I.bastetCheck[] = checkList.map((item, index) => {
      const baseData = {
        lecture_intro: item.lecture_intro,
        lecture_thumbnail: item.lecture_thumbnail,
        name: item.lecture_name,
        paid_amount: item.lecture_price,
        buyer_email: response.buyer_email || "",
        buyer_name: response.buyer_name || "",
        buyer_tel: response.buyer_tel || "",
        pay_method: response.pay_method || "",
        merchant_uid: response.merchant_uid || "",
        pg_provider: response.pg_provider || "",
        receipt_url: response.receipt_url || "",
        imp_uid: response.imp_uid || "",
        userno: data.buyerInfo.userNo,
        couponCode: price.couponCode || "",
      };
      return index === 0 ? { ...baseData, mypoint: point } : baseData;
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
    const payload: I.RequestPayParams = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `merchant_${new Date().getTime()}`, // 주문번호
      amount: price.price - point - price.discount, // 결제금액
      name:
        checkList.length > 1
          ? `${checkList[0].lecture_name} 외 ${checkList.length - 1}개`
          : ` ${checkList[0].lecture_name}`, // 주문명
      buyer_name: data.buyerInfo.userName, // 구매자 이름
      buyer_tel: data.buyerInfo.userPhonumber, // 구매자 전화번호
      buyer_email: data.buyerInfo.userEmail, // 구매자 이메일
    };
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(payload, callback);
  };
  return (
    <S.Inner>
      <St.BasketForm onSubmit={basketBtn}>
        <St.BasketLeft>
          <St.Title>수강바구니</St.Title>
          <St.SelectWarp>
            <div>
              <St.CheckBox
                type="checkbox"
                name="selectAll"
                id="selectAll"
                checked={checkList.length === data.lectureInfoList.length}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  e.target.checked
                    ? setCheckList(data.lectureInfoList)
                    : setCheckList([])
                }
              />
              <St.CheckLabel htmlFor="selectAll">
                전체선택 <span>{checkList.length}</span> / {data.lectureInfoList.length}
              </St.CheckLabel>
            </div>
            <St.Right type="button" onClick={() => onDelete()}>
              선택삭제
              <St.Deletes />
            </St.Right>
          </St.SelectWarp>
          <St.Product>
            {data.lectureInfoList.map((v, index) => {
              return (
                <Product
                  item={v}
                  key={index}
                  checked={checkList.some(
                    (c) => c.lecture_name === v.lecture_name
                  )}
                  singleCheck={singleCheck}
                  name={price.couponName}
                  dis={price.discountrate}
                />
              );
            })}
          </St.Product>
        </St.BasketLeft>
        <St.BasketRight>
          <St.TitleSub>구매자 정보</St.TitleSub>
          <UserInfo info={data.buyerInfo} />
          <St.TitleSub>할인정보</St.TitleSub>
          <St.InfoWrap>
            <em>쿠폰</em>
            <p>
              사용가능{" "}
              <span>
                {
                  data.couponListInCart.filter(
                    (v) =>
                      v.state === "ACTIVE" &&
                      checkList.some(
                        (list) => list.lecture_name === v.lecturename
                      )
                  ).length
                }
              </span>
            </p>
          </St.InfoWrap>
          <St.Coupon onClick={() => setOpenCoupon(true)} type="button">
            {price.couponName || "쿠폰을 선택해주세요"}
          </St.Coupon>
          {openCoupon && (
            <CouponPop
              setOpenCoupon={setOpenCoupon}
              checkList={checkList}
              info={data}
              setPrice={setPrice}
              price={price}
            />
          )}
          <St.InfoWrap>
            <em>포인트</em>
            <p>
              보유 <span>{priceDot(data.buyerInfo.userPoint)}</span>
            </p>
          </St.InfoWrap>
          <St.PointInput
            type="text"
            onChange={onPoint}
            value={point}
          />

          <St.Privacy>
            회원 본인은 주문내용을 확인했으며,
            <span>구매조건 및 개인정보처리방침</span>과 결제에 동의합니다.
          </St.Privacy>
          <St.Price>
            <span>선택상품 금액</span>
            <span>{priceDot(price.price)}원</span>
          </St.Price>
          <St.Discount>
            <span>할인금액</span>
            <span>
              {price.discount > 0 ? `-${priceDot(price.discount + point)}` : 0}
              원
            </span>
          </St.Discount>
          <St.TotalPrice>
            <span>총 결제금액</span>
            <span>{priceDot(price.price - price.discount - point)}원</span>
          </St.TotalPrice>
          <St.Button>결제하기</St.Button>
        </St.BasketRight>
      </St.BasketForm>
    </S.Inner>
  );
};

export default Basket;
/* eslint-disable @typescript-eslint/no-unused-vars */
