import React, { useState } from "react";
import { Pagination, Table } from "components";
import * as S from "../styles";
import CertPopup from "./CertPopup";

const Certificates = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const popupBtn = () => setPopup(!popup);
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
      <Table
        popupBtn={popupBtn}
        name="사람이름"
        date="2023.07.21"
        title="2312223"
        view="123"
        num="1"
      />
      {popup && <CertPopup />}
      <Pagination />
    </section>
  );
};
export default Certificates;
