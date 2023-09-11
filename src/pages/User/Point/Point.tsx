/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { usePage } from "hooks";
import { UserTop, Pagination, PointTable } from "components";
import { pointLoading } from "../../../redux/reducer/pointReducer";


const Point = () => {
    const dispatch = useDispatch()
  const { pageno, setPageno } = usePage();
  const { pointHistoryPage, mypoint } = useSelector(
    (state: RootState) => state.pointReducer
  );

  useEffect(() => {
    dispatch(pointLoading(pageno));
  }, [pageno]);
  console.log(pointHistoryPage);
  return (
    <>
      <UserTop title="포인트" sub="총 보유포인트" count={mypoint} />
      <PointTable pointHistoryPage={pointHistoryPage} />
      <Pagination
        pageno={pageno}
        setPageno={setPageno}
        data={pointHistoryPage}
      />
    </>
  );
};
export default Point;
