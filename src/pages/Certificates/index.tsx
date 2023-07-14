import React from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "components";
import * as St from "./style";

const index = () => {
  const navigate = useNavigate();
  return (
    <St.Cert>
      <St.Title>
        수료증
        <St.Number>
          전체<St.NumCount>2</St.NumCount>
        </St.Number>
      </St.Title>

      <St.CertCon>
        <St.CertConLi onClick={() => navigate("/certificate")}>
          <St.Num>1</St.Num>
          <St.Text>23123</St.Text>
          <St.Date>123</St.Date>
        </St.CertConLi>
      </St.CertCon>
      <Pagination />
    </St.Cert>
  );
}
export default index;
