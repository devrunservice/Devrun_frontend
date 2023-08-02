import {useState} from "react";

const usePage = ()=>{
    const limit = 10
    const [activePage, setActivePage] = useState<number>(1);
    const offset = (activePage - 1) * limit;
    return {
      limit,
      activePage,
      offset,
      setActivePage,
    };
}
export default usePage;