import { useState, useEffect } from "react";
import * as I from "types"

const useCheck = (data:I.bastetCheck[]) => {
  const [checkList, setCheckList] = useState<I.bastetCheck[]>(data);
  const [prevList, setPrevList] = useState<I.bastetCheck[]>(data);
  
  const singleCheck = (id: number, paid_amount:number) => {
    setCheckList((prev) =>
      prev.some((item) => item.id === id)
        ? prev.filter((item) => item.id !== id)
        : [...prev, { id, paid_amount }]
    );
  };

  // 선택 추가
  const addlist = checkList.find((item) => !prevList.includes(item));

  // 선택 제거
  const removelist = prevList.find((item) => !checkList.includes(item));

  useEffect(() => {
    setCheckList(data);
  }, [data]);

  return {
    singleCheck,
    checkList,
    setPrevList,
    setCheckList,
    addlist,
    removelist,
  };
};
export default useCheck;
