/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {NoSearch} from 'asset';
import {Pagination, CertificationTable, UserTop, NoData} from 'components';
import {certificationListLoading} from '../../../redux/reducer/certificationReducer';

const Certifications = () => {
  const dispatch = useDispatch();

  const [pageno, setPageno] = useState<number>(1);

  const certificationList = useSelector(
    (state: RootState) => state.certificationReducer.certificationList
  );

  useEffect(() => {
    dispatch(certificationListLoading({page: pageno}));
  }, []);

  return (
    <section>
      <UserTop title="수료증" sub="전체" />
      {certificationList.dtolist.length > 0 ? (
        <CertificationTable certifications={certificationList.dtolist} />
      ) : (
        <>
          <NoData
            title="수강을 완료한 강의가 없습니다."
            span="수업을 완료해 보세요!"
            tag={false}
            img={<NoSearch />}
          />
          <Pagination
            pageno={pageno}
            setPageno={setPageno}
            totalPages={certificationList.totalPages}
          />
        </>
      )}
    </section>
  );
};
export default Certifications;
