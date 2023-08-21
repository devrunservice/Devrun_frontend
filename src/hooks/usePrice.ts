import { useState } from "react";

const usePrice = () => {
  const [mypoint, setMypoint] = useState(0);
  // 1000당 , 넣기 숫자일 경우
  const priceDot = (num: number) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 1000당 , 넣기 글자일경우
  const stringPoint =
    mypoint >= 1000
      ? mypoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : mypoint.toString();

  return {
    mypoint,
    priceDot,
    stringPoint,
    setMypoint,
  };
};
export default usePrice;