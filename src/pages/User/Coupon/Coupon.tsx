import React, { ChangeEvent, useState } from "react";
import { UserTop } from "components";
import { mygage } from "utils/api";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const Coupon = () => {
  const id = useSelector((state:RootState)=>state.userReducer.data)
  console.log()
  const [code,setCode] = useState<string>("")
  const couponHandler = (e:ChangeEvent<HTMLInputElement>) => setCode(e.target.value)
  const couponBtn = async()=>{
    await mygage.coupon({ code ,id:id.id});

  }
  return (
    <section>
      <UserTop title="쿠폰함" />

      <input type="text" onChange={couponHandler}/>
      <button onClick={couponBtn} type="button">버튼</button>
    </section>
  );
}

export default Coupon;
