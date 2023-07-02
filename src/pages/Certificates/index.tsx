import React from "react";
import { Certificate, MypageNav } from "components";
import * as St from "style/Common";

const index = () => (
  <St.WhiteBg>
    <St.InnerF>
      <MypageNav />
      <Certificate />
    </St.InnerF>
  </St.WhiteBg>
);
export default index;
