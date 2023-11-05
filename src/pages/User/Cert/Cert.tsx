/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useState } from "react";
import useSWR from "swr";
import { authAxios } from "utils/instance";
import { Pagination, CertTable, UserTop } from "components";

const Cert = () => {
const fetcher = (url: string) => authAxios.get(url).then((res) => res.data);
// const [pageno, setPageno] = useState<number>(1);
// const { data, isLoading } = useSWR(`/Certificates/${pageno}`, fetcher);
// if (isLoading) return <div>asd</div>;
// console.log(data);
  return (
    <section>
      <UserTop title="수료증" sub="전체" />
      <CertTable />

      {/* <Pagination
        pageno={pageno}
        setPageno={setPageno}
      /> */}
    </section>
  );
};
export default Cert;
