import React from "react";
import * as St from "./style";

interface cart {
  userName: string;
  userEmail: string;
  userPhonumber: string;
}


const UserInfo = ({ userName, userEmail, userPhonumber }: cart) => (
  <>
    <St.InfoWrap>
      이름 <St.Info>{userName}</St.Info>
    </St.InfoWrap>
    <St.InfoWrap>
      이메일 <St.Info>{userEmail}</St.Info>
    </St.InfoWrap>
    <St.InfoWrap>
      휴대폰 번호 <St.Info>{userPhonumber}</St.Info>
    </St.InfoWrap>
  </>
);
   
  
export default UserInfo;



