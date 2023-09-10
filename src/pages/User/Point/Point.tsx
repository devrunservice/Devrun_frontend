/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { usePage } from "hooks";
import { UserTop, Pagination } from "components";
import { pointLoading } from "../../../redux/reducer/pointReducer";


const Point = () => {
    const dispatch = useDispatch()
  const { pageno, setPageno } = usePage();
  const { data } = useSelector((state: RootState) => state.pointReducer);
  console.log(pageno);
  useEffect(() => {
    dispatch(pointLoading(pageno));
  }, [pageno]);
  console.log(data);
  return (
    <UserTop title="포인트" />
    // <Pagination pageno={pageno} setPageno={setPageno}/>
  );
};
export default Point;
