/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Pagination, CertTable, UserTop } from "components";

const Cert = () => {
  const [pageno, setPageno] = useState<number>(1);

  return (
    <section>
      <UserTop title="수료증" sub="전체" />
      <CertTable />

      <Pagination
        pageno={pageno}
        setPageno={setPageno}
        totalPages={10}
      />
    </section>
  );
};
export default Cert;
