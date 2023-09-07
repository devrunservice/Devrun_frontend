/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useState } from "react";
import usePage from "hooks/usePage";
import { Pagination, Table, UserTop } from "components";

const Cert = () => {
  const { pageno, setPageno} = usePage();
  const [completions, setCompletions] = useState(false);
  const completion = completions ? "수료완료" : "수료중";


  // 수료 여부 제목 수료날짜 순서 버튼
  return (
    <section>
      {/* <UserTop title="수료증" count="1" sub="전체" /> */}
      {/* <Table
        date="2023.07.21"
        title="1"
        num={1}
        completion={completion}
      /> */}

      {/* <Pagination
        pageno={pageno}
        setPageno={setPageno}
      /> */}
    </section>
  );
};
export default Cert;
