import  { useState, useRef, useEffect } from "react";
import * as I from "types"

const useSelet = () => {
  // 셀렉트박스 닫을때.
  const selet = useRef<HTMLUListElement | null>(null);
  const [selets, setSelets] = useState<I.Selet>({
    seletsBoolean: false,
    seletes: "쿠폰을 선택해주세요",
  });
  useEffect(() => {
    const couponOut = (e: { target: any }) => {
      if (selet.current && !selet.current.contains(e.target)) {
        setSelets({
          ...selets,
          seletsBoolean: false,
          seletes: selets.seletes,
        });
      }
    };
    document.addEventListener("mousedown", couponOut);
    return () => {
      document.removeEventListener("mousedown", couponOut);
    };
  }, []);
  return {
    selet,
    selets,
    setSelets,
    
  };
};
export default useSelet;
