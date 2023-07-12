import React from "react";
import { Learning, MypageNav } from "components";
import * as St from "style/Common";

const index = () => (
  <St.WhiteBg>
    <St.InnerF>
      <MypageNav />
      <Learning />
    </St.InnerF>
  </St.WhiteBg>
);
export default index;
