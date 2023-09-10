/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useState } from "react";
import usePage from "hooks/usePage";
import { Pagination, CertTable, UserTop } from "components";

const Cert = () => {
  const { pageno, setPageno} = usePage();

  // 수료 여부 제목 수료날짜 순서 버튼
  return (
    <section>
      <UserTop title="수료증" sub="전체" />
      <CertTable title="수료증" data="as" />

      {/* <Pagination
        pageno={pageno}
        setPageno={setPageno}
      /> */}
    </section>
  );
};
export default Cert;
