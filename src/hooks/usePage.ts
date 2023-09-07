import {useState} from "react";

const usePage = ()=>{
    const [pageno, setPageno] = useState<number>(1);
    const offset = (pageno - 1) * 10;
    return {
      pageno,
      offset,
      setPageno,
    };
}
export default usePage;