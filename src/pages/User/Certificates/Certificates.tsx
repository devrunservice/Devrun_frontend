import React, { useState } from "react";
import { Pagination, Table, UserTop } from "components";
import CertPopup from "./CertPopup";

const Certificates = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const popupBtn = () => setPopup(!popup);
  return (
    <section>
      <UserTop title="수료증" count="2" />
      <Table
        popupBtn={popupBtn}
        name="사람이름"
        date="2023.07.21"
        title="2312223"
        view="123"
        num="1"
      />
      {popup && <CertPopup popupBtn={popupBtn} />}
      <Pagination />
    </section>
  );
};
export default Certificates;
