import React, {useState} from 'react';
import useSWR from 'swr';
import {authAxios} from 'utils/instance';
import {UserTop, Pagination, PointTable, NoData} from 'components';
import {NoSearch} from 'asset';

const Point = () => {
  const fetcher = (url: string) => authAxios.get(url).then((res) => res.data);
  const [pageno, setPageno] = useState<number>(1);
  const {data, isLoading} = useSWR(
    `/PointHistory?page=${pageno}&size=10`,
    fetcher
  );
  if (isLoading) return <div>asd</div>;
  console.log(data);
  return (
    <>
      <UserTop
        title="포인트"
        sub="총 보유포인트"
        count={data === '결제 정보가 없습니다.' ? 0 : data.mypoint}
      />
      {data === '결제 정보가 없습니다.' ? (
        <NoData
          title="적립된 포인트가 존재하지 않습니다"
          span="강의결제 후 포인트를 적립해주세요!"
          tag
          img={<NoSearch />}
        />
      ) : (
        <>
          <PointTable data={data?.pointHistoryPage?.content} />
          <Pagination
            pageno={pageno}
            setPageno={setPageno}
            totalPages={data?.pointHistoryPage?.totalPages}
          />
        </>
      )}
    </>
  );
};
export default Point;
