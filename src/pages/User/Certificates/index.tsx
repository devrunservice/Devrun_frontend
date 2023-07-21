import React, { useState } from "react";
import { Pagination } from "components";
import * as S from "../styles";
import * as St from "./style";
import CertPopup from "./CertPopup";

const index = () => {
  const [popup, setPopup] = useState<boolean>(false);

  return (
    <section>
      <S.Top>
        <S.Title>
          수료증
          <S.Number>
            전체 <S.NumCount>2</S.NumCount>
          </S.Number>
        </S.Title>
      </S.Top>
      <St.CertCon>
        <St.CertConLi onClick={() => setPopup(!popup)}>
          <St.Num>1</St.Num>
          <St.Text>23123</St.Text>
          <St.Date>123</St.Date>
        </St.CertConLi>

        {popup && <CertPopup />}
      </St.CertCon>
      <Pagination />
    </section>
  );
};
export default index;
