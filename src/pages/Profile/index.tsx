import React from "react";
import { Profile, MypageNav } from "components";
import * as St from "style/Common";

const index = () => (
  <St.WhiteBg>
    <St.InnerF>
      <MypageNav />
      <Profile />
    </St.InnerF>
  </St.WhiteBg>
);
export default index;
