import React from "react";
import { MypageType } from "types";
import * as St from "./style";


interface bastetUser {
  user: MypageType;
}

const UserInfo = (props: bastetUser) => (
  <>
    <St.InfoWrap>
      이름 <St.Info>{props.user.name}</St.Info>
    </St.InfoWrap>
    <St.InfoWrap>
      이메일 <St.Info>{props.user.email}</St.Info>
    </St.InfoWrap>
    <St.InfoWrap>
      휴대폰 번호 <St.Info>{props.user.phonenumber}</St.Info>
    </St.InfoWrap>
  </>
);
export default UserInfo;
