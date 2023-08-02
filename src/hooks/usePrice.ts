import React,{ useState } from "react";

const usePrice = () => {
    const [mypoint, setMypoint] = useState(0);
  // 1000당 , 넣기
  const priceDot = (num: number) => {
    const returnString = num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const pointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pointValue = parseFloat(e.target.value.replace(/[^\d.]/g, ""));
    const value = isNaN(pointValue) ? 0 : Math.max(0, pointValue);
    setMypoint(value);
  };
  const stringPoint =
    mypoint >= 1000
      ? mypoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : mypoint.toString();
    return {
      mypoint,
      priceDot,
      pointChange,
      stringPoint,
    };
};
export default usePrice;
