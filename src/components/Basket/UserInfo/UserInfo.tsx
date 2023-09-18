import React from "react";
import { BuyerInfo } from "types";
import * as St from "./style";

interface cart {
  info: BuyerInfo;
}


const UserInfo = ({ info }: cart) => (
  <>
    <St.InfoWrap>
      이름 <St.Info>{info.userName}</St.Info>
    </St.InfoWrap>
    <St.InfoWrap>
      이메일 <St.Info>{info.userEmail}</St.Info>
    </St.InfoWrap>
    <St.InfoWrap>
      휴대폰 번호 <St.Info>{info.userPhonumber}</St.Info>
    </St.InfoWrap>
  </>
);
   
  
export default UserInfo;



