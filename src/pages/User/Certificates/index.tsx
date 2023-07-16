import React, { useState } from "react";
import { Pagination } from "components";
import * as St from "./style";
import CertPopup from "./CertPopup";

const index = () => {
  const [popup,setPopup] = useState<boolean>(false)

  return (
    <St.Cert>
      <St.Title>
        수료증
        <St.Number>
          전체<St.NumCount>2</St.NumCount>
        </St.Number>
      </St.Title>

      <St.CertCon>
        <St.CertConLi
          onClick={() => setPopup(!popup)}
        >
          <St.Num>1</St.Num>
          <St.Text>23123</St.Text>
          <St.Date>123</St.Date>
        </St.CertConLi>
        {popup && <CertPopup/>}
      </St.CertCon>
      <Pagination />
    </St.Cert>
  );
}
export default index;
