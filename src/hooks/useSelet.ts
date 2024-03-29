import  { useState, useRef, useEffect, useCallback } from "react";


interface Selet {
  seletsBoolean: boolean;
  seletes: string;
  seletName: string;
}


const useSelet = () => {
  // 셀렉트박스 닫을때.
  const seletRef = useRef<HTMLUListElement>(null);
  const seletLabelRef = useRef<HTMLLabelElement>(null);
  ;
  const [selets, setSelets] = useState<Selet>({
    seletsBoolean: false,
    seletes: "",
    seletName:"",
  });
  const couponOut = useCallback(
    (e: { target: any }) => {
      if (
        seletRef.current &&
        !seletRef.current.contains(e.target) &&
        seletLabelRef.current &&
        !seletLabelRef.current.contains(e.target)
      ) {
        setSelets({
          ...selets,
          seletsBoolean: false,
          seletes: selets.seletes,
          seletName: selets.seletName
        });
      }
    },
    [selets]
  );
  useEffect(() => {
        document.addEventListener("mousedown", couponOut);
    return () => {
      document.removeEventListener("mousedown", couponOut);
    };
  }, [selets]);
  return {
    seletRef,
    selets,
    setSelets,
    seletLabelRef,
  };
};
export default useSelet;
