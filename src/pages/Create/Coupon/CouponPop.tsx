import React, {
  ChangeEvent,
  useCallback,
  useState,
  useRef,
  useEffect,
} from "react";
import { useInput, useDate, useSelet } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import * as I from "types"
import * as St from "./style"
import { createCouponLoading, createlectureLoading } from "../../../redux/reducer/mentoCouponReducer";

interface CouponDate {
  day: number;
  year: number;
  month: number;
}
interface CouponRegistration {
  setCoupon: React.Dispatch<React.SetStateAction<boolean>>;
}

const CouponPop = (props: CouponRegistration) => {
  const dispatch = useDispatch();
  const { lecture } = useSelector((state:RootState)=>state.mentoCouponReducer);
  useEffect(()=>{
    dispatch(createlectureLoading(null));
  },[])
  const { seletRef, selets, setSelets, seletLabelRef } = useSelet();
    const { getYear, getMonth, getdate } = useDate();
    const closeBtn = ()=>props.setCoupon(false);
    
    const [quantity, onQuantity] = useInput(""); // 발행수량 
    const [discountrate, setDiscountrate] = useState<number>(0); // 할인율 
    const onDiscountrate = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const discount = Number(e.target.value);
        if (discount >= 80) {
            setDiscountrate(0);
            e.target.value = "";
        }else{
            return setDiscountrate(discount);
        }
        
      },
      []
    );
    const yearRef = useRef<HTMLInputElement>(null);
    const monthRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLInputElement>(null);
    const [date, setdate] = useState<CouponDate>({
        day:0,
        year:0,
        month:0
    });
     const onYear = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const years = e.target.value;
        if (years.length === 4) {
          const selectYear = Number(years);
          if (selectYear < getYear) {
            alert("현재 년도 이전의 날짜를 선택할 수 없습니다.");
            e.target.value = "";
            yearRef.current?.focus();
          } else {
            setdate({ ...date, year: Number(years) });
            if (monthRef.current) {
              monthRef.current.value = "";
            }
            monthRef.current?.focus();
          }
        }
      },
      [date]
    );
    const onMonth = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const months = e.target.value;
        if (months.length === 2) {
          const selectMonth = Number(months);
          if (date.year < getYear || (date.year === getYear && selectMonth < getMonth)) {
            alert("현재 달 이전의 날짜를 선택할 수 없습니다.");
            e.target.value = "";
            monthRef.current?.focus();
          } else if (selectMonth > 12) {
            alert("12월 이상으로는 선택할 수 없습니다.");
            e.target.value = "";
            monthRef.current?.focus();
          } else {
            setdate({ ...date, month: Number(months) });
            if (dayRef.current) {
              dayRef.current.value = "";
            }
            dayRef.current?.focus();
          }
        }
      },
      [date]
    );
    const onDay = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const days = e.target.value;
        if (days.length === 2) {
          if (
            new Date(date.year, date.month - 1, Number(days)) <
            new Date(getYear, getMonth - 1, getdate)
          ) {
            alert("현재 일 이전의 날짜 혹은 없는 일자는 선택할 수 없습니다.");
            e.target.value = "";
            dayRef.current?.focus();
          } else {
            setdate({ ...date, day: Number(days) });
            dayRef.current?.blur();
          }
        }
      },
      [date]
    );
    const months = date.month < 10 ? `0${date.month}` : `${date.month}`;
    const days = date.day < 10 ? `0${date.day}` : `${date.day}`;
    const onCreate = useCallback(
      (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
          selets.seletName === "강의를 선택해주세요" ||
          selets.seletName === ""
        )
          return alert("강의를 선택해주세요");
        if (
          discountrate === 0 ||
          date.year === 0 ||
          date.month === 0 ||
          date.day === 0 ||
          Number(quantity) === 0
        )
          return alert("빈칸을 작성해주세요");

        const creates: I.CreateCoupon = {
          discountrate: discountrate,
          quantity: Number(quantity),
          expirydate: `${date.year}-${months}-${days}`,
          lectureId: selets.seletes,
        };
        try {
          dispatch(createCouponLoading(creates));
          alert("쿠폰을 생성하셨습니다.");

          props.setCoupon(false);
        } catch (error) {
          alert("쿠폰생성에 실패하셨습니다.");
        }
      },
      [quantity, date.day, date.month, date.year, discountrate, selets]
    );
    const couponBtn = useCallback(
      (item: string,name:string) => {
        setSelets({
          ...selets,
          seletes: item,
          seletsBoolean: false,
          seletName: name,
        });
      },
      [selets]
    );
    return (
      <St.PopupWrap>
        <St.Popup>
          <St.Title>
            쿠폰 생성
            <St.Deletes onClick={() => closeBtn()} />
          </St.Title>
          <St.PopCon onSubmit={onCreate}>
            <div>
              <St.Label>쿠폰 적용 대상</St.Label>
              <St.SelectBox>
                <St.SelectTitle
                  onClick={() =>
                    setSelets({
                      ...selets,
                      seletsBoolean: !selets.seletsBoolean,
                    })
                  }
                  $active={selets.seletsBoolean}
                  ref={seletLabelRef}
                >
                  {selets.seletName || "강의를 선택해주세요"}
                </St.SelectTitle>
                <St.Arr $active={selets.seletsBoolean} />
                {selets.seletsBoolean && (
                  <St.SelectBoxUi ref={seletRef}>
                    <St.SelectBoxLi
                      onClick={() => couponBtn("0","강의를 선택해주세요")}
                    >
                      강의를 선택해주세요
                    </St.SelectBoxLi>
                    {lecture.map((v) => {
                      return (
                        <St.SelectBoxLi
                          onClick={() => couponBtn(v.lectureId,v.lectureName)} key={v.lectureId}
                        >
                          {v.lectureName}
                        </St.SelectBoxLi>
                      );
                    })}
                  </St.SelectBoxUi>
                )}
              </St.SelectBox>
            </div>
            <div>
              <St.Label>할인 금액(%)</St.Label>
              <St.Input
                type="number"
                onChange={onDiscountrate}
                placeholder="숫자만 입력해주세요 최대 80% 까지 가능합니다."
              />
            </div>
            <div>
              <St.Label>쿠폰 수량(개)</St.Label>
              <St.Input
                type="number"
                placeholder="숫자만 입력해주세요"
                value={quantity}
                onChange={onQuantity}
              />
            </div>
            <div>
              <St.Label>쿠폰 만료일</St.Label>
              <St.InputWrap>
                <St.Input
                  type="number"
                  placeholder="YYYY"
                  onChange={onYear}
                  ref={yearRef}
                />
                <St.Input
                  ref={monthRef}
                  type="number"
                  placeholder="MM"
                  onChange={onMonth}
                />
                <St.Input
                  ref={dayRef}
                  type="number"
                  onChange={onDay}
                  placeholder="DD"
                />
              </St.InputWrap>
            </div>
            <St.Btn $active>쿠폰생성</St.Btn>
          </St.PopCon>
        </St.Popup>

        <St.PopupBg onClick={() => closeBtn()} />
      </St.PopupWrap>
    );
};

export default CouponPop
