import React from "react";
import { Pagination, Table, UserTop } from "components";
import usePage from "hooks/usePage";

const Cert = () => {
  const notice = "/CertDetail";
  const {activePage,setActivePage,limit} = usePage();
  return (
    <section>
      <UserTop title="수료증" count="1" sub="전체" />
      <Table
        notice={notice}
        name="사람이름"
        date="2023.07.21"
        title="2312223"
        view="123"
        num="1"
      />
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        limit={limit}
      />
    </section>
  );
};
export default Cert;
