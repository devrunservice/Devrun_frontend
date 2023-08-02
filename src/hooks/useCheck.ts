import { useState } from "react";
import * as I from "types";

const useCheck = () => {
    const dataLists = [
      { id: 1, name: "aaa", paid_amount: 80, mypoint: 100 },
      { id: 2, name: "bbb", paid_amount: 20 },
    ];
      const [checkedList, setCheckedList] = useState<I.CallbackData[]>([]);
    console.log(checkedList);
  // 체크박스 단일 선택
  const singleCheack = (
    checked: boolean,
    id: number,
    name: string,
    paid_amount: number,
  ) => {
    if (checked) {
      setCheckedList([...checkedList, { id, name, paid_amount }]);
    } else {
      setCheckedList(checkedList.filter((item) => item.id !== id));
    }
  };
  // 전체 선택
  const allCheack = (checked: boolean) => {
    if (checked) {
      setCheckedList(
        dataLists.map((item) => ({
          id: item.id,
          name: item.name,
          paid_amount: item.paid_amount,
        })),
      );
    } else {
      setCheckedList([]);
    }
  };
  return {
    singleCheack,
    allCheack,
    checkedList,
    setCheckedList,
  };
};
export default useCheck;
